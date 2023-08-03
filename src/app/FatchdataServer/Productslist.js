export default async function Productlist() {
  //fatch data from the api
  let data = await fetch("https://dummyjson.com/products");

  // converting data to json formate
  data = await data.json();

  return data.products;
}
