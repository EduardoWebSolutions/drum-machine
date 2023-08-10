import Bank from "./Components/Bank";
import DrumButtons from "./Components/DrumButtons";
import DrumTitle from "./Components/DrumTitle";
import Footer from "./Components/Footer";
import Power from "./Components/Power";
import Volume from "./Components/Volume";
import DrumLogo from "./assets/DrumLogo";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-500">
        <div
          id="Drum-machine"
          className="flex border-4 border-solid border-yellow-400 w-[700px] h-[320px] bg-gray-400 m-5"
        >
          <DrumButtons />
          <DrumLogo />
          <div className="flex justify-center items-center flex-col w-[280px]">
            <Power />
            <DrumTitle />
            <Volume />
            <Bank />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
