import Productlist from "./Productslist";
import Button from "./Button";

// you can export the function or use in same file

// async function Productlist() {
//   //fatch data from the api
//   let data = await fetch("https://dummyjson.com/products");

//   // converting data to json formate
//   data = await data.json();

//   return data.products;
// }

export default async function page() {
  let products = await Productlist();
  // console.log(products);

  return (
    <div>
      <h1>Data fatching from server site</h1>

      {products.map((item) => (
        <div>
          <h3>Name: {item.title}</h3>
          <Button price = {item.price} />
        </div>
      ))}
    </div>
  );
}
