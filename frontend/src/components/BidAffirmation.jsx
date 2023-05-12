import React from "react";

const BidAffirmation = (props) => {
  console.log("bidaffirmation accessed");
  return (
    <>
      <div id="popup" className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-lg mx-auto px-10 py-8 my-10 shadow-xl bg-white rounded-lg">
            <div className="flex items-center justify-center text-green-600 mb-4">
              <div className="rounded-full h-16 w-16 flex items-center justify-center border-2 border-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <p className="text-gray-600 mb-6 text-center">
              Your bid has been placed successfully.
            </p>
            <div className="text-center mb-4">
              <span className="font-semibold">Bid Number:</span>
              <span className="font-bold text-xl">#12345</span>
            </div>
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto flex items-center">
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <img
                    src={props.src}
                    alt="Product Image"
                    className="object-scale-down h-32 w-48 mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{props.name}</h2>
                    <p className="text-gray-600 mb-2">
                      {props.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BidAffirmation;