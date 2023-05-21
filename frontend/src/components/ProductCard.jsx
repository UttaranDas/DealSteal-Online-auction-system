import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductCard = (props) => {
  const [timeLeft, setTimeLeft] = useState("00:00:00");
  const [statusClass, setStatusClass] = useState("");

  useEffect(() => {
    // Calculate time left from end time
    const calculateTimeLeft = () => {
      // Get the end time from props or use a predefined value
      const endTime = props.endTime;
      const now = new Date().getTime();
      const difference = new Date(endTime) - now;
      
      // console.log(props.id, props.status, difference, props.name);

      if (difference <= 0 && props.status == "Active") {
        // Timer has expired
        setTimeLeft("Inactive");

        axios
          .patch(`http://dealsteal.ap-south-1.elasticbeanstalk.com/product/${props.id}`, {
            status: "Inactive",
          })
          .then((response) => {
            console.log("Product status updated to Inactive");
          })
          .catch((error) => {
            console.error("Failed to update product status:", error);
          });
      } else if (props.status === "Active") {
        // Convert difference to weeks, days, hours, minutes, and seconds
        const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Format time left as "ww:dd:hh:mm:ss"
        setTimeLeft(
          `${weeks.toString().padStart(2, "0")}:${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
        if(weeks){
          setTimeLeft(`${weeks.toString().padStart(2, "0")}w ${days.toString().padStart(2, "0")}d`);
        } else if(days){
          setTimeLeft(`${days.toString().padStart(2, "0")}d ${hours.toString().padStart(2, "0")}h`);
        } else if(hours){
          setTimeLeft(`${hours.toString().padStart(2, "0")}h ${minutes.toString().padStart(2, "0")}m`);
        } else if(minutes){
          setTimeLeft(`${minutes.toString().padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`);
        } else{
          setTimeLeft(`${seconds.toString().padStart(2, "0")}s`);
        }
      } else {
        setTimeLeft("Inactive");
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

  useEffect(() => {
    setStatusClass(timeLeft === "Inactive" ? "bg-red-500 text-white" : "bg-white text-black");
  }, [timeLeft]);

  return (
    <Link to={`/product/${props.id}`}>
      <div className="relative overflow-hidden rounded-lg shadow-lg w-100 h-100">
        <div className={`absolute top-1 right-2 text-xl font-bold rounded-full p-2 border border-gray-400 ${statusClass}`}>
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
