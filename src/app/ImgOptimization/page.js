import Image from "next/image";
import vercelImg from "../../../public/vercel.svg";
import NextImg from "../../../public/next.svg";

export default function page() {
  // to import img from the folder -->1
  // to  use inage from link yiu goto next.config.js and make the object
  return (
    <div>
      <Image src={NextImg} height={200} width={200} />
      <Image src={vercelImg} width={200} height={200} />
      <Image
        src="https://images.pexels.com/photos/17522231/pexels-photo-17522231/free-photo-of-city-street-building-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        width={300}
        height={300}
      />
      <img 
        src={vercelImg.src}
        width={300}
        height={300}
      />
    </div>
  );
}
