"use client";

// import { Script } from "vm";
import Script from "next/script";
export default function page() {
  return (
    <div style={{ background: "#f5f5f5" }}>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("File lodead");
        }}
      />
      <h1 style={{ fontSize: "30px", color: "orange", fontWeight: "bold" }}>
        This is location Page
      </h1>
    </div>
  );
}
