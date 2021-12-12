import React from "react";
import { useParams } from 'react-router';
import { useState, useEffect } from "react";
import { Button, Typography, Input, Select } from "antd";
import { ItemSection, ItemContainer, ItemFields, ItemSelectStyle, ItemIlustration, ItemButtons, ItemFooter, ItemDesc, ItemHero, ButtonStyle } from "./ItemPage.styles";
import { Link } from "react-router-dom";
import { getCup } from "../../API/API";
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from "../../components/Loading/Loading";
import { increaseAmount, addToCart } from "../../redux/actions";



const { Option } = Select;

const { Title } = Typography;

const ItemPage = () => {
    const { id } = useParams();
    const [cup, setCup] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        getCup(id).then(res => {
            setCup(res);
            setIsLoaded(true);
        });
    }, [id]);

    const cartItems = useSelector((state) => state.cartItems.cartItems);
    let dispatch = useDispatch();

    const handleAddToCart = () => {
        let cupsNumber;
        if (document.getElementById("amount").value != ""){
            cupsNumber = parseInt(document.getElementById("amount").value);
        } else {
            cupsNumber = 1;
        }
        if (cartItems.some(item => item.id == id)) {
            dispatch(increaseAmount(id, cupsNumber));
        } else {
            let item = cup;
            item.amount = cupsNumber;
            dispatch(addToCart(item));
        }
    }

    return (
        <ItemSection>
            <ItemContainer>
                <ItemHero>
                    {isLoaded ? <ItemIlustration alt={cup.image} src={cup.image}
                    ></ItemIlustration> : <Loading />}
                    <ItemDesc>
                        <h2>{cup.cupName}</h2>

                        <b>Volume: </b>  {cup.volume}<br />
                        <b>Matrial: </b> {cup.material}<br />
                        <b> Color: </b> {cup.color}
                        <ItemFields>
                            <Input
                                id="amount"
                                placeholder="Enter amount of cups:"
                                allowClear
                                size="large"
                                style={{ width: 250, height: 30, marginRight: 15 }}
                            />
                            <Select onChange={(value) => {
                                console.log(value);
                            }} placeholder="Choose color of cup:" style={ItemSelectStyle}>
                                {cup.color === "SILVER" ? (
                                    <><Option value="SILVER">🔘 Silver</Option></>) : (
                                    <><Option value="RED">🔴 Red</Option><Option value="BLUE">🔵 Blue</Option><Option value="WHITE">⚪ White</Option></>
                                )}
                            </Select>
                        </ItemFields>
                    </ItemDesc>
                </ItemHero>
                <ItemFooter>
                    <Title level={2}><b>Price: </b>{cup.price}$</Title>
                    <ItemButtons>
                        <Link to="/catalog" ><Button size={"large"} style={ButtonStyle}>Go back</Button></Link>
                        <Link to="/cart"><Button size={"large"} onClick={handleAddToCart} style={ButtonStyle}>Add to cart</Button></Link>
                    </ItemButtons>
                </ItemFooter>
            </ItemContainer>

        </ItemSection>
    )
}

export default ItemPage;