'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

// to navigate in other page import next/navigation
// use route is a hook that use for navigation

export default function page() {
  const router = useRouter();
  return (
    <div>
      <h1>This is About page</h1>
      <Link href="/Linking">Goto Linking page</Link>
      <button onClick={()=>router.push('/Basicrouting')}>click me to navigate</button>
      <button onClick={()=>router.push('/Linking')}>click me to navigate</button>
    </div>
  );
}
