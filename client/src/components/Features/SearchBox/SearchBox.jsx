import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox({ handleSearchBar }) {
  const [keyword, setKeyword] = useState("");
  let navigate = useNavigate();

  const handleSearchAction = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/searched/${keyword}`);
      setKeyword("");
    }
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSearchAction}>
      <div className="flex items-center  py-1">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-400 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          value={keyword}
          placeholder="travel destination"
          aria-label="Keyword"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-blue-700 hover:bg-blue-500 border-blue-700 hover:border-blue-500 text-sm border-4 text-white py-0 px-2"
          type="submit"
          onClick={handleSearchAction}
        >
          Search
        </button>
        <button
          className="flex-shrink-0 border-transparent border-4 text-blue-700 hover:text-blue-700 text-sm py-0 px-2 rounded"
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
