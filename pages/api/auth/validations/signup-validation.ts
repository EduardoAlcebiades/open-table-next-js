import validator from "validator";
import { IValidationSchema } from "./validation-schema.type";

export type ISignupBody = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  city: string;
  password: string;
}

export function getBodyErrorSignup(body: ISignupBody = {} as ISignupBody) {
  const {
    first_name = "",
    last_name = "",
    email = "",
    phone = "",
    city = "",
    password = "",
  } = body;

  const validationSchema: IValidationSchema[] = [
    {
      valid: validator.isLength(first_name, { min: 3, max: 20 }),
      errorMessage: "First name is invalid",
      statusCode: 400,
    },
    {
      valid: validator.isLength(last_name, { min: 3, max: 20 }),
      errorMessage: "Last name is invalid",
      statusCode: 400,
    },
    {
      valid: validator.isEmail(email),
      errorMessage: "E-mail is invalid",
      statusCode: 400,
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: "Phone number is invalid",
      statusCode: 400,
    },
    {
      valid: validator.isLength(city, { min: 3 }),
      errorMessage: "City is invalid",
      statusCode: 400,
    },
    {
      valid: validator.isStrongPassword(password, {
        minLength: 5,
        minNumbers: 1,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
      }),
      errorMessage: "Password is not strong enouth",
      statusCode: 400,
    },
  ];

  for (let i = 0; i < validationSchema.length; i++) {
    const { valid, errorMessage, statusCode } = validationSchema[i];

    if (!valid) {
      return { errorMessage, statusCode };
    }
  }

  return null;
}
