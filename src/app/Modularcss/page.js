"use client";
import custom from "./custom.module.css";
import other from "./other.module.css";

// you can write your own custom modular css
export default function page() {
  // red is class name and other is file that you are importing from
  const { red } = other;
  return (
    <div>
      <h1 className={custom.main}>This is first Line</h1>
      <h1 className={other.main}>This is second line</h1>
      <h1 className={red}>extracting color from the style sheet</h1>
    </div>
  );
}
