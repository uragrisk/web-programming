import React from "react";
import { Card, Button, Typography } from "antd";
import { Footer, CardStyle } from "./CardItem.styled";
import 'antd/dist/antd.css'
import { Link } from "react-router-dom";


const { Title } = Typography;
const { Meta } = Card;

const CardItem = ({ cupName, volume, material, color, image, price, id }) => (
  <Card
    hoverable
    style={CardStyle}
    cover={<img alt={String(color) + " " + String(material) + " cup"}
      src={image} />}
  >
    <Meta title={<Title level={2}>{cupName}</Title>} description={<><b>Volume:</b>  {volume}<br />
      <b>Matrial: </b> {material} <br />
      <b> Color: </b>  {color}</>} />
    <Footer>
      <Title level={3}>{price}$</Title>
      <Link to={"/cups/"+ id}>
      <Button size={"large"}>Show More</Button>
      </Link>
    </Footer>
  </Card>
);

export default CardItem;
