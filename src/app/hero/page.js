const hero = () => {
  return (
    <main
      className=" container relative overflow-x-auto
    pl-52 pr-52 pt-28 pb-96 flex flex-col items-center justify-center"
    >
      <div className="container  font-bold mb-6 text-red-600 text-sm lg:text-5xl lg:text-yellow-600 ">
        The directory for all Nigerian slangs
      </div>
      <p className="mb-8 font-base font-normal">
        Did you hear a Nigerian and you want to know the meaning ?
      </p>
      <input
        type="text"
        placeholder="Enter word to search"
        className="w-full border rounded-md h-11 mt-5 bg-brown"
      />
      {/* <button>Search</button> */}
      <button className="w-20 h-8  text-sm bg-btnBg text-black  relative right-9 bottom-10  rounded-xl border-red-700">
        {" "}
        Search
      </button>
    </main>
  );
};

export default hero;
