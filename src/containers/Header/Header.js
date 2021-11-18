import React from "react";
import {
  StyledHeader, NavItem, Nav, NavLogo, HeadetButtons, SignInButton,
  SignUpButton
} from "./Header.styles";

const Header = () => (
  <StyledHeader>
    <NavLogo>
      The Cup Shop
    </NavLogo>
    <Nav>
      <NavItem>Home</NavItem>
      <NavItem>Shop</NavItem>
      <NavItem>Blog</NavItem>
      <NavItem>Contact</NavItem>
    </Nav>
    <HeadetButtons>
      <SignInButton>Sign In</SignInButton>
      <SignUpButton>Sign Up</SignUpButton>
    </HeadetButtons>
  </StyledHeader>
);

export default Header;