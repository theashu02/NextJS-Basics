import { NextResponse } from "next/server";

export default function middleware(request: any) {
//   if (request.nextUrl.pathname != "/About") {
    return NextResponse.redirect(new URL("/About", request.url));
//   }
}

// to redirect for a specfic path
export const config = {
  matcher: ["/Linking/:path*", "/Navigate/:path*"]
};

// console.log(request);
// if you console log the request then you will receive too many data in terminal
// console.log("middleware");
// middle-ware is used for not accessing routs without the authentication
// so we redirect all the requests to the login page if login page is present
// then we can't redirect all the requests to the login page
// if you want to access any route in the site
// then this middle-ware file is console.log in the terminal
