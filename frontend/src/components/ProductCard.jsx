import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const [timeLeft, setTimeLeft] = useState("00:00:00");

  useEffect(() => {
    // Calculate time left from end time
    const calculateTimeLeft = () => {
      // Get the end time from props or use a predefined value
      const endTime = props.endTime || "2023-04-30T00:00:00.000Z"; // Replace with your actual end time
      const now = new Date().getTime();
      const difference = new Date(endTime) - now;

      if (difference <= 0) {
        // Timer has expired
        setTimeLeft("00:00:00");
      } else {
        // Calculate hours, minutes, and seconds
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Format time left as "hh:mm:ss"
        setTimeLeft(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }
    };

    // Call the calculateTimeLeft function initially and then every second
    calculateTimeLeft();
    const intervalId = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    // Clean up the interval on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [props.endTime]);

  return (
    <Link to={`/product/${props.id}`}>
      <div className="relative overflow-hidden rounded-lg shadow-lg w-100 h-100">
        <div className="absolute top-1 right-2 text-xl font-bold text-black bg-white rounded-full p-2 border border-gray-400">
          {timeLeft}
        </div>
        <img
          src={props.src}
          alt={props.alt}
          className="object-cover w-full h-64 sm:h-72 lg:h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800  to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold">{props.name}</h3>
          <p className="mt-2 text-sm line-clamp-2 ">{props.description}</p>
          <div className="flex">
            <div>
              <p className="mt-4 font-bold text-l">
                Current Bid: Rs. {props.currentBid}
              </p>
            </div>
            <div>
              <button className="mt-3 absolute right-4 bottom-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Bid Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
