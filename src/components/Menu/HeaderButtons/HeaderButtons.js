import React from "react";
import {
    HeadetButtons, SignInButton,
    SignUpButton
} from "./HeaderButtons.styled";

const HeaderButtons = () => (
    <HeadetButtons>
        <SignInButton>Sign In</SignInButton>
        <SignUpButton>Sign Up</SignUpButton>
    </HeadetButtons>
)

export default HeaderButtons;