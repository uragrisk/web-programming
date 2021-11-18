import React from "react";
import {
  StyledHeader, NavItem, Nav, NavLogo
} from "./Header.styles";
import Home from "../Home/Home"
import HeaderButtons from "../../components/Menu/HeaderButtons/HeaderButtons";
import HeaderSearch from "../../components/Menu/HeaderSearch/HeaderSearch";
import { BrowserRouter as Router, Routes, Route, Link, useMatch, useResolvedPath } from "react-router-dom";
import Catalog from "../catalog/Catalog";


function CustomLink({ label, to}) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className={match ? "active" : ""}>
      <Link to={to}  style={{ border: match ? "3px solid #d3d3d3" : "none", fontWeight: match ? "bold" : "normal"}}>{label}</Link>
    </div>
  );
}

const Header = () => (
  <Router>
    <StyledHeader>
      <NavLogo>
        The Cup Shop
      </NavLogo>

      <Nav>
        <NavItem><CustomLink to="/" label="Home"></CustomLink></NavItem>
          <NavItem><CustomLink to="/catalog" label="Catalog"></CustomLink></NavItem>
          <NavItem><CustomLink to="/cart" label="Cart"></CustomLink></NavItem>
      </Nav>
      <Routes>
        <Route path="/catalog" element={<HeaderSearch />}>
        </Route>
        <Route path="*" element={<HeaderButtons />}>
        </Route>

      </Routes>


    </StyledHeader>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/catalog" element={<Catalog />}>
      </Route>
      <Route path="/cart" element={<h1>Hello it is cart</h1>}>
      </Route>
    </Routes>
  </Router>
);

export default Header;