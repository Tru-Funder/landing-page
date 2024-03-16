import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Navbar";
import backgroundImage from "./assets/home-bg.svg";

function App() {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
}

export default App;
