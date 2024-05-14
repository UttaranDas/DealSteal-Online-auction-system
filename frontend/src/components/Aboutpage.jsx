import React from "react";
import Navbar from "./Navbar";

const Aboutpage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white rounded-lg shadow-lg px-8 py-2 my-3">
        <h1 className="text-3xl text-center font-bold mb-4">About Us</h1>
      </div>

      <div className="flex justify-center my-10 ">
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg px-8 py-6 m-4 w-full">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/350/111/non_2x/vector-male-student-icon.jpg"
            alt="Photo of Student 1"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Anukool</h2>
          <h2 className="text-xl font-bold mb-2">LCS2020012</h2>
          <p className="text-gray-700 text-center mb-4">
            Currently an undergraduate student at Indian Institute of
            Information Technology, Lucknow (IIITL) pursuing Computer Science
            and Engineering.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg px-8 py-6 m-4 w-full">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/350/111/non_2x/vector-male-student-icon.jpg"
            alt="Photo of Student 1"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Anshul Kashyap</h2>
          <h2 className="text-xl font-bold mb-2">LCI2020020</h2>
          <p className="text-gray-700 mb-4 text-center">
            Currently an undergraduate student at Indian Institute of
            Information Technology, Lucknow (IIITL) pursuing Computer Science
            and Artificial Intelligence.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg px-8 py-6 m-4 w-full">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/350/111/non_2x/vector-male-student-icon.jpg"
            alt="Photo of Student 1"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Uttaran Das</h2>
          <h2 className="text-xl font-bold mb-2">LCI2020047</h2>
          <p className="text-gray-700 text-center mb-4">
            Currently an undergraduate student at Indian Institute of
            Information Technology, Lucknow (IIITL) pursuing Computer Science
            and Artificial Intelligence.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg px-8 py-6 m-4 w-full">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/350/111/non_2x/vector-male-student-icon.jpg"
            alt="Photo of Student 1"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Konark Kumar Koshta</h2>
          <h2 className="text-xl font-bold mb-2">LCI2020050</h2>
          <p className="text-gray-700 text-center mb-4">
            Currently an undergraduate student at Indian Institute of
            Information Technology, Lucknow (IIITL) pursuing Computer Science
            and Artificial Intelligence.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg px-8 py-6 m-4 w-full">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/350/111/non_2x/vector-male-student-icon.jpg"
            alt="Photo of Student 1"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Navya Yadav</h2>
          <h2 className="text-xl font-bold mb-2">LCI2020046</h2>
          <p className="text-gray-700 text-center mb-4">
            Currently an undergraduate student at Indian Institute of
            Information Technology, Lucknow (IIITL) pursuing Computer Science
            and Artificial Intelligence.
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutpage;
