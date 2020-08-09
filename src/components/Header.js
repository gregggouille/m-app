import React from "react";
import "../assets/css/Header.css";
import Log_in from "./log_in";
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div>logo</div>
          <div>Header</div>
          <div>
            <Log_in />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
