import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../NavRoute/asset/083 crown.svg";
import './nav.scss'

const Nav = ()=>{
    return(
      <Fragment>
      <div className="navigation">
      <Link className="logo-container" to="/">
      <Logo className="logo"/>
      </Link>
      <div className="nav-links-container">
      <Link to='/shop' className="nav-link">
      Shop
      </Link>
      <Link to="/sign-in">
      Sign-in
      </Link>
      </div>
      </div>
      <Outlet/>
      </Fragment>
    )
  }

  export default Nav