import validator from "validator";
import { IValidationSchema } from "./validation-schema.type";

export interface ISigninBody {
  email: string;
  password: string;
}

export function getBodyErrorSignin(body: ISigninBody = {} as ISigninBody) {
  const { email = "", password = "" } = body;

  const validationSchema: IValidationSchema[] = [
    {
      valid: validator.isEmail(email),
      errorMessage: "E-mail is invalid",
      statusCode: 400,
    },
    {
      valid: validator.isLength(password, { min: 1 }),
      errorMessage: "Password is required",
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
