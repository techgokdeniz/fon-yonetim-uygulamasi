import {NextResponse } from "next/server";
import verifyJwt from "./lib/verifyJwt";

export async function middleware(req) {

  let token = req.headers.get("authorization")?.split(" ")[1];
  let verify = await verifyJwt(token);

  if (!verify) {
    return new NextResponse(
      JSON.stringify({ message: "Bu sayfayi goruntulemek icin izniniz bulunmamaktadir.",data: null,error: true}),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/dashboard/:path*"],
};
