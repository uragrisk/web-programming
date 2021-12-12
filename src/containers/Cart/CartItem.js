import React from "react";
import { CartItemStyled, CartImage, NumberOfCups, IncreaseButton, Amount, DecreaseButton } from "./Cart.styled";
import { Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { increaseAmount, decreaseAmount, removeFromCart} from "../../redux/actions";

const { Title } = Typography;

export const CartItem = (props) => {

    let dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartItems.cartItems);


    const amountIncrease = () => {
        dispatch(increaseAmount(props.data.id, 1));
    }

    const amountDecrease = () => {
        let item = cartItems.find((cartItem) => cartItem.id === props.data.id);
        if (item.amount === 1) {
            dispatch(removeFromCart(props.data.id));
        } else {
            dispatch(decreaseAmount(props.data.id, 1));
        }
    }
    return ( 
        <CartItemStyled>
            <CartImage alt={String(props.data.color) + " " + String(props.data.material) + " cup"}src={props.data.image}/>
            <Title level={2} > {props.title} </Title>
            <NumberOfCups>
                <DecreaseButton onClick={amountDecrease} > - </DecreaseButton>
                <Amount> {props.data.amount} </Amount>
                <IncreaseButton onClick={amountIncrease} > + </IncreaseButton>
            </NumberOfCups>
            <Title level={2} style={{marginRight: '250px'}}> {props.data.price}$ </Title>
        </CartItemStyled>
                        );
}