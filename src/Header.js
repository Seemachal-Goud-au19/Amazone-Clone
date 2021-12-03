import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStateValue } from "./StateProvider";

export const Header = () => {
  const [{basket},dispatch]=useStateValue();
 
  return (
    <nav className="header">
      {/* image logo */}
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="amazon_logo"
          className="header_logo"
        />
      </Link>
      {/* search input */}
      <div className="header_search">
        <input className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 3 links */}
      <div className="header_nav">
        {/* link-1 */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">simachal</span>
            <span className="header_optionLineTwo">sign in</span>
          </div>
        </Link>
        {/* link-2 */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& orders</span>
          </div>
        </Link>
        {/* link-3 */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Yours</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* link-4 */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <AddShoppingCartIcon/>
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
