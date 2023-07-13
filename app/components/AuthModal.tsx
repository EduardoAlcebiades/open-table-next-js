"use client";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthModalForm, {
  AuthTypeEnum,
  ISigninData,
  ISignupData,
} from "./AuthModalForm";

import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type Props = {
  /**
   * default: "signin"
   */
  type?: keyof typeof AuthTypeEnum;
};
export default function AuthModal({ type = "SIGNIN" }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignin = (data: ISigninData) => {};

  const handleSignup = (data: ISignupData) => {};

  const handleSignout = () => {};

  const renderButton = () => {
    const buttonOptions: {
      [key in AuthTypeEnum]: { className: string; btnText: string };
    } = {
      [AuthTypeEnum.SIGNIN]: {
        className: "bg-blue-400 text-white border p-1 px-4 rounded",
        btnText: "Signin",
      },
      [AuthTypeEnum.SIGNUP]: {
        className: "border p-1 px-4 rounded",
        btnText: "Signup",
      },
      [AuthTypeEnum.SIGNOUT]: {
        className: "border p-1 px-4 rounded",
        btnText: "Signout",
      },
    };

    const currentButton = buttonOptions[AuthTypeEnum[type]];

    if (!currentButton) {
      return <></>;
    }

    return (
      <button
        className={currentButton.className}
        type="button"
        onClick={handleOpen}
      >
        {currentButton.btnText}
      </button>
    );
  };

  const renderModalContent = () => {
    const contentOptions: {
      [key in AuthTypeEnum]: {
        title: string;
        subtitle: string;
        content?: () => JSX.Element;
      };
    } = {
      [AuthTypeEnum.SIGNIN]: {
        title: "Sign In",
        subtitle: "Log Into Your Account",
        content: () => (
          <AuthModalForm type={AuthTypeEnum.SIGNIN} onSubmit={handleSignin} />
        ),
      },
      [AuthTypeEnum.SIGNUP]: {
        title: "Sign Up",
        subtitle: "Create Your OpenTable Account",
        content: () => (
          <AuthModalForm type={AuthTypeEnum.SIGNUP} onSubmit={handleSignup} />
        ),
      },
      [AuthTypeEnum.SIGNOUT]: {
        title: "Sign Out",
        subtitle: "Sign Out Of Your Account",
        content: () => (
          <AuthModalForm type={AuthTypeEnum.SIGNOUT} onSubmit={handleSignout} />
        ),
      },
    };

    const currentContent = contentOptions[AuthTypeEnum[type]];

    if (!currentContent) {
      return <></>;
    }

    return (
      <Box sx={style}>
        <div className="h-[36rem]">
          <div className="uppercase font-bold text-center pb-2 border-b mb-2">
            <p className="text-sm">{currentContent.title}</p>
          </div>

          <div className="my-5">
            <h2 className="text-2xl font-light text-center">
              {currentContent.subtitle}
            </h2>
          </div>

          {currentContent.content?.()}
        </div>
      </Box>
    );
  };

  return (
    <div>
      {renderButton()}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}
