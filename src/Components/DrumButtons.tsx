const DrumButtons = () => {
  return (
    <div
      id="keys"
      className="grid grid-cols-3 row-span-3 gap-2 gap-x-0 w-[380px] m-5"
    >
      <div className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black">
        Q
      </div>
      <div className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black">
        W
      </div>
      <div className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black">
        E
      </div>
      <div className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black">
        A
      </div>
      <div className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black">
        S
      </div>
      <div className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black">
        D
      </div>
      <div className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black">
        Z
      </div>
      <div className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black">
        X
      </div>
      <div className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black">
        C
      </div>
    </div>
  );
};

export default DrumButtons;
