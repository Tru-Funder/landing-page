import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Navbar";
import backgroundImage from "./assets/home-bg.svg";

function App() {
  return (
    <div>
      <Nav />

      <Outlet />

      {/* <div
        className="bg-[#080F2ED9] bg-opacity-[85%] w-full h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div> */}
    </div>
  );
}

export default App;
