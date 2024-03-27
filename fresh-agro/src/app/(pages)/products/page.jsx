"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/productc/Navbar";
import Catagory from "@/app/components/productc/Catagory";
import Filter from "@/app/components/productc/Filter";
import Cart from "@/app/components/productc/Cart";
import Footer from "@/app/components/Footer";

export default function page() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://thinkcrypt-backend-404c5b8ec31f.herokuapp.com/api/v0/products"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const jsonData = await response.json();
      console.log("Fetched data:", jsonData);
      setProducts(jsonData.doc);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <main className="bg-black">
      <div className="mx-[100px] bg-white">
        <Navbar />
        <Catagory />
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <div className="ps-3">
              <Filter />
            </div>
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-3 mt-[100px]">
              {products.map((product) => (
                <Cart key={product._id} name={product.name} />
              ))}
            </div>
<div className="flex justify-center"><button className="px-4 py-2 font-bold  bg-gray-300">load more</button></div>
            
          </div>
        </div>

        <Footer/>
      </div>
    </main>
  );
}
