import React from "react";

function SearchBox({ handleSearchBar }) {
  return (
    <form className="w-full max-w-sm">
      <div className="flex items-center  py-1">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="travel destination"
          aria-label="Full name"
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-0 px-2"
          type="button"
        >
          Search
        </button>
        <button
          className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-0 px-2 rounded"
          type="button"
          onClick={handleSearchBar}
        >
          X
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
