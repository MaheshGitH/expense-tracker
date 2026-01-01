const Option = () => {
  return (
    <div className="flex flex-col border border-border rounded-md">
      <button className="text-start px-4 py-2 rounded-t-md">Edit</button>
      <button className="text-danger px-4 py-2 rounded-b-md">Delete</button>
    </div>
  );
};

export default Option;
