import "./header.css";
import Logo from "../../assets/icons/logo.svg";
import Search from "../../assets/icons/search.svg";
import Summer from "../../assets/icons/summer.svg";
import Calendar from "../../assets/icons/calendar.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
export function Header({setSearch}) {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="box">
          <Logo />
          <div className="input">
            <Search />
            <input type="text" placeholder="Search books" onChange={(e)=>setSearch(e.target.value)}/>
          </div>
        </div>
        <div className="btn">
          <span className="summer">
            <Summer />
          </span>
          <Link to="/login">
            <button className="button">Logout</button>
          </Link>
        </div>
      </div>
      <div className="container calendar">
        <div className="calendar-container">
          <h3 className="calendar-title">Showing 18 Result(s)</h3>
          <div className="calendar-btn">
            <Calendar />
            <p>Order by newest</p>
          </div>
        </div>
      </div>
    </header>
  );
}
Header.propTypes ={
  setSearch:PropTypes.func
}
