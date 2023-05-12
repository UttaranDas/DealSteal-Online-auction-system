import React, { useEffect } from "react";
import Footer from "./Footer";

const MyAccount = () => {
  useEffect(() => {
    document.title = "My Account";
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
        {/* <!-- My Products and My Purchases Sections --> */}
        <div className="mx-auto mt-10 max-w-7xl p-6">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">My Account</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* <!-- My Products Section --> */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                My Products
              </h3>
              <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <img
                      src="https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=6wc4q5s37IHzQh-2uAaaXROj2dSNWYpwFz6oHRQYKsQ="
                      alt="Product Image"
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                      <p className="font-bold leading-tight text-gray-700">
                        Current Bid - Rs. 9,999
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum eget semper mi. Duis eu tellus risus.
                      </p>
                      <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        Bid Now
                      </button>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <img
                      src="https://media.istockphoto.com/id/503416862/es/foto/gimnasio-gimnasio-ejercicio-hombre-listo-para-ejercicio-con-tetera-bell.jpg?s=612x612&w=0&k=20&c=n0Q96IDd4g39ncvvP_JC3IYaQUZG8sc3CLvAoN8zjVk="
                      alt="Product Image"
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                      <p className="font-bold leading-tight text-gray-700">
                        Current Bid - Rs. 9,999
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum eget semper mi. Duis eu tellus risus.
                      </p>
                      <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        Bid Now
                      </button>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <img
                      src="https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=6wc4q5s37IHzQh-2uAaaXROj2dSNWYpwFz6oHRQYKsQ="
                      alt="Product Image"
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                      <p className="font-bold leading-tight text-gray-700">
                        Current Bid - Rs. 9,999
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum eget semper mi. Duis eu tellus risus.
                      </p>
                      <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        Bid Now
                      </button>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <img
                      src="https://media.istockphoto.com/id/1279902517/es/foto/s%C3%A9-tan-fuerte-como-naciste-para-ser.jpg?s=612x612&w=0&k=20&c=RPVx_e9KazhmSqjyJN2v_APIUk18qKkmfMSVH7YnJnU="
                      alt="Product Image"
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                      <p className="font-bold leading-tight text-gray-700">
                        Current Bid - Rs. 9,999
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum eget semper mi. Duis eu tellus risus.
                      </p>
                      <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        Bid Now
                      </button>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <img
                      src="https://media.istockphoto.com/id/503416862/es/foto/gimnasio-gimnasio-ejercicio-hombre-listo-para-ejercicio-con-tetera-bell.jpg?s=612x612&w=0&k=20&c=n0Q96IDd4g39ncvvP_JC3IYaQUZG8sc3CLvAoN8zjVk="
                      alt="Product Image"
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                      <p className="font-bold leading-tight text-gray-700">
                        Current Bid - Rs. 9,999
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum eget semper mi. Duis eu tellus risus.
                      </p>
                      <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        Bid Now
                      </button>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <img
                      src="https://media.istockphoto.com/id/612262390/es/foto/culturismo-de-ejercicios.jpg?s=612x612&w=0&k=20&c=1HJPvd_o1Md8Wbg58RiuBhR11bGW0XSoTKu7-gABDUQ="
                      alt="Product Image"
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                      <p className="font-bold leading-tight text-gray-700">
                        Current Bid - Rs. 9,999
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum eget semper mi. Duis eu tellus risus.
                      </p>
                      <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        Bid Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- My Purchases Section --> */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                My Purchases
              </h3>
              <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <img
                      src="https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=6wc4q5s37IHzQh-2uAaaXROj2dSNWYpwFz6oHRQYKsQ="
                      alt="Product Image"
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                      <p className="font-bold leading-tight text-gray-700">
                        Current Bid - Rs. 9,999
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum eget semper mi. Duis eu tellus risus.
                      </p>
                      <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        Bid Now
                      </button>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <img
                      src="https://media.istockphoto.com/id/1279902517/es/foto/s%C3%A9-tan-fuerte-como-naciste-para-ser.jpg?s=612x612&w=0&k=20&c=RPVx_e9KazhmSqjyJN2v_APIUk18qKkmfMSVH7YnJnU="
                      alt="Product Image"
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                      <p className="font-bold leading-tight text-gray-700">
                        Current Bid - Rs. 9,999
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum eget semper mi. Duis eu tellus risus.
                      </p>
                      <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        Bid Now
                      </button>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <img
                      src="https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=6wc4q5s37IHzQh-2uAaaXROj2dSNWYpwFz6oHRQYKsQ="
                      alt="Product Image"
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                      <p className="font-bold leading-tight text-gray-700">
                        Current Bid - Rs. 9,999
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum eget semper mi. Duis eu tellus risus.
                      </p>
                      <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        Bid Now
                      </button>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <img
                      src="https://media.istockphoto.com/id/1279902517/es/foto/s%C3%A9-tan-fuerte-como-naciste-para-ser.jpg?s=612x612&w=0&k=20&c=RPVx_e9KazhmSqjyJN2v_APIUk18qKkmfMSVH7YnJnU="
                      alt="Product Image"
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                      <p className="font-bold leading-tight text-gray-700">
                        Current Bid - Rs. 9,999
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum eget semper mi. Duis eu tellus risus.
                      </p>
                      <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        Bid Now
                      </button>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <img
                      src="https://media.istockphoto.com/id/503416862/es/foto/gimnasio-gimnasio-ejercicio-hombre-listo-para-ejercicio-con-tetera-bell.jpg?s=612x612&w=0&k=20&c=n0Q96IDd4g39ncvvP_JC3IYaQUZG8sc3CLvAoN8zjVk="
                      alt="Product Image"
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                      <p className="font-bold leading-tight text-gray-700">
                        Current Bid - Rs. 9,999
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum eget semper mi. Duis eu tellus risus.
                      </p>
                      <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        Bid Now
                      </button>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <img
                      src="https://media.istockphoto.com/id/612262390/es/foto/culturismo-de-ejercicios.jpg?s=612x612&w=0&k=20&c=1HJPvd_o1Md8Wbg58RiuBhR11bGW0XSoTKu7-gABDUQ="
                      alt="Product Image"
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                      <p className="font-bold leading-tight text-gray-700">
                        Current Bid - Rs. 9,999
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum eget semper mi. Duis eu tellus risus.
                      </p>
                      <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        Bid Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MyAccount;
