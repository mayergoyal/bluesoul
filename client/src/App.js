import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Router } from "express";
import DrawerSidebar from "./components/LeftSidebar/DrawerSidebar";
import { useState } from "react";
import Allroutes from "./components/Allroutes/Allroutes";
function App() {
  const [togglrdrawersidebar, settogglrdrawersidebar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (togglrdrawersidebar.display === "none") {
      settogglrdrawersidebar({
        display: "flex",
      });
    } else {
      settogglrdrawersidebar({
        display: "none",
      });
    }
  };
  return (
    <div className="App">
      <Router>
        <Navbar toggleDrawer={toggleDrawer} />
        {
          <DrawerSidebar
            toggleDrawer={toggleDrawer}
            togglrdrawersidebar={togglrdrawersidebar}
          />
        }
        <Allroutes />
      </Router>
    </div>
  );
}

export default App;
