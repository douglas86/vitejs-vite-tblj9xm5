const SearchBar = () => {
  return (
    <div className="w-full max-w-sm min-w-[200px] m-2 py-8">
      <div className="flex items-center border border-slate-500 rounded-lg shadow-sm focus-within:border-slate-500 bg-white">
        {/*search icon*/}
        <div className="pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 top-2.5 left-2.5 text-slate-600"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/*input field*/}
        <input
          className="flex-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm px-3 py-2 focus:outline-none"
          placeholder="Search"
        />

        {/*search button*/}
        <button
          className="p-2 bg-blue-100 hover:bg-blue-200 rounded-r-lg border-l border-slate-300"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
