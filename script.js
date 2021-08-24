let wrapperItens = document.querySelector("#wrapper-itens")

let addButton = document.querySelector("#plus-icon")

let wrapperForm = document.querySelector("#wrapper-add-more")
let form = document.querySelector("#form-item")

addButton.addEventListener("click", () => {
	if (wrapperForm.classList.contains("activated")) {
		inserirItem()
        checkBest()
	} else {
		wrapperForm.classList.add("activated")
	}
})

function inserirItem() {
	let title = form.querySelector("#title")
	let price = form.querySelector("#price")
	let volume = form.querySelector("#volume")
	let color = form.querySelector("#color")

	let item = criaCard(title.value, price.value, volume.value, color.value)

	wrapperItens.appendChild(item)

	title.value = ""
	price.value = ""
	volume.value = ""
	color.value = "#ffffff"

	wrapperForm.classList.remove("activated")
}

function criaCard(title, price, volume, color) {
	let card = document.createElement("div")
	card.classList.add("item")
	let icon = document.createElement("div")
	icon.classList.add("item-icon")
	icon.style.backgroundColor = color

	let info = document.createElement("div")
	info.classList.add("item-info")
	let name = document.createElement("div")
	name.classList.add("item-title")
	name.innerText = title
	let numbers = document.createElement("div")
	numbers.classList.add("item-numbers")
	let value1 = document.createElement("div")
	value1.classList.add("item-value")
	value1.innerText = `R$ ${price}`
	let value2 = document.createElement("div")
	value2.classList.add("item-value")
	value2.innerText = `${volume}g`

	numbers.appendChild(value1)
	numbers.appendChild(value2)

	info.appendChild(name)
	info.appendChild(numbers)

	card.appendChild(icon)
	card.appendChild(info)

	return card
}

function checkBest() {
	let itens = wrapperItens.querySelectorAll(".item")

    let menorValor, menorItem

	itens.forEach((item) => {
		let values = item.querySelectorAll(".item-value")

		let preco = values[0].innerHTML.replace("R$ ", "")
		let volume = values[1].innerHTML.replace("g", "")

        let cemG = preco*100/volume

        item.setAttribute("cem-g", cemG)

		console.log(preco, volume, cemG)
	})

    itens.forEach((item) => {
        let star = item.querySelector(".item-icon i")

        star?.remove()

        if(!menorValor || item.getAttribute("cem-g") < menorValor){
            menorItem = item
            menorValor = item.getAttribute("cem-g")
        }
    })

    menorItem.querySelector(".item-icon").appendChild(createStar())
}

function createStar() {
    let i = document.createElement("i")
    i.classList.add("fas", "fa-star")

    return i
}