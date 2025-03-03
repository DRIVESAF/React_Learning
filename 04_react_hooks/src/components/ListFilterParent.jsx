import { useState } from "react";
import ListFilter from "./ListFilter";

const ListFilterParent = () => {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "Orange", "Grape"];

  return (
    <div className="p-4 max-w-sm mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <ListFilter items={items} query={query} />
    </div>
  );
};

export default ListFilterParent;
