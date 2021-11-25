import React from "react";
import {
    HomeSection, Container, Ilustration, HomeParagraph, Hero,
    CardWrapper, MoreButton, HomeButton
} from "./Home.styles";
import HomeImage from "../Images/Cups.jpg";
import CardItem from "../../components/CardItem/CardItem";
import GlobalContext from '../../contexts/GlobalState'
import { useContext, useState } from 'react';


const Home = () => {
    const { dataRender } = useContext(GlobalContext);

    const [viewMore, setViewMore] = useState(false);
    return (
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
                    {dataRender.slice(0, viewMore ? dataRender.length : 3).map(({ cupName, volume, material, color, image, price, id }) => (
                        <CardItem
                            cupName={cupName}
                            volume={volume}
                            material={material}
                            color={color}
                            image={image}
                            price={price}
                            id={id}
                            log
                        />
                    ))}
                </CardWrapper>
                {dataRender.length > 3 ? (
                <HomeButton>
                    <MoreButton
                        onClick={() => setViewMore(!viewMore)}>
                        {!viewMore ? "View more" : "View less"}</MoreButton>
                </HomeButton>
                ) : (
                ""
                )}
            </Container>
        </HomeSection>
    )
}
export default Home;