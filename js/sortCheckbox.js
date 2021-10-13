const ACTIVE_CLASSNAME = "active";
const sortingCheckbox = document.getElementById("sort-checkbox");

function sortCheckbox() {
    if (sortingCheckbox.classList.contains(ACTIVE_CLASSNAME)) {
        sortingCheckbox.classList.remove(ACTIVE_CLASSNAME);
    } else {
        sortingCheckbox.classList.add(ACTIVE_CLASSNAME);
    }
}
