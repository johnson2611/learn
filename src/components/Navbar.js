import React, { useState, useEffect } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useHistory } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
// import { AiOutlineSearch } from "react-icons/ai";
// import avatar from "./assets/Images/avatar.jpg";

const Navbar = ({ handleClick }) => {
  const [winSize, setWinSize] = useState(window.innerWidth);
  const [Mobile, setMobile] = useState(false);
  // const [imageDrop, setImageDrop] = useState(false);

  const checkWinSize = () => {
    setWinSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkWinSize);
  }, [winSize]);

  // imagedrop
  // const toggleShowAll = () => {
  //   setImageDrop(!imageDrop);
  // };

  const [search, setSearch] = useState();
  const toggle = () => {
    setSearch(true);
  };
  const closeSearch = () => (search === true ? setSearch(false) : null);
  const ref = useOnclickOutside(() => {
    closeSearch();
  });

  const history = useHistory();
  const homeButtonClick = () => {
    history.push("/");
  };
  const logButtonClick = () => {
    history.push("/login");
  };

  const handleClick1 = (e) => {
    const name = e.target.getAttribute("name");
    if (name !== undefined || name !== null) {
      setMobile(false);
    }
  };
  return (
    <nav className="navbar">
      <h3 className="logo" onClick={homeButtonClick}>
        <span className="mt">Mt</span>
        <span className="learn">Learn</span>
      </h3>
      {/* <Toggle
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
    /> */}

      {/* new search */}
      <div class="box">
        <div className="my-auto" ref={ref}>
          {" "}
          <div
            className={
              search === false
                ? "searchbar fadeOutWidth"
                : search === true
                ? "searchbar fadeInWidth"
                : "searchbar"
            }
          >
            {" "}
            {search === true && (
              <input
                ref={ref}
                className={
                  search === true
                    ? "search-input fadeIn"
                    : search === false
                    ? "search-input fadeOut"
                    : "search-input"
                }
                type="text"
                name=""
                placeholder="Search..."
              />
            )}{" "}
            <div
              className={
                search === true
                  ? "icon-bg fadeOut"
                  : search === false
                  ? "icon-bg fadeIn"
                  : "icon-bg"
              }
            >
              {" "}
              {search !== true && (
                <FontAwesomeIcon
                  onClick={toggle}
                  className={
                    search === true
                      ? "search-icon fadeOut"
                      : search === false
                      ? "search-icon fadeIn"
                      : "search-icon"
                  }
                  icon={faSearch}
                />
              )}{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      {/* end o new search */}

      <ul
        className={
          winSize <= 760
            ? Mobile
              ? "nav-links-mobile"
              : "nav-links"
            : "nav-links"
        }
        onClick={handleClick1}
      >
        <NavLink
          exact
          activeClassName="active"
          to="/"
          name="home"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/courses"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          name="Courses"
        >
          <li>Courses</li>
        </NavLink>
        <NavLink activeClassName="active" to="tutorial" name="Tutorial">
          <li>Tutorial</li>
        </NavLink>
        <NavLink activeClassName="active" to="/tutor" name="Tutor">
          <li>Become a Tutor</li>
        </NavLink>
        {/* <div className="dropdown-container">
        <img className="dropdown-toggle" src={avatar} alt="avatar"  onClick={toggleShowAll} />
        {imageDrop && (
          <div className="dropdown-menu">
            <a href="/">Login</a>
            <button className="dropdown-item" onClick={logButtonClick}>Log In </button>
            <button className="dropdown-item" onClick={logButtonClick}>Log In </button>
            </div>
            )}
            
            </div> */}
            <button className="btn" onClick={logButtonClick}>
              Log In
            </button>  
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
};
export default Navbar;
