import React from "react";

export default function SearchBar() {
  return (
    <div className="flex space-x-4">
      <input
        placeholder={"search game".toUpperCase()}
        className="p-2 w-4/5 bg-blue-800 border border-gray-500 rounded-md"
      />
      <button className="w-1/5 bg-blue-800 rounded-md"> Providers </button>
    </div>
  );
}
