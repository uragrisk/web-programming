import React from "react";
import { Select} from 'antd';
import { FilterOption, FilterArea, SelectStyle } from "./Filter.styled";
import GlobalContext from '../../../contexts/GlobalState'
import { useContext } from 'react';
import { cups } from "../../../contexts/GlobalState";

const { Option } = Select;


export const Filter = () => {
    let { setDataRender } = useContext(GlobalContext);
    let sortedData = Array.from(cups);

    const filter_by_price = (value) => {
        if (value === "Asc") {
            sortedData.sort((cup1, cup2) => cup1.price - cup2.price);
        } else {
            sortedData.sort((cup1, cup2) => cup2.price - cup1.price);
        }
        setDataRender(sortedData);
    }

    const filter_by_name = (value) => {
        if (value === "Asc") {
            sortedData.sort((cup1, cup2) => {
                if (cup1.cupName < cup2.cupName) return -1
                return cup1.cupName > cup2.cupName ? 1 : 0
            })
        }
        else {
            sortedData.sort((cup1, cup2) => {
                if (cup1.cupName > cup2.cupName) return -1
                return cup1.cupName < cup2.cupName ? 1 : 0
            })
        }
        setDataRender(sortedData);
    }

    const filter_by_volume = (value) => {
        if (value === "Asc") {
            sortedData.sort((cup1, cup2) => cup1.volume - cup2.volume);
            console.log(sortedData)
        } else {
            sortedData.sort((cup1, cup2) => cup2.volume - cup1.volume);
        }
        setDataRender(sortedData);
    }


    return (
        <FilterArea>
            <FilterOption>
                <Select onChange={(value) => {
                    filter_by_price(value)
                }} placeholder="Sort by price" style={SelectStyle}>
                    <Option value="Asc">Asc ↑</Option>
                    <Option value="Desc ">Desc ↓</Option>
                </Select>
                <Select onChange={(value) => {
                    filter_by_name(value)
                }} placeholder="Sort by name" style={SelectStyle}>
                    <Option value="Asc">Asc ↑</Option>
                    <Option value="Desc ">Desc ↓</Option>
                </Select>
                <Select onChange={(value) => {
                    filter_by_volume(value)
                }} placeholder="Sort by volume" style={SelectStyle}>
                    <Option value="Asc">Asc ↑</Option>
                    <Option value="Desc ">Desc ↓</Option>
                </Select>
            </FilterOption>

        </FilterArea>
    )
}