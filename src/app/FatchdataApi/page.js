"use client";
import { useEffect, useState } from "react";

// to fatch data from api we use usestate and useeffect
// to fatch data in api in client component we use useState and useEffect 
// but in server component we can not use this hooks

export default function page() {
  const [product, setProduct] = useState([]);

  // to fatch data from api put url and convert to json formate
  // use effect are use to fetch data 
  useEffect(async () => {

    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    console.log(data);
    setProduct(data.products);

  }, []);
  return (
    // pass item on the map to get the List of Product
    // to access the key of map
    <div>
      <h1>Fatching data from API</h1>
      <h1>Product List</h1>

      {product.map((item) => (
        <h3>
          Name: {item.title}, Price: {item.price}{" "}
        </h3>
      ))}
    </div>
  );
}
