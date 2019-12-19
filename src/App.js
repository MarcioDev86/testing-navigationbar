import React, { Fragment, useState } from "react";
import "./App.css";

function App() {
  const [menuState, setMenuState] = useState("menu close");
  const [iconMenu, setIconMenu] = useState("icon-menu");

  const [clientSubMenu, setClientSubMenu] = useState("menu-link sub");
  const [servicesSubMenu, setServicesSubMenu] = useState("menu-link sub");

  function changeMenuState() {
    changeIconMenuState();
    if (menuState === "menu close") {
      setMenuState("menu open");
    } else {
      setMenuState("menu open close");
      setTimeout(() => {
        setMenuState("menu close");
      }, 1000);
    }
  }

  function changeIconMenuState() {
    if (iconMenu === "icon-menu") {
      setIconMenu("icon-menu icon-closed");
    } else {
      setIconMenu("icon-menu");
    }
  }

  function clientSubMenuClick() {
    if (clientSubMenu === "menu-link sub") {
      setClientSubMenu("menu-link sub active");
    } else {
      setClientSubMenu("menu-link sub");
    }
  }

  function servicesSubMenuClick() {
    if (servicesSubMenu === "menu-link sub") {
      setServicesSubMenu("menu-link sub active");
    } else {
      setServicesSubMenu("menu-link sub");
    }
  }

  return (
    <Fragment>
      <div className="about">
        <a
          className="bg_links social portfolio"
          href="https://www.rafaelalucas.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social dribbble"
          href="https://dribbble.com/rafaelalucas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social linkedin"
          href="https://www.linkedin.com/in/rafaelalucas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon"></span>
        </a>
        <div className="bg_links logo"></div>
      </div>

      <nav>
        <div className="menubar">
          <a href="#" className="home">
            LOGO
          </a>
          <div className="icons">
            <div className="secondary-icons">
              <i className="icon-second">
                <img
                  alt="sfsdf"
                  src="https://rafaelalucas91.github.io/assets/icons/gray1/icon-171.svg"
                />
              </i>
              <i className="icon-second">
                <img
                  alt="sfsdf"
                  src="https://rafaelalucas91.github.io/assets/icons/gray1/icon-198.svg"
                />
              </i>
              <i className="icon-second">
                <img
                  alt="sfsdf"
                  src="https://rafaelalucas91.github.io/assets/icons/gray1/icon-178.svg"
                />
              </i>
            </div>
            <i className={iconMenu} onClick={() => changeMenuState()}>
              <span></span>
            </i>
          </div>
        </div>

        <ul className={menuState}>
          <li className="menu-link">
            <a href="#" className="text-item">
              About
            </a>
          </li>
          <li className={clientSubMenu} onClick={() => clientSubMenuClick()}>
            <a href="#" className="text-item">
              Clients<span className="icon"></span>
            </a>
            <ul className="submenu">
              <li className="sub-item">
                <a href="#">Burger King</a>
              </li>
              <li className="sub-item">
                <a href="#">Southwest Airlines</a>
              </li>
              <li className="sub-item">
                <a href="#">Levi Strauss</a>
              </li>
            </ul>
          </li>
          <li
            className={servicesSubMenu}
            onClick={() => servicesSubMenuClick()}
          >
            <a href="#" className="text-item">
              Services
              <span className="icon"></span>
            </a>
            <ul className="submenu">
              <li className="sub-item">
                <a href="#">Print Design</a>
              </li>
              <li className="sub-item">
                <a href="#">Web Design</a>
              </li>
              <li className="sub-item">
                <a href="#">Mobile App Development</a>
              </li>
            </ul>
          </li>
          <li className="menu-link">
            <a href="#" className="text-item">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section>
        <h1 style={{ fontSize: "8vw" }}>Hello World</h1>
        <p style={{ fontSize: "2vw" }}>
          Resize the browser window to see how the font size scales.
        </p>

        <h1 style={{ fontSize: "8vw" }}>Hello World</h1>
        <p style={{ fontSize: "2vw" }}>
          Resize the browser window to see how the font size scales.
        </p>
        <h1 style={{ fontSize: "8vw" }}>Hello World</h1>
        <p style={{ fontSize: "2vw" }}>
          Resize the browser window to see how the font size scales.
        </p>
        <h1 style={{ fontSize: "8vw" }}>Hello World</h1>
        <p style={{ fontSize: "2vw" }}>
          Resize the browser window to see how the font size scales.
        </p>
        <h1 style={{ fontSize: "8vw" }}>Hello World</h1>
        <p style={{ fontSize: "2vw" }}>
          Resize the browser window to see how the font size scales.
        </p>
        <h1 style={{ fontSize: "8vw" }}>Hello World</h1>
        <p style={{ fontSize: "2vw" }}>
          Resize the browser window to see how the font size scales.
        </p>
        <h1 style={{ fontSize: "8vw" }}>Hello World</h1>
        <p style={{ fontSize: "2vw" }}>
          Resize the browser window to see how the font size scales.
        </p>
        <h1 style={{ fontSize: "8vw" }}>Hello World</h1>
        <p style={{ fontSize: "2vw" }}>
          Resize the browser window to see how the font size scales.
        </p>
        <h1 style={{ fontSize: "8vw" }}>Hello World</h1>
        <p style={{ fontSize: "2vw" }}>
          Resize the browser window to see how the font size scales.
        </p>
        <h1 style={{ fontSize: "8vw" }}>Hello World</h1>
        <p style={{ fontSize: "2vw" }}>
          Resize the browser window to see how the font size scales.
        </p>
        <h1 style={{ fontSize: "8vw" }}>Hello World</h1>
        <p style={{ fontSize: "2vw" }}>
          Resize the browser window to see how the font size scales.
        </p>
        <h1 style={{ fontSize: "8vw" }}>Hello World</h1>
        <p style={{ fontSize: "2vw" }}>
          Resize the browser window to see how the font size scales.
        </p>
      </section>
    </Fragment>
  );
}

export default App;
