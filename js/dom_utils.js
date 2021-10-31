import {cups, cupsList} from "./index.js"
const editCupWindow = document.getElementById("edit_cup_window")



const cardTemplate = ({ id, cupName, volume, material, color, image }) => `
<div id="cup_${id}" class="card">
    <img src="img/${image}" class="card-image" width="200px" alt="card image">
    <div class="card__body">
        <h5 class="card__body-title">${cupName}</h5>
        <p class="card__body-paragraph">Volume: ${volume}</p>
        <p class="card__body-paragraph">Material: ${material}</p>
        <p class="card__body-paragraph">Color: ${color}</p>
    </div>
    <div class="card__buttons">
        <button class="card__edit-button" id="edit_button_cup_${id}">Edit</button>
        <button class="card__delete-button" id="delete_button_cup_${id}">Delete</button>
</div>
`

const addItemToPage = ({ id, cupName, volume, material, color, image }) => {
    cupsList.insertAdjacentHTML("afterbegin", cardTemplate({ id, cupName, volume, material, color, image })
    )
}
const renderItemsDOM = (array) => {
    cupsList.innerHTML = ""

    for (const item of array) {
        addItemToPage(item)
    }
    renderEditButtons()
}

const calculateTotal = (cups) => {
    let total = 0
    for (const cup of cups) {
        total += cup.volume
    }
    return total
}

const openModalWindow = (modalWindow) => {
    modalWindow.style.display = "block"
}

const closeModalWindow = (modalWindow) => {
    modalWindow.style.display = "none"
}

const renderEditButtons = () =>{
    for(let cup of cups){
        let editButton = document.getElementById(`edit_button_cup_${cup.id}`)
        editButton.addEventListener("click", () => {
            openModalWindow(editCupWindow)
    })
}
}


export { renderItemsDOM, addItemToPage, calculateTotal, openModalWindow, closeModalWindow}
