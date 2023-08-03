"use client";

// this is hoe dynamic routing works

import Link from "next/link";
export default function page() {
  return (
    <div>
      <h1>Student Details</h1>
      <ul>
        <li>
          <Link href="/Studentlist/Ashu">Ashu</Link>
        </li>
        <li>
          <Link href="/Studentlist/Aggrim">Aggrim</Link>
        </li>
        <li>
          <Link href="/Studentlist/Krishna jii">Krishna jii</Link>
        </li>
        <li>
          <Link href="/Studentlist/Arjun">Arjun</Link>
        </li>
      </ul>
    </div>
  );
}
