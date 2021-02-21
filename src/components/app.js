import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "./logo";
import NavbarLinks from "./navbarLinks";
import Dummy from "./dummy";
import Route from "./route";
import "./app.css";

const App = () => {
  const [showLinks, setShowLinks] = useState(false);

  const onToggleBtnClick = () => {
    setShowLinks(!showLinks);
  };

  const active = showLinks ? "active" : "";

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-header">
          <Logo />

          <button
            className={`navbar-toggle ${active}`}
            onClick={onToggleBtnClick}
          >
            <FaBars />
          </button>
        </div>

        <NavbarLinks showLinks={showLinks} />
      </nav>

      <Route path="/">
        <Dummy>Home</Dummy>
      </Route>
      <Route path="/about">
        <Dummy>About</Dummy>
      </Route>
      <Route path="/projects">
        <Dummy>Projects</Dummy>
      </Route>
      <Route path="/contact">
        <Dummy>Contact</Dummy>
      </Route>
      <Route path="/profile">
        <Dummy>Profile</Dummy>
      </Route>
    </React.Fragment>
  );
};

export default App;
