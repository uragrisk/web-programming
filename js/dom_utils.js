const cupsList = document.getElementById("cups_list")
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
        <button class="card__edit-button" id="edit_button_cup_1">Edit</button>
        <button class="card__delete-button" id="delete_button_cup_1">Delete</button>
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
}

const calculateTotal = (cups) => {
    let total = 0
    for (const cup of cups) {
        total += cup.volume
    }
    return total
}

export { renderItemsDOM, addItemToPage, calculateTotal}
