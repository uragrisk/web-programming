import React from "react";
import { CatalogTitle } from "./Catalog.styled";
import { CardWrapper, Container } from "../Home/Home.styles";
import CardItem from "../../components/CardItem/CardItem";
import GlobalContext from '../../contexts/GlobalState'
import { useContext, useState, useEffect } from 'react';
import { getCupList } from "../../API/API";
import { Filter } from "./Filter/Filter";
import { Loading } from "../../components/Loading/Loading";





const Catalog = () => {
    const { dataRender } = useContext(GlobalContext);
    let { setDataRender } = useContext(GlobalContext);
    const { filters } = useContext(GlobalContext);
    const [isLoaded, setIsLoaded] = useState(false);
    let { setCups } = useContext(GlobalContext);


    useEffect(() => {
        setIsLoaded(false);
        getCupList().then(res => {
            setCups(res)
            console.log(filters.filterBy)
            console.log(filters.sortOrder)
            switch(filters.filterBy){
                case "price":
                    if (filters.sortOrder === "asc"){
                        res.sort((cup1, cup2) => cup1.price - cup2.price);}
                    else {
                        res.sort((cup1, cup2) => cup2.price - cup1.price);}
                    break;
                case "name":
                    if (filters.sortOrder === "asc") {
                        res.sort((cup1, cup2) => {
                            if (cup1.cupName < cup2.cupName) return -1
                            return cup1.cupName > cup2.cupName ? 1 : 0
                        })
                    }
                    else {
                        res.sort((cup1, cup2) => {
                            if (cup1.cupName > cup2.cupName) return -1
                            return cup1.cupName < cup2.cupName ? 1 : 0
                        })
                    }
                    break;
                case "volume":
                    if (filters.sortOrder === "asc") {
                        res.sort((cup1, cup2) => cup1.volume - cup2.volume);
                    } else {
                        res.sort((cup1, cup2) => cup2.volume - cup1.volume);
                    }
                    break
            }
            setDataRender(res);
            setIsLoaded(true);
        });
    }, [filters]);

    return (
        <div>
            <Container>
                <Filter></Filter>
                <CatalogTitle>Cups </CatalogTitle>
                <CardWrapper>
                    {isLoaded ? dataRender.map(({ cupName,  material, color, volume, image, price, id}) => (
                        <CardItem
                            cupName={cupName}
                            volume={volume}
                            material={material}
                            color={color}
                            image={image}
                            price={price}
                            id={id}
                        />
                    )): <Loading />}
                </CardWrapper>
            </Container>
        </div>
    )
}

export default Catalog;

