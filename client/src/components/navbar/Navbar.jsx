import React from "react";
import "./Navbar.css";
import { FaInstagram } from "react-icons/fa";
import Searchbar from "./Searchbar/Searchbar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaShoppingCart } from "react-icons/fa";
import { FaFeather } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
function Navbar({ toggledrawer }) {
  const [data, setData] = useState([
    // Your data here, e.g., list of items to search through
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);
  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(data);
      return;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredData(filtered);
  };
  const [profile, setprofile] = useState("");
  const [isbluesoulhovered, setisbluesoulhovered] = useState(false);
  const handlemouseover = () => {
    setisbluesoulhovered(true);
  };
  const handlemouseout = () => {
    setisbluesoulhovered(false);
  };
  const handleonclick = () => {
    window.location.href = "";
  };
  return (
    <>
      <div className="containerNavbar">
        <div className="burger">
          <div className="piece"></div>
          <div className="piece"></div>
          <div className="piece"></div>
        </div>
        <div className="logos">
          <div className="logocolumnm">
            <div className="logoflexm">
              <div className="bluesoulLogo">
                <img
                  src="/images/bluesoul.jpg"
                  alt="img"
                  className="logoImg bimg"
                  onMouseOver={handlemouseover}
                  onMouseOut={handlemouseout}
                  onClick={handleonclick}
                />
              </div>
              <div className="instagramLogo">
                <a
                  href="https://www.instagram.com/thebluesoul0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logoImg"
                >
                  <FaInstagram color="#E4405F" className="logoImg" />
                </a>
              </div>
            </div>
            <br />
            <div
              className={`aboutbluesoul ${
                isbluesoulhovered ? `visible` : `hidden`
              }`}
            >
              <div className="contentofbs">
                BlueSoul is a platform where you learn Kanha's lessons .
              </div>
            </div>
          </div>
        </div>
        <div className="searchbar">
          <Searchbar onSearch={handleSearch} />
          <ul>
            {filteredData.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="navlinks">
          <div className="profile">hello</div>
          <div className="shopping">
            <FaShoppingCart className="logoImg" />
          </div>
          <div className="feather">
            <FaFeather className="logoImg" />
          </div>
          <div className="community">
            <MdGroup className="logoImg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
