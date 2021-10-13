import {renderItemsDOM, addItemToPage, calculateTotal} from "./dom_utils.js"

const ACTIVE_CLASSNAME = "active"
const sortingCheckbox = document.getElementById("sort-checkbox")
const searchButton = document.getElementById("search_button")
const cancelButton = document.getElementById("cancel_search_button")
const searchInput = document.getElementById("search_input")
const countButton = document.getElementById("count_button")
const countResults = document.getElementById("count_results")
const totalVolume = document.getElementById("total_volume")

let cup1 = {
    id: 1,
    cupName: "Cup for tea",
    volume: parseInt("400"), 
    material: "clay",
    color: "red",
    image: "red_clay_cup.jpg"
}

let cup2 = {
    id: 2,
    cupName: "Cup for camp",
    volume: parseInt("300"), 
    material: "metal",
    color: "silver",
    image: "silver_metal_cup.jpg"
}

let cup3 = {
    id: 3,
    cupName: "Cup for school",
    volume: parseInt("250"), 
    material: "plastic",
    color: "blue",
    image: "blue_plastic_cup.jpg"
}

let cup4 = {
    id: 4,
    cupName: "Cup for coffe",
    volume: parseInt("150"), 
    material: "clay",
    color: "white",
    image: "white_clay_cup.jpg"
}

let cup5 = {
    id: 5,
    cupName: "Cup for late",
    volume: parseInt("250"), 
    material: "paper",
    color: "white",
    image: "white_paper_cup.jpg"
}

let cup6 = {
    id: 6,
    cupName: "Cup for kitchen",
    volume: parseInt("500"), 
    material: "glass",
    color: "transparent",
    image: "transparent_glass_cup.jpg"
}

let cups = [cup1, cup2, cup3, cup4, cup5, cup6]

let cupsSorted = []

sortingCheckbox.addEventListener("click", () => {
    let cupsSorted = Array.from(cups)
    if (sortingCheckbox.classList.contains(ACTIVE_CLASSNAME)){
        cupsSorted.sort((a, b) => b.volume - a.volume)
        console.log(cupsSorted)
    }
    renderItemsDOM(cupsSorted)
})

searchButton.addEventListener("click", (event) => {
    event.preventDefault()
    let cupsFound = cups.filter(
        (cup) => cup.cupName.search(searchInput.value) !== -1)
    renderItemsDOM(cupsFound)
})

cancelButton.addEventListener("click", (event) => {
    event.preventDefault()
    renderItemsDOM(cups)
    searchInput.value = ""
})

countButton.addEventListener("click", () => {
    countResults.classList.remove("hidden")
    const volumeOfAll = calculateTotal(cups)
    totalVolume.innerHTML = volumeOfAll
})

renderItemsDOM(cups)

