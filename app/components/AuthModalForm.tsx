"use client";

import { FormEvent, InputHTMLAttributes, useState } from "react";

export interface ISigninData {
  email: string;
  password: string;
}

export interface ISignupData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  city: string;
  password: string;
}

export enum AuthTypeEnum {
  SIGNIN = "signin",
  SIGNUP = "signup",
  SIGNOUT = "signout",
}

type Props =
  | {
      type: AuthTypeEnum.SIGNIN;
      onSubmit?: (data: ISigninData) => void;
    }
  | {
      type: AuthTypeEnum.SIGNUP;
      onSubmit?: (data: ISignupData) => void;
    }
  | {
      type: AuthTypeEnum.SIGNOUT;
      onSubmit?: () => void;
    };
export default function AuthModalForm({ type, onSubmit }: Props) {
  const [signinData, setSigninData] = useState<ISigninData>({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState<ISignupData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    if (type === AuthTypeEnum.SIGNIN) {
      onSubmit?.(signinData);
    } else if (type === AuthTypeEnum.SIGNUP) {
      onSubmit?.(signupData);
    } else if (type === AuthTypeEnum.SIGNOUT) {
      onSubmit?.();
    }
  };

  const registerSignin = (
    name: keyof ISigninData
  ): InputHTMLAttributes<HTMLInputElement> => {
    return {
      name,
      required: true,
      value: signinData[name],
      onChange: (ev) => {
        setSigninData((prev) => ({ ...prev, [name]: ev.target.value ?? "" }));
      },
    };
  };

  const registerSignup = (
    name: keyof ISignupData
  ): InputHTMLAttributes<HTMLInputElement> => {
    return {
      name,
      required: true,
      value: signupData[name],
      onChange: (ev) => {
        setSignupData((prev) => ({ ...prev, [name]: ev.target.value ?? "" }));
      },
    };
  };

  const renderButton = () => {
    const buttonOptions: {
      [key in typeof type]: { btnText: string };
    } = {
      signin: {
        btnText: "Sign In",
      },
      signup: {
        btnText: "Create Account",
      },
      signout: {
        btnText: "Sign Out",
      },
    };

    const currentButton = buttonOptions[type];

    if (!currentButton) {
      return <></>;
    }

    return (
      <button
        className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mt-5 disabled:bg-gray-400"
        type="submit"
      >
        {currentButton.btnText}
      </button>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {type === AuthTypeEnum.SIGNUP && (
        <div className="my-3 flex justify-between text-sm">
          <input
            {...registerSignup("first_name")}
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="First Name"
          />
          <input
            {...registerSignup("last_name")}
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Last Name"
          />
        </div>
      )}

      {(type === AuthTypeEnum.SIGNIN || type === AuthTypeEnum.SIGNUP) && (
        <div className="my-3 flex justify-between text-sm">
          <input
            {...(type === AuthTypeEnum.SIGNIN
              ? registerSignin("email")
              : registerSignup("email"))}
            type="email"
            className="border rounded p-2 py-3 w-full"
            placeholder="E-mail"
          />
        </div>
      )}

      {type === AuthTypeEnum.SIGNUP && (
        <div className="my-3 flex justify-between text-sm">
          <input
            {...registerSignup("phone")}
            type="tel"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Phone"
          />
          <input
            {...registerSignup("city")}
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="City"
          />
        </div>
      )}

      {(type === AuthTypeEnum.SIGNIN || type === AuthTypeEnum.SIGNUP) && (
        <div className="my-3 flex justify-between text-sm">
          <input
            {...(type === AuthTypeEnum.SIGNIN
              ? registerSignin("password")
              : registerSignup("password"))}
            type="password"
            className="border rounded p-2 py-3 w-full"
            placeholder="Password"
          />
        </div>
      )}

      {renderButton()}
    </form>
  );
}
