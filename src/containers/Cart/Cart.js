import React from "react";
import { Button, Typography, Input, Select } from "antd";
import { CartTitle, CartFooter, CartButtons, CartContainer, CartSection, ButtonStyle, CartWrapper } from "./Cart.styled";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { CartItem } from "./CartItem";
import GlobalContext from "../../contexts/GlobalState";
import { useContext, useState, useEffect } from 'react';
import { getCupList } from "../../API/API";
import CartItems from "./CartItems";

const { Title } = Typography;

const Cart = () => {
    return(
        <CartSection>
            <CartContainer>
                <CartTitle>Shopping Cart</CartTitle>
                <CartWrapper>
                <CartItems></CartItems>
                </CartWrapper>
                <CartFooter>
                    <CartButtons>
                        <Link to="/catalog" ><Button size={"large"} style={ButtonStyle}>Go back</Button></Link>
                        <Link to="/cart"><Button size={"large"} style={ButtonStyle}>Buy</Button></Link>
                    </CartButtons>
                </CartFooter>
            </CartContainer>
        </CartSection>
    )
}

export default Cart;