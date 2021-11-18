import React from "react";
import { Select, Button } from 'antd';
import { FilterOption, Filter, SelectStyle, CatalogTitle } from "./Catalog.styled";
import {CardWrapper, Container } from "../Home/Home.styles";
import CardItem from "../../components/CardItem/CardItem";
import { cups } from "../Home/Home";


const { Option } = Select;



const Catalog = () => (
    <Container>
        <Filter>
            <FilterOption>
                <Select placeholder="Sort by price" style={SelectStyle}>
                    <Option value="Asc">Asc ↑</Option>
                    <Option value="Desc ">Desc ↓</Option>
                </Select>
                <Select placeholder="Sort by name" style={SelectStyle}>
                <Option value="Asc">Asc ↑</Option>
                    <Option value="Desc ">Desc ↓</Option>
                </Select>
                <Select placeholder="Sort by volume" style={SelectStyle}>
                <Option value="Asc">Asc ↑</Option>
                    <Option value="Desc ">Desc ↓</Option>
                </Select>
            </FilterOption>
            <Button style= {{width: 200}}>Apply</Button>
        </Filter>
        <CatalogTitle>Cups </CatalogTitle>
        <CardWrapper>
                {cups.map(({cupName, volume, material, color, image, price}, id) =>(
                    <CardItem
                    cupName={cupName}
                    volume={volume}
                    material={material}
                    color={color}
                    image={image}
                    price = {price}
                    id={id}
                />
                ))}
        </CardWrapper>
    </Container>
);

export default Catalog;

