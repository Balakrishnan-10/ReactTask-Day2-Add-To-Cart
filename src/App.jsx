import React, { useState } from 'react';
import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Products from './Products/Products';

const App = () => {
  const products = [
    {
      id:1,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Fancy Product",
      price: "80.00",
      priceDrop: "40.00",
      enable:false,
    },
    {
      id:2,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Special Item",
      price: "20.00",
      priceDrop: "18.00",
      enable:true,
    },
    {
      id:3,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sale Item",
      price: "50.00",
      priceDrop: "25.00",
      enable:false,
    },
    {
      id:4,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Popular Item",
      price: "40.00",
      priceDrop: "20.00",
      enable:true,
    },
    {
      id:5,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sale Item",
      price: "50.00",
      priceDrop: "25.00",
      enable:false,
    },
    {
      id:6,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Fancy Products",
      price: "280.00",
      priceDrop: "120.00",
      enable:false,
    },
    {
      id:7,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Specal Item",
      price: "20.00",
      priceDrop: "18.00",
      enable:true,
    },
    {
      id:8,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Popular Item",
      price: "40.00",
      priceDrop: "20.00",
      enable:true,
    }
    ];

   const [count,setCount] = useState(0);
   const [cart,setCart] = useState([]);
  return (
    <div>
      <NavBar  count = {count} />
      <Header />
      <Products products= {products} count = {count} setCount = {setCount} cart = {cart} setCart = {setCart} />
      <Footer />
    </div>
  );
};

export default App;