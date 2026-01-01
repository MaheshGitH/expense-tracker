import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex items-center gap-3 py-3 px-4 w-full border border-border dark:border-border-dark rounded-md">
      <label htmlFor="search">
        <IoSearch className="~size-3/4" />
      </label>
      <input
        className="w-full outline-none placeholder:text-secondary"
        id="search"
        placeholder="Search by description..."
        type="text"
      />
    </div>
  );
};

export default Search;
