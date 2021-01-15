import React, { useState, useLayoutEffect } from "react";
import classes from "./navbar.module.scss";
import { ReactComponent as LikeIcon } from "../../assets/likeIcon.svg";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

function useMediaQuery() {
  const [screenSize, setScreenSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateScreenSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
}

export default function Navbar() {
  const [width] = useMediaQuery();
  const [showSearchBar, setShowSearchBar] = useState(false); //used only in small screen sizes

  const formComponent = (
    <form className={classes.FormComponent}>
      <input type="text" placeholder="Search..." />
      <button type="submit">
        <AiOutlineSearch size="1.4rem" />
      </button>
    </form>
  );

  return (
    <nav>
      <div className={classes.Navbar}>

        <h1 className={classes.Heading}>EcommerceApp - pratikkkk</h1>


        <div className={classes.HeaderRight}>
          {width > 750 && formComponent}

          <div className={classes.HeaderRightIcons}>
            {width <= 750 && (
              <button className={classes.SearchButton}
                onClick={() => setShowSearchBar(!showSearchBar)}
              >
                <AiOutlineSearch strokeWidth="1.3rem" size="2rem" color="#386FA4"/>
              </button>
            )}
            <LikeIcon size="2rem" color="#386FA4"/>
            <HiShoppingCart size="2rem" color="#386FA4" />
          </div>
        </div>
      </div>
      {showSearchBar && formComponent}
    </nav>
  );
}
