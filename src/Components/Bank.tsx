const Bank = () => {
  return (
    <div className="flex justify-center w-full">
      <div>
        <p className="font-bold">Bank</p>
        <div className="bg-black h-[20px] w-[50px] flex justify-center items-center">
          <div className="bg-blue-600 h-4 w-[23px] my-3 cursor-pointer"></div>
          <div className="bg-blue-600 h-4 w-[23px] my-3 cursor-pointer invisible"></div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
