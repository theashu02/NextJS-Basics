import { Roboto } from "next/font/google";
import { title } from "process";

const roboto = Roboto({
    weight: "100",
    subsets: ['latin'],
    display: "swap"
})

export default function page() {
  return (
    <div>
      <h1 className={roboto.className} style={{color: 'black', fontSize: '30px'}}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
      </h1>
      <h1 className={roboto.className} style={{color:'blue', fontSize: '30px'}}> 
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate
      </h1>
      <h1 className={roboto.className} style={{color: 'orange', fontSize: '30px'}}> 
        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
        therefore always free from repetition, injected humour, or
        non-characteristic words etc.
      </h1>
    </div>
  );
}

export function generateMetadata({params}){
    return {
      title: "Font Section",
      discription: "This is how to generte meta data (differnt title for different page) this is only work if you work in server site not client site"
    };
} 
