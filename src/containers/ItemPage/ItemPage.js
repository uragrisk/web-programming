import React from "react";
import { useParams } from 'react-router';
import GlobalContext from "../../contexts/GlobalState";
import { useContext } from "react";
import { Button, Typography, Input, Select } from "antd";
import { ItemSection, ItemContainer, ItemFields, ItemSelectStyle, ItemIlustration, ItemButtons, ItemFooter, ItemDesc, ItemHero, ButtonStyle } from "./ItemPage.styles";
import { Link } from "react-router-dom";

const { Option } = Select;

const { Title } = Typography;

const ItemPage = () => {
    const { id } = useParams();

    const { dataRender } = useContext(GlobalContext);

    const selectedCup = dataRender.find((cup) => cup.id === parseInt(id))
    console.log(selectedCup);
    return (
        <ItemSection>
            <ItemContainer>
                <ItemHero>
                    <ItemIlustration src={selectedCup.image}></ItemIlustration>
                    <ItemDesc>
                        <h2>{selectedCup.cupName}</h2>
                        <b>Volume: </b>  {selectedCup.volume}<br />
                        <b>Matrial: </b> {selectedCup.material}<br />
                        <b> Color: </b> {selectedCup.color}
                        <ItemFields>
                            <Input
                                placeholder="Enter amount of cups:"
                                allowClear
                                size="large"
                                style={{ width: 250, height: 30, marginRight: 15 }}
                            />
                            <Select onChange={(value) => {
                                console.log(value);
                            }} placeholder="Choose color of cup:" style={ItemSelectStyle}>
                                {selectedCup.color === "silver" ? (
                                <><Option value="SILVER">🔘 Silver</Option></>) : (
                                    <><Option value="RED">🔴 Red</Option><Option value="BLUE">🔵 Blue</Option><Option value="WHITE">⚪ White</Option></>
                                    )}
                            </Select>
                        </ItemFields>
                    </ItemDesc>
                </ItemHero>
                <ItemFooter>
                    <Title level={2}><b>Price: </b>{selectedCup.price}$</Title>
                    <ItemButtons>
                        <Link to="/catalog" ><Button size={"large"} style={ButtonStyle}>Go back</Button></Link>
                        <Link to="/cart"><Button size={"large"} style={ButtonStyle}>Add to cart</Button></Link>
                    </ItemButtons>
                </ItemFooter>
            </ItemContainer>

        </ItemSection>
    )
}

export default ItemPage;