const InputWithButton = ({ handleSearch, query, setQuery }) => {
  return (
    <div>
      <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
        <input
          type="text"
          className=" h-full w-[360px] rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 pr-20 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  focus:border-2 focus:border-pink-500  focus:outline-0 "
          placeholder="Search Here "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="cursor-pointer !absolute right-0 -top-0 z-10 rounded-e-md bg-pink-600 py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
          type="button"
          data-ripple-light="true"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default InputWithButton;
