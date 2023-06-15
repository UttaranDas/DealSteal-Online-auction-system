import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ProductCard from "./ProductCard"
import axios from 'axios'

const Homepage = () => {
  useEffect(() => {
    document.title = "DealSteal";
  }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from server when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_LINK);
        // Update state with retrieved data
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Check for products every second until at least one product is displayed
    if (loading) {
      const interval = setInterval(() => {
        if (products.length > 0) {
          clearInterval(interval);
          setLoading(false);
        }
      }, 1000);
    }
  }, [loading, products]);

  return (
    <>
      <Navbar />
      <main>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {products.map((product, index) => {
              return <ProductCard
                id={product._id}
                name={product.name}
                src={product.src}
                alt={product.alt}
                description={product.description}
                currentBid={product.currentBid}
                endTime={product.endTime}
                status={product.status}
                key={index}
              />
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;