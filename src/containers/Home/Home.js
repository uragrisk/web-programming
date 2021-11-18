import React from "react";
import {
    HomeSection, Container, Ilustration, HomeParagraph, Hero,
    CardWrapper, MoreButton, HomeButton
} from "./Home.styles";
import HomeImage from "../Images/Cups.jpg";
import CardItem from "../../components/CardItem/CardItem";

import redClayCup from "../Images/red_clay_cup.jpg";
import silverMetalCup from "../Images/silver_metal_cup.jpg";
import bluePlasticCup from "../Images/blue_plastic_cup.jpg";
import whiteClayCup from "../Images/white_clay_cup.jpg";
import whitePaperCup from "../Images/white_paper_cup.jpg";
import transparentGlassCup from "../Images/transparent_glass_cup.jpg";

let cup1 = {
    cupName: "Cup for tea",
    volume: 400,
    material: "clay",
    color: "red",
    image: redClayCup,
    price: 25
}

let cup2 = {
    cupName: "Cup for camp",
    volume: 300,
    material: "metal",
    color: "silver",
    image: silverMetalCup,
    price: 15
}

let cup3 = {
    id: 3,
    cupName: "Cup for school",
    volume: 250,
    material: "plastic",
    color: "blue",
    image: bluePlasticCup,
    price: 10
}

let cup4 = {
    id: 4,
    cupName: "Cup for coffe",
    volume: 150,
    material: "clay",
    color: "white",
    image: whiteClayCup,
    price: 20
}

let cup5 = {
    id: 5,
    cupName: "Cup for late",
    volume: 250,
    material: "paper",
    color: "white",
    image: whitePaperCup,
    price: 7
}

let cup6 = {
    id: 6,
    cupName: "Cup for kitchen",
    volume: 500,
    material: "glass",
    color: "transparent",
    image: transparentGlassCup,
    price: 20
}


export let cups = [cup1, cup2, cup3, cup4, cup5, cup6]



const Home = () => (
    <HomeSection>
        <Container>
            <Hero>
                <Ilustration src={HomeImage}></Ilustration>
                <HomeParagraph>
                    <h2>Our Cups</h2>
                    Check out our clay cups selection for the very best in unique or
                    custom, handmade pieces from our mugs shops.
                </HomeParagraph>
            </Hero>
            <CardWrapper>
                {cups.slice(1, 4).map(({ cupName, volume, material, color, image, price }, id) => (
                    <CardItem
                        cupName={cupName}
                        volume={volume}
                        material={material}
                        color={color}
                        image={image}
                        price={price}
                        id={id}
                    />
                ))}
            </CardWrapper>
            <HomeButton><MoreButton>View more</MoreButton></HomeButton>
        </Container>
    </HomeSection>
)

export default Home;