import React, { useState } from "react";

export default function Usingstate() {
  const [name, setName] = useState("ashu");
  const Nickname = () => {
    setName("riya");
  };

  // make component in component innercomp
  const Atom = () => {
    return <h1>hiiiiiiiii developer</h1>;
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello my name is {name}</h1>
      <button onClick={() => Nickname()}>changeME</button>
      <Atom />
    </main>
  );
}
