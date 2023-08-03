'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <div>
      <h1>This is about page</h1>
      <Link href="/About/Aboutstudent">Go To about Student</Link>
      <br />
      <br />
      <Link href="/About/AboutTeacher">Go To about Teacher</Link>
      <br />
      <br />
      <button onClick={() => router.push("/About/AboutTeacher")}>For Teacher</button>
      <br />
      <br />
      <button onClick={() => router.push("/About/Aboutstudent")}>For Student</button>
    </div>
  );
}


export function generateMetadata({params}) {
  return {
    title: "About Section",
    discription:
      "This is how to generte meta data (differnt title for different page)",
  };
} 