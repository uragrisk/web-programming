import { getAllCups, postCup, deleteCup, updateCup } from "./api.js"
import {renderItemsDOM, addItemToPage, calculateTotal, openModalWindow, closeModalWindow, getInputValues, curentCupId} from "./dom_utils.js"
import {validateInputString, validateCreate, validateEdit} from "./validation.js"

const sortingCheckbox = document.getElementById("sort-checkbox")
const searchButton = document.getElementById("search_button")
const cancelButton = document.getElementById("cancel_search_button")
const searchInput = document.getElementById("search_input")
const countButton = document.getElementById("count_button")
const countResults = document.getElementById("count_results")
const totalVolume = document.getElementById("total_volume")
const cupsList = document.getElementById("cups_list")

const createCupButton = document.getElementById("create_cup_window_button")
const createCupWindow = document.getElementById("create_cup_window")
const createCupWindowClose = document.getElementById("create_cup_window_close")
const createCupFormButton = document.getElementById("create_cup-form-button")
const createCupWindowForm = document.getElementById("create_cup_window_form")


const editCupWindow = document.getElementById("edit_cup_window")
const editCupWindowClose = document.getElementById("edit_cup_window_close")
const editCupFormButton = document.getElementById("edit_cup-form-button")
const editCupWindowForm = document.getElementById("edit_cup_window_form")

const createNameInput = document.getElementById("create-name-input")
const createVolumeInput = document.getElementById("create-volume-input")
const createMaterialInput = document.getElementById("create-material-input")
const createColorSelect = document.getElementById("create-color-select")

const editNameInput = document.getElementById("edit-name-input")
const editVolumeInput = document.getElementById("edit-volume-input")
const editMaterialInput = document.getElementById("edit-material-input")
const editColorSelect = document.getElementById("edit-color-select")

const deleteCupWindow = document.getElementById("delete_cup_window")
const deleteCupWindowClose = document.getElementById("delete_cup_window_close")
const deleteCupButton = document.getElementById("agree_to_delete_button")
const notDeleteCupButton = document.getElementById("disagree_to_delete_button")


// let cup1 = {
//     id: 1,
//     cupName: "Cup for tea",
//     volume: parseInt("400"), 
//     material: "clay",
//     color: "red",
//     image: "red_clay_cup.jpg"
// }

// let cup2 = {
//     id: 2,
//     cupName: "Cup for camp",
//     volume: parseInt("300"), 
//     material: "metal",
//     color: "silver",
//     image: "silver_metal_cup.jpg"
// }

// let cup3 = {
//     id: 3,
//     cupName: "Cup for school",
//     volume: parseInt("250"), 
//     material: "plastic",
//     color: "blue",
//     image: "blue_plastic_cup.jpg"
// }

// let cup4 = {
//     id: 4,
//     cupName: "Cup for coffe",
//     volume: parseInt("150"), 
//     material: "clay",
//     color: "white",
//     image: "white_clay_cup.jpg"
// }

// let cup5 = {
//     id: 5,
//     cupName: "Cup for late",
//     volume: parseInt("250"), 
//     material: "paper",
//     color: "white",
//     image: "white_paper_cup.jpg"
// }

// let cup6 = {
//     id: 6,
//     cupName: "Cup for kitchen",
//     volume: parseInt("500"), 
//     material: "glass",
//     color: "transparent",
//     image: "transparent_glass_cup.jpg"
// }

// let cups = [cup1, cup2, cup3, cup4, cup5, cup6]

let cups

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

createCupButton.addEventListener("click", (event) => {
    event.preventDefault
        openModalWindow(createCupWindow)
})

createCupWindowClose.addEventListener("click", (event) => {
    event.preventDefault
    closeModalWindow(createCupWindow)
})

createCupFormButton.addEventListener("click", (event) =>{
    event.preventDefault()
    if (validateCreate()){
        postCup(getInputValues(createNameInput, createVolumeInput, createMaterialInput,
            createColorSelect)).then(refetchAllCups)
        closeModalWindow(createCupWindow)
        createCupWindowForm.reset()
    }
})

editCupWindowClose.addEventListener("click", (event) => {
    event.preventDefault
    closeModalWindow(editCupWindow)
})

editCupFormButton.addEventListener("click", (event) =>{
    event.preventDefault()
    if (validateEdit()){
        updateCup(curentCupId, getInputValues(editNameInput, editVolumeInput, editMaterialInput,
            editColorSelect))
            .then(refetchAllCups)
        closeModalWindow(editCupWindow)
        editCupWindowForm.reset()
    }
})

deleteCupWindowClose.addEventListener("click", (event) => {
    event.preventDefault
    closeModalWindow(deleteCupWindow)
})

notDeleteCupButton.addEventListener("click", (event) => {
    event.preventDefault
    closeModalWindow(deleteCupWindow)
})

deleteCupButton.addEventListener("click", (event) =>{
    event.preventDefault()
    console.log(curentCupId)
    deleteCup(curentCupId).then(refetchAllCups)
    closeModalWindow(deleteCupWindow)
})


export const refetchAllCups = async () => {
    const allCups = await getAllCups()
    cups = allCups
    renderItemsDOM(cups)
}


cups = await getAllCups()
renderItemsDOM(cups)

getAllCups().then(console.log)

export {cups, cupsList, editNameInput, editVolumeInput, editMaterialInput, editColorSelect}