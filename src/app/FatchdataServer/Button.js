"use client";

export default function Button({price}) {
  return (
    <div>
      <button onClick={() => alert("This product price is " + price + "$")}>click me!</button>
    </div>
  );
}
