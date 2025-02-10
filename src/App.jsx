import SearchBar from "./components/molecule/SearchBar.jsx";
import DropdownList from "./components/molecule/DropdownList.jsx";

function App() {
  return (
    <div className="flex w-full justify-center h-screen bg-gray-100">
      <div className="block justify-between">
        {/*search bar with icon*/}
        <SearchBar />

        {/*dropdown lists for sort and category*/}
        <div className="flex">
          <DropdownList
            title={"Sort"}
            itemsList={[
              "Ascending Date",
              "Decending Date",
              "Ascending Complexity",
              "Decending Complexity",
              "Ascending Priority",
              "Decending Priority",
            ]}
          />
          <DropdownList
            title={"Category"}
            itemsList={["Education", "Career", "Job", "Success", "Routine"]}
          />
        </div>

        {/*add new task button*/}
        <button className="flex space-x-3 w-75 m-auto justify-center items-center px-5 py-3 bg-indigo-500 hover:bg-indigo-800 rounded-full drop-shadow-md cursor-pointer duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <span className="text-white text-xl font-bold">Add New Task</span>
        </button>
      </div>
    </div>
  );
}

export default App;
