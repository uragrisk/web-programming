import React from "react";
import { Card, Button, Typography } from "antd";
import { Footer, CardStyle } from "./CardItem.styled";
import 'antd/dist/antd.css'
import { Link } from "react-router-dom";



const { Title } = Typography;
const { Meta } = Card;

const CardItem = ({ cupName, material, color, volume, image, price, id }) => {
  return (
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
        <Link to={"/cups/" + id}>
          <Button size={"large"}>Show More</Button>
        </Link>
      </Footer>
    </Card>
  )
}

export default CardItem;



// import redClayCup from "../../containers/Images/red_clay_cup.jpg";
// import silverMetalCup from "../../containers/Images/silver_metal_cup.jpg";
// import bluePlasticCup from "../../containers/Images/blue_plastic_cup.jpg";
// import whiteClayCup from "../../containers/Images/white_clay_cup.jpg";
// import whitePaperCup from "../../containers/Images/white_paper_cup.jpg";
// import transparentGlassCup from "../../containers/Images/transparent_glass_cup.jpg";

// console.log(redClayCup);
// console.log(silverMetalCup);
// console.log(bluePlasticCup);
// console.log(whiteClayCup);
// console.log(whitePaperCup);
// console.log(transparentGlassCup);
