import React from "react";
import {
    HomeSection, Container, Ilustration, HomeParagraph, Hero,
    CardWrapper, MoreButton, HomeButton
} from "./Home.styles";
import HomeImage from "../Images/Cups.jpg";
import CardItem from "../../components/CardItem/CardItem";
import GlobalContext from '../../contexts/GlobalState'
import { useContext, useState, useEffect } from 'react';
import { getCupList } from "../../API/API";
import { Loading } from "../../components/Loading/Loading";


const Home = () => {
    const { dataRender } = useContext(GlobalContext);
    let { setDataRender } = useContext(GlobalContext);
    const [isLoaded, setIsLoaded] = useState(true);
    const { filters } = useContext(GlobalContext);
    const [viewMore, setViewMore] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        getCupList().then(res => {
            setDataRender(res);
            setIsLoaded(true)
        })
    }, [filters]);
    // console.log(isLoaded);
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
                    {isLoaded ? dataRender.slice(0, viewMore ? dataRender.length : 3).map(({ cupName, volume, material, color, image, price, id }) => (
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
                    )): <Loading />}
                </CardWrapper>
                {isLoaded ? dataRender.length > 3 ? (
                <HomeButton>
                    <MoreButton
                        onClick={() => setViewMore(!viewMore)}>
                        {!viewMore ? "View more" : "View less"}</MoreButton>
                </HomeButton>
                ) : (
                ""
                ): <div/>}
            </Container>
        </HomeSection>
    )
}
export default Home;