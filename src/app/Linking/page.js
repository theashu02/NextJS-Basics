'use client'
import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>This is lnking page</h1>
      <Link href="/Basicrouting">Goto the Basicrouting page</Link>
      <Link href="/Navigate">Goto the about page</Link>
    </div>
  );
}

export function generateMetadata({ params }) {
  return {
    title: "Linking Section",
    discription:
      "This is how to generte meta data (differnt title for different page)",
  };
} 