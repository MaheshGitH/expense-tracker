import { CgMenuLeft } from "react-icons/cg";

const DescriptionInput = () => {
  return (
    <div>
      <p className="mb-2 ml-2">Description</p>
      <div className="flex items-center gap-2 pl-4 rounded-md border border-border text-secondary">
        <label htmlFor="description">
          <CgMenuLeft size={16} />
        </label>
        <input
          id="description"
          placeholder="e.g., Coffee, Groceries"
          className="w-full py-3 outline-none text-black placeholder-secondary"
          type="text"
        />
      </div>
    </div>
  );
};

export default DescriptionInput;
