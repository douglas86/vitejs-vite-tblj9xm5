import SearchBar from "./components/molecule/SearchBar.jsx";
import DropdownList from "./components/molecule/DropdownList.jsx";

function App() {
  return (
    <>
      <div className="flex justify-center h-screen bg-gray-100">
        <div className="block justify-between">
          <SearchBar />
          <DropdownList className="text-sm" />
          <DropdownList className="text-sm" />
        </div>
      </div>
    </>
  );
}

export default App;
