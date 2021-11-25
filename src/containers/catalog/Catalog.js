import React from "react";
import { CatalogTitle } from "./Catalog.styled";
import { CardWrapper, Container } from "../Home/Home.styles";
import CardItem from "../../components/CardItem/CardItem";
import GlobalContext from '../../contexts/GlobalState'
import { useContext } from 'react';
import { Filter } from "./Filter/Filter";





const Catalog = () => {
    const { dataRender } = useContext(GlobalContext);
    return (
        <div>
            <Container>
                <Filter></Filter>
                <CatalogTitle>Cups </CatalogTitle>
                <CardWrapper>
                    {dataRender.map(({ cupName, volume, material, color, image, price, id}) => (
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
            </Container>
        </div>
    )
}

export default Catalog;

