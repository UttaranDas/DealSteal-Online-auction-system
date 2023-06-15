import React, { useEffect, useState, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import BidAffirmation from "./BidAffirmation";
import io from "socket.io-client";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";

const socket = io('dealsteal');

export const ProductPage = () => {
  const { id } = useParams();
  const { uid, user } = useContext(AuthContext);

  const [product, setProduct] = useState();
  const [bidPrice, setBidPrice] = useState(0);
  const [bid, setBid] = useState(0);
  const [showBidAffirmation, setShowBidAffirmation] = useState(false);
  const [timeLeft, setTimeLeft] = useState("00:00:00");

  const bidInputRef = useRef(null);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_LINK + `product/${id}`)
      .then((response) => {
        setProduct(response.data);
        setBidPrice(response.data.currentBid);
        document.title = response.data.name;
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      if (!product) return;

      const endTime = product.endTime;
      const now = new Date().getTime();
      const date = new Date().toISOString();
      console.log(endTime, now, date);
      const difference = Math.abs(new Date(endTime) - now);

      if (difference <= 0) {
        setTimeLeft("00:00:00");
      } else {
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }
    };

    calculateTimeLeft();
    const intervalId = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [product]);

  const handleBid = (e, newBidPrice) => {
    e.preventDefault();

    socket.emit("newBid", { newBid: newBidPrice, itemId: id, uid: uid });

    setShowBidAffirmation(true);
    setTimeout(() => {
      setShowBidAffirmation(false);
    }, 3000);
    bidInputRef.current.value = 0;
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 py-10">
        <div className="flex flex-wrap">
          <div className="w-full p-4 lg:w-1/2">
            <img src={product.src} alt="Product Image" className="w-3/4" />
          </div>
          <div className="w-full p-4 lg:w-1/2">
            <h1 className="mb-4 text-6xl font-medium">{product.name}</h1>
            <p className="mb-4 text-gray-700 text-xl">{product.description}</p>
            {product.status === "Inactive" ? (
              <div className="top-1 left-5 text-xl font-bold text-white bg-red-500 rounded-full p-2 border border-gray-400 inline-block">
                Inactive
              </div>
            ) : (
              <div className="top-1 left-5 text-xl font-bold text-black bg-white rounded-full p-2 border border-gray-400 inline-block">
                Time left: {timeLeft}
              </div>
            )}
            <p className="mb-4 text-gray-700 text-3xl">
              Current bid: Rs. {bidPrice}
            </p>

            {user && product.status === "Active" && (
              <form className="flex flex-wrap mt-10">
                <div className="w-full pr-4 lg:w-1/2">
                  <input
                    type="number"
                    className="mb-4 w-full rounded-md border-transparent bg-gray-100 px-4 py-2 focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="Enter bid amount"
                    min="1"
                    max="999999999999"
                    ref={bidInputRef}
                    onChange={(e) => setBid(e.target.valueAsNumber)}
                  />
                </div>
                <div className="w-full pl-4 lg:w-1/2">
                  <button
                    className="rounded-full bg-blue-500 px-4 py-2 font-semibold text-xl text-white hover:bg-blue-600"
                    onClick={(e) => handleBid(e, bid)}
                  >
                    Place Bid
                  </button>
                </div>
              </form>
            )}
            {!user && (
              <Link to="/login" className="w-full mt-10 lg:w-1/2">
                <button className="rounded-full bg-gray-400 px-4 py-2 font-semibold text-xl text-white hover:bg-gray-600">
                  Please log in to place a bid!
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {showBidAffirmation && (
        <BidAffirmation
          product={product}
          onClose={() => setShowBidAffirmation(false)}
        />
      )}
    </>
  );
};

export default ProductPage;
