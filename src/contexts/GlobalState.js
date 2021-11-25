import React from "react";


import redClayCup from "../containers/Images/red_clay_cup.jpg";
import silverMetalCup from "../containers/Images/silver_metal_cup.jpg";
import bluePlasticCup from "../containers/Images/blue_plastic_cup.jpg";
import whiteClayCup from "../containers/Images/white_clay_cup.jpg";
import whitePaperCup from "../containers/Images/white_paper_cup.jpg";
import transparentGlassCup from "../containers/Images/transparent_glass_cup.jpg";

export let cup1 = {
    id: 1,
    cupName: "Cup for tea",
    material: "clay",
    color: "red",
    volume: 400,
    image: redClayCup,
    price: 25
}

let cup2 = {
    id: 2,
    cupName: "Cup for camp",
    material: "metal",
    color: "silver",
    volume: 300,
    image: silverMetalCup,
    price: 15
}

let cup3 = {
    id: 3,
    cupName: "Cup for school",
    material: "plastic",
    color: "blue",
    volume: 250,
    image: bluePlasticCup,
    price: 10
}

let cup4 = {
    id: 4,
    cupName: "Cup for coffe",
    material: "clay",
    color: "white",
    volume: 150,
    image: whiteClayCup,
    price: 20
}

let cup5 = {
    id: 5,
    cupName: "Cup for late",
    material: "paper",
    color: "white",
    volume: 250,
    image: whitePaperCup,
    price: 7
}

let cup6 = {
    id: 6,
    cupName: "Cup for kitchen",
    material: "glass",
    color: "transparent",
    volume: 500,
    image: transparentGlassCup,
    price: 20
}


export let cups = [cup1, cup2, cup3, cup4, cup5, cup6]

const GlobalContext = React.createContext();



export default GlobalContext;