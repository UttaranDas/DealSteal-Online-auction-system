import React, { useEffect } from "react";
import Footer from "./Footer";

const MyProductBid = () => {
  useEffect(() => {
    document.title = "Product bid";
  }, []);

  return (
    <>
      <nav className="bg-gray-900 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <a
                href="#"
                className="flex flex-shrink-0 items-center text-4xl font-bold text-white"
              >
                {" "}
                Deal{" "}
              </a>
              <a
                href="#"
                className="flex flex-shrink-0 items-center text-4xl font-bold text-white"
              >
                {" "}
                Steal{" "}
              </a>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Patents
                </a>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                className="my-3 block w-full appearance-none rounded-full bg-gray-200 py-2 px-10 pl-20 align-middle leading-normal focus:border-gray-500 focus:bg-white focus:outline-none"
                placeholder="Search"
              />
              <div className="absolute top-3 right-0 mt-3 ml-3">
                <svg
                  className="h-4 w-4 fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M19.707 18.293l-5.5-5.5a8 8 0 1 0-1.414 1.414l5.5 5.5a1 1 0 1 0 1.414-1.414zM4 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Sell
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  My Account
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-100 hover:text-black"
                >
                  LogOut
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="max-w-7xl mx-auto mt-10 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            All Bids on Product
          </h2>
          <div className="bg-white rounded-lg mt-10 mb-20 shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">Product Name</h3>
              <p className="text-gray-500">Ends in: 1 day 5 hours</p>
            </div>
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b-2 border-gray-400">
                  <th className="px-4 py-2 text-left text-gray-800 font-semibold">
                    #
                  </th>
                  <th className="px-4 py-2 text-left text-gray-800 font-semibold">
                    Bidder
                  </th>
                  <th className="px-4 py-2 text-left text-gray-800 font-semibold">
                    Amount
                  </th>
                  <th className="px-4 py-2 text-left text-gray-800 font-semibold">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-400">
                <tr className="py-2">
                  <td className="px-4 py-2 text-gray-800">1</td>
                  <td className="px-4 py-2 text-gray-800">Bidder 1</td>
                  <td className="px-4 py-2 text-gray-800">$100</td>
                  <td className="px-4 py-2 text-gray-800">2022-02-24</td>
                </tr>
                <tr className="py-2">
                  <td className="px-4 py-2 text-gray-800">2</td>
                  <td className="px-4 py-2 text-gray-800">Bidder 2</td>
                  <td className="px-4 py-2 text-gray-800">$150</td>
                  <td className="px-4 py-2 text-gray-800">2022-02-23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MyProductBid;
