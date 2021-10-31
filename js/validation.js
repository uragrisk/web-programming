const createNameInput = document.getElementById("create-name-input")
const createVolumeInput = document.getElementById("create-volume-input")
const createMaterialInput = document.getElementById("create-material-input")

const editNameInput = document.getElementById("edit-name-input")
const editVolumeInput = document.getElementById("edit-volume-input")
const editMaterialInput = document.getElementById("edit-material-input")



const invalidSymbols = ["№", "<", ">", "/", "|", "\\", "#", "!", "~", "&", "$", "@", ";", ".", "?", "%", "*", "₴", "`"];

const validateInputString = (string) => {
    return !invalidSymbols.some((symbol) => string.includes(symbol))
}

const validateInputInt = (integer) => {
    if (integer.charAt(0) == "0")
        return 1
    for (var i = 0; i < integer.length; i++) {
        if (integer.charAt(i) < "0" || integer.charAt(i) > "9") {
            return 0
        }
    }
    return 2
}

const validateCreate = () => {
    let validated = true
    if (createNameInput.value === "") {
        alert("Name field must not be empty")
        validated = false
    } else if (!validateInputString(createNameInput.value)) {
        alert("Name has restricted symbols")
        validated = false
    }

    if (createVolumeInput.value === "") {
        alert("Volume field must not be empty")
        validated = false
    }else {
        switch (validateInputInt(createVolumeInput.value)) {
            case 0:
                alert("Volume not an integer")
                validated = false
                break
            case 1:
                alert("Volume first digit cannot be 0")
                validated = false
                break
    }}

    if (createMaterialInput.value === "") {
        alert("Material field must not be empty")
        validated = false
    } else if (!validateInputString(createMaterialInput.value)) {
        alert("Material has restricted symbols")
        validated = false
    }

    return validated
}

const validateEdit = () => {
    let validated = true
    if (editNameInput.value === "") {
        alert("Name field must not be empty")
        validated = false
    } else if (!validateInputString(editNameInput.value)) {
        alert("Name has restricted symbols")
        validated = false
    }

    if (editVolumeInput.value === "") {
        alert("Volume field must not be empty")
        validated = false
    }else {
        switch (validateInputInt(editVolumeInput.value)) {
            case 0:
                alert("Volume not an integer")
                validated = false
                break
            case 1:
                alert("Volume first digit cannot be 0")
                validated = false
                break
    }}

    if (editMaterialInput.value === "") {
        alert("Material field must not be empty")
        validated = false
    } else if (!validateInputString(editMaterialInput.value)) {
        alert("Material has restricted symbols")
        validated = false
    }

    return validated
}

export {validateInputString, validateCreate, validateEdit}