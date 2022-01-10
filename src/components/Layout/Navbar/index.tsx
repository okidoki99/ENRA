import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { Navbar as BsNavbar, NavItem, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { dAppName } from "config";
import { ReactComponent as ElrondLogo } from "./../../../assets/img/elrond-symbol.svg";

const Navbar = () => {
  const { loggedIn } = Dapp.useContext();
  const dappLogout = Dapp.useLogout();
  const history = useHistory();

  const logOut = (e: React.MouseEvent) => {
    e.preventDefault();
    dappLogout({ callbackUrl: `${window.location.origin}/` });
    history.push("/");
  };

  return (
    <BsNavbar className="bg-custom">
      <div className="container-fluid">
        <Link
          className="d-flex align-items-center navbar-brand mr-0"
          to={loggedIn ? "/dashboard" : "/"}
        >
          <ElrondLogo className="elrond-logo" />
          <span className="dapp-name">{dAppName}</span>
        </Link>
        <Nav className="ml-auto">
            <NavItem>
              <Nav.Link href="https://discord.gg/Mcza28we2w">Support</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/commands">Commands</Nav.Link>
            </NavItem>
            <NavItem className="donate">
              <Nav.Link href="/"><strong>Donate</strong></Nav.Link>
            </NavItem>
          {loggedIn && (
            <NavItem className="disconnect">
              <Nav.Link href="/" onClick={logOut}><strong>Disconnect</strong></Nav.Link>
            </NavItem>
          )}
        </Nav>
      </div>
    </BsNavbar>
  );
};

export default Navbar;
