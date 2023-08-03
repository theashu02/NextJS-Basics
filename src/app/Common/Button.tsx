"use client";
//this is for because we use client side rendering so we can specify that 'use client'

export default function Button() {
  //you can also write component in it and pass into buuton {apple} second button
  const apple = () => {
    alert("fruit is red");
  };
  //this is third type to pass data init third button
  const omen=(atom: any)=>{
    alert(atom)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <button onClick={() => alert("this is not fair")}>click me</button>

      <button onClick={apple}>touchme</button>
      
      <button onClick={()=>omen("this is omen atom")}>don't touchme</button>

    </main>
  );
}
