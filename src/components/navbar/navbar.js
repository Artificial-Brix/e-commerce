import React from "react";
import classes from "./navbar.module.scss";
import { ReactComponent as LikeIcon } from "../../assets/likeIcon.svg";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <nav>
      <div className={classes.Navbar}>
        <h1 className={classes.Heading}>EcommerceApp - pratikkkk</h1>

        <div className={classes.HeaderRight}>
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <AiOutlineSearch size="1.4rem" />
            </button>
          </form>

          <div className={classes.HeaderRightIcons}>
            <LikeIcon />
            <Link to="/cart">
              <HiShoppingCart size="2rem" color="#386FA4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
