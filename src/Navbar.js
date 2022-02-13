import React from "react";
import logo from "./images/Bizino-data-science-logo.jpg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  function ser() {
    var elmnt = document.getElementById("services");

    elmnt.scrollIntoView();
  }
  function ind() {
    var elmnt = document.getElementById("industries");

    elmnt.scrollIntoView();
  }
  function abt() {
    var elmnt = document.getElementById("about");

    elmnt.scrollIntoView();
  }
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button
              className='link-btn'
              onClick={ser}
              onMouseOver={displaySubmenu}
            >
              Services
            </button>
          </li>

          <li>
            <button
              className='link-btn'
              onClick={ind}
              onMouseOver={displaySubmenu}
            >
              Industries
            </button>
          </li>
          <li>
            <button
              className='link-btn'
              onClick={abt}
              onMouseOver={displaySubmenu}
            >
              About
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
