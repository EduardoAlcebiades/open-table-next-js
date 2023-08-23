import { NextRequest, NextResponse } from "next/server";
import { TokenUtils } from "./pages/api/auth/utils";

export async function middleware(req: NextRequest, res: NextResponse) {
  const token = req.headers.get("authorization")?.split(" ")[1];
  const requestHeaders = new Headers(req.headers);

  if (!token) {
    return new NextResponse(JSON.stringify({ errorMessage: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    const { sub = "", email = "" } = await TokenUtils.verifyToken<{
      email?: string;
    }>(token);

    if (!sub || !email) {
      throw new Error("Invalid token payload");
    }

    requestHeaders.set("x-user-id", sub);
    requestHeaders.set("x-user-email", email);
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ errorMessage: "Unauthorized" }), {
      status: 401,
    });
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/api/auth/me"],
};
