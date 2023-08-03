"use client";

import { useState } from "react";

export default function page() {
    const [color, setColor] = useState({backgroundColor: 'pink', color: 'black'})

  return (
    <div>
      <h1 style={color}>My Name is Ashutosh Chauhan</h1>
      <button onClick={()=>setColor({backgroundColor:'lightblue', color:'red'})}>ToChangeColor</button>
    </div>
  );
}
