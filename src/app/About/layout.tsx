"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// this is how to use conditional layout and normal layout
// pass childern in funnction to make a common layout
// in last use {children} to make a common layout 
// use a hook usepathname to console log the path 

export default function layout({ children }) {
  const Pathname = usePathname();
  console.log(Pathname);
  return (
    <div>
      {Pathname !== "/About/AboutTeacher" ? (
        <ul>
          <li>
            <h4>About Nevbar</h4>
          </li>
          <br />
          <li>
            <Link href="/About">About Main</Link>
          </li>
          <br />
          <li>
            <Link href="/About/Aboutstudent">Student About</Link>
          </li>
          <br />
          <li>
            <Link href="/About/AboutTeacher">Teacher About</Link>
          </li>
        </ul>
      ) : (
        <Link href="/About/AboutTeacher">Teacher About</Link>
      )}
      <br />
      {children}
    </div>
  );
}
