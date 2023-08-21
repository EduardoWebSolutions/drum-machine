const DrumButtons = () => {
  const play = (sound: string) => {
    new Audio(sound).play();
  };
  return (
    <div
      id="keys"
      className="grid grid-cols-3 row-span-3 gap-2 gap-x-0 w-[380px] m-5"
    >
      <div
        className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black"
        onClick={() =>
          play("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
        }
      >
        Q
      </div>
      <div
        className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black"
        onClick={() =>
          play("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
        }
      >
        W
      </div>
      <div
        className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black"
        onClick={() =>
          play("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
        }
      >
        E
      </div>
      <div
        className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black"
        onClick={() =>
          play("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
        }
      >
        A
      </div>
      <div
        className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black"
        onClick={() =>
          play("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
        }
      >
        S
      </div>
      <div
        className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black"
        onClick={() =>
          play("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
        }
      >
        D
      </div>
      <div
        className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black"
        onClick={() =>
          play("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
        }
      >
        Z
      </div>
      <div
        className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black"
        onClick={() =>
          play("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
        }
      >
        X
      </div>
      <div
        className="flex justify-center items-center cursor-pointer select-none font-bold bg-gray-600 active:bg-violet-700 active:shadow-none rounded-md w-28 h-22 shadow-md shadow-black"
        onClick={() =>
          play("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
        }
      >
        C
      </div>
    </div>
  );
};

export default DrumButtons;
