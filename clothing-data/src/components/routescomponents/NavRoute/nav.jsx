import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../NavRoute/asset/083 crown.svg";
import "./nav.scss";
import { UserContext } from "../../context/userContext";
import { signOutUser } from "../../../utils/firebase/firebase.components";

const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const handleSignout = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignout}>
              Signout
            </span>
          ) : (
            <Link to="/sign-in">Sign-in</Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
