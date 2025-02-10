import SearchBar from "./components/molecule/SearchBar.jsx";
import DropdownList from "./components/molecule/DropdownList.jsx";

function App() {
  return (
    <>
      <div className="flex w-full justify-center h-screen bg-gray-100">
        <div className="block justify-between">
          <SearchBar />
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
      </div>
    </>
  );
}

export default App;
