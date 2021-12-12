import React from "react";
import { useSelector } from 'react-redux';
import { Pricing } from "./Cart.styled";
import { Typography } from "antd";
import { CartItem } from "./CartItem";
const { Title } = Typography;



const CartItems = () => {
    const cartItems = useSelector((state) => state.cartItems.cartItems);

    const itemsList = cartItems.map((data) => (
        <CartItem data={data} />
    ));
    
    return (
        <>
            {cartItems.length === 0 ? <Title level={2} style={{}}> There are no items in your cart </Title> :

                <div>
                    <div>{itemsList}</div>
                    <Title level={2} style={{}}>Total price: ${cartItems.reduce((cur_sum, next_item) => {
                        return cur_sum + parseInt(next_item.price)*next_item.amount;
                    }, 0)}
                    </Title>
                </div>
            }
        </>
    );
}

export default CartItems;