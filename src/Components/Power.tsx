import { useState } from "react";

const Power = () => {
  const [isPowered, setIsPowered] = useState<boolean>(false);

  const togglePowered = () => {
    isPowered
      ? setIsPowered((prevPowered) => !prevPowered)
      : setIsPowered((prevPowered) => !prevPowered);
  };

  return (
    <div className="w-full">
      Power
      <div className="bg-black h-[20px] w-[50px] my-3 flex justify-center items-center">
        <div
          className="bg-blue-600 h-4 w-[23px] my-3 cursor-pointer"
          onClick={togglePowered}
        ></div>
        <div
          className="bg-blue-600 h-4 w-[23px] my-3 cursor-pointer invisible"
          onClick={togglePowered}
        ></div>
      </div>
    </div>
  );
};

export default Power;
