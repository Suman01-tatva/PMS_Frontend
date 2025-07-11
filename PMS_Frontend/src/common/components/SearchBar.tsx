import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  name = "search",
  id = "searchBar",
  className = "",
}) => {
  return (
    <div className={`w-full sm:w-1/2 px-2 ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          name={name}
          id={id}
          className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition"
          required
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
