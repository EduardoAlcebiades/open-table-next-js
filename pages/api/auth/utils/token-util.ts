import * as jose from "jose";

export abstract class TokenUtils {
  static async genAuthTokens<T extends object = {}>(
    payload: jose.JWTPayload & T
  ) {
    const alg = "HS256";
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const access_token = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime("2h")
      .sign(secret);

    // TODO: add id_token and refresh_token

    return { access_token };
  }

  static async verifyToken<T extends object = {}>(token: string) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const { payload } = await jose.jwtVerify(token, secret);

    return payload as jose.JWTPayload & T;
  }
}
