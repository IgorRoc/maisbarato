let addButton = document.querySelector("#plus-icon")
let wrapperForm = document.querySelector("#wrapper-add-more")

addButton.addEventListener("click", () => {
    wrapperForm.classList.toggle("activated")
})