import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import {AuthContext} from '../AuthContext';

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const uid = user.uid;
  const [bids, setBids] = useState(null);

  useEffect(() => {
    document.title = "My Bids";
    axios.get(import.meta.env.VITE_LINK + `mybid/${uid}`).then((response) => {
      setBids(response.data);
    })
  }, []);
  
  if(!bids){
    return <div> Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1  my-10 mx-10 gap-4">
        <h3 className="mb-4 text-3xl font-bold text-gray-800">My Past Bids</h3>
        {bids.map((bids, key) => {
          return (
            <div key={key} className="border p-4 flex flex-row items-center">
              <img
                src="https://via.placeholder.com/150x150.png"
                alt="Product Photo"
                className="mr-4 object-scale-down w-30 h-30"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold">{bids.name}</h2>
                <p className="text-gray-600 my-2">
                  {bids.description}
                </p>
              </div>
              <div className="flex ml-auto flex-col">
                <h2 className="text-lg">Your Bid</h2>
                <p className="text-gray-800 font-bold text-2xl my-2">Rs. 1123{bids.amount}</p>
              </div>
              <div className="ml-auto flex flex-col items-end mx-5">
                <h2 className="text-lg ">{bids.currentBid}</h2>
                <p className="text-gray-800 font-bold text-2xl my-2">Rs. 9696</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                  Bid Again
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default MyBids;
