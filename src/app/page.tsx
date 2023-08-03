'use client'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import Button from "./Common/Button";
import Usingstate from "./Common/Usingstate";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hlo my name is ashu</h1>
      <Link href="/FatchdataApi">click here to goto client side api Fatching</Link>
      <User />
      <Data name="ashu" />
      <Data name="aggrim" />
      <Button />
      <Usingstate />
    </main>
  );
}

// it is a component that is reusable in natue by using <User />
// there are two types od component class based and functional 
const User = () => {
  return (
    <div>
      <h1>this is ashu</h1>
    </div>
  );
};

// how to pass data in NEXT js using props
const Data = (props:any) => {
  return (
    <div>my name is {props.name}</div>
  );
};
