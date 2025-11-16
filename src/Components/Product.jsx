import React, { useEffect, useState } from "react";
import ProductCard from "./Productcard";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
  
  if (!data || data.length === 0) {
    return (
      <div className="container mx-auto py-5">
        <p className="text-center text-gray-500">Loading products...</p>
      </div>
    );
  }
  
  const datas = data.slice(0, 10);
  return (
    <div className="container mx-auto py-5">
      <h2 className="text-2xl md:text-4xl font-bold mb-5">Products</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {datas.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
