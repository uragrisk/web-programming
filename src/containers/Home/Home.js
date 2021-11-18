import React from "react";
import {
    HomeSection, HomeContainer, Ilustration, HomeParagraph, Hero,
    CardWrapper, MoreButton, HomeButton
} from "./Home.styles";
import HomeImage from "../Images/Cups.jpg";
import CardItem from "../../components/CardItem/CardItem";

import redClayCup from "../Images/red_clay_cup.jpg";
import silverMetalCup from "../Images/silver_metal_cup.jpg";
import bluePlasticCup from "../Images/blue_plastic_cup.jpg";



const Home = () => (
    <HomeSection>
        <HomeContainer>
            <Hero>
                <Ilustration src={HomeImage}></Ilustration>
                <HomeParagraph>
                    <h2>Our Cups</h2>
                    Check out our clay cups selection for the very best in unique or
                    custom, handmade pieces from our mugs shops.
                </HomeParagraph>
            </Hero>
            <CardWrapper>
                <CardItem
                    cupName="Cup for tea"
                    volume="400"
                    material="clay"
                    color="red"
                    image={redClayCup}
                    price = "25"
                />
                <CardItem
                    cupName="Cup for camp"
                    volume="300"
                    material="metal"
                    color="silver"
                    image={silverMetalCup}
                    price = "15"
                />
                <CardItem
                    cupName="Cup for school"
                    volume="250"
                    material="plastic"
                    color="blue"
                    image={bluePlasticCup}
                    price = "10"
                />
            </CardWrapper>
            <HomeButton><MoreButton>View more</MoreButton></HomeButton>
        </HomeContainer>
    </HomeSection>
)

export default Home;