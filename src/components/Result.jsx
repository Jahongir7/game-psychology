import React from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ resultText }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Natijangiz:</h2>
        <p className="text-gray-700 mb-6">{resultText}</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Qaytadan tanlash
        </button>
      </div>
    </div>
  );
};

export default Result;
