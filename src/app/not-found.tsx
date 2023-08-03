'use client'
import Link from "next/link";

export default function Notfound() {
  return (
    <div>
      <h1> OH! NO... This Page is Not Found</h1>
      <Link href="/">
        Click Here To Goto Home page
      </Link>
    </div>
  );
}

// read about npm run build options 
// this make production level code and make satic pages 
// and you can start yhis using npm start
