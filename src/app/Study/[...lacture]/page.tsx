"use client";

export default function page({params}) {
    console.log(params)
  return (
    <div>
      <h1>Day of college : {params.lacture[0]}</h1>
      <h1>Lacture NO : {params.lacture[1]}</h1>
    </div>
  );
}
