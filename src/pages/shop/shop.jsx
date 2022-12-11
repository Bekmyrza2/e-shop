import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Телефоны</h1>
      </div>
      <div className="products">
        {PRODUCTS.filter(item => item.category === "phone").map((product) => (
          <Product data={product} />
        ))}
      </div>
      <div className="shopTitle">
        <h1>Компьютеры</h1>
      </div>
      <div className="products">
        {PRODUCTS.filter(item => item.category === "laptop").map((product) => (
          <Product data={product} />
        ))}
      </div>   
      <div className="shopTitle">
        <h1>Фотоаппараты</h1>
      </div>
      <div className="products">
        {PRODUCTS.filter(item => item.category === "camera").map((product) => (
          <Product data={product} />
        ))}
      </div>

      <div className="shopTitle">
        <h1>Наушники</h1>
      </div>
      <div className="products">
        {PRODUCTS.filter(item => item.category === "airpods").map((product) => (
          <Product data={product} />
        ))}
      </div>
      <div className="shopTitle">
        <h1>Apple часы</h1>
      </div>
      <div className="products">
        {PRODUCTS.filter(item => item.category === "apple watch").map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    
  );
};
