let name = document.querySelector('.name')
let lastName = document.querySelector('.lastName')
let image = document.querySelector('.image')
let btnCreate = document.querySelector('.create')
let list = document.querySelector('.list')
let inputs = document.querySelectorAll('input')
let h2 = document.querySelector('h2')
h2.style.color = 'red'
h2.style.fontSize = '17px'
h2.style.marginTop = '10px'
let h5 = document.querySelector('h5')
h5.style.color = 'red'
h5.style.fontSize = '17px'
h5.style.marginTop = '10px'

let h4 = document.querySelector('h4')
h4.style.marginTop = '10px'
h4.style.color = 'red'
h4.style.fontSize = '17px'

let contact = document.querySelector('.contact')
read()

contact.addEventListener('click', () => {
	list.innerHTML += `<div class="list">
    </div>
    `
	list.style.overflow = 'scroll'
	list.style.width = '1000px'

	let data = JSON.parse(localStorage.getItem('todo')) || []
	data.push(obj)
	localStorage.setItem('todo', JSON.stringify(data))
	read()
})

contact.addEventListener('click', () => {
	if (!name.value || !lastName.value || !image.value) {
		alert('заполни страку')
		return
	}
})

btnCreate.addEventListener('click', () => {
	if (!name.value || !lastName.value || !image.value) {
		name.style.border = ' 2px solid red'
		name.style.borderRadius = '8px'
		h2.innerHTML += `Заполни страку`
		lastName.style.border = '2px solid red'
		lastName.style.borderRadius = '8px'

		h5.innerHTML = `заполни страку`
		image.style.border = '2px solid red'
		image.style.borderRadius = '8px'

		h4.innerHTML = `заполни страку`
		

		alert('заполни страку')
		return
	}

	let obj = {
		name: name.value,
		lastName: lastName.value,
		image: image.value
	}

	let data = JSON.parse(localStorage.getItem('todo')) || []
	data.push(obj)
	localStorage.setItem('todo', JSON.stringify(data))
	read()

	for (let i = 0; i < inputs.length; i++) {
		inputs[i].value = ''
	}
})
function read() {
	list.innerHTML = ''
	let newData = JSON.parse(localStorage.getItem('todo')) || []

	newData.forEach((el, index) => {
		let box = document.createElement('div')
		let infoBtn = document.createElement('div')
		let info = document.createElement('div')
		let btnDelete = document.createElement('button')
		let pName = document.createElement('p')
		let pLastName = document.createElement('p')
		let img = document.createElement('img')
		pName.innerText = el.name
		pLastName.innerHTML = el.lastName
		img.src = el.image
		btnDelete.innerHTML = 'delete'

		box.classList.add('box')

		infoBtn.append(btnDelete)
		box.append(img)
		info.append(pName)
		info.append(pLastName)
		box.append(info)
		box.append(infoBtn)
		list.append(box)

		btnDelete.addEventListener('click', () => {
			deleteItems(index)
		})
	})
}

function deleteItems(id) {
	let data = JSON.parse(localStorage.getItem('todo')) || []
	data.splice(id, 1)
	localStorage.setItem('todo', JSON.stringify(data))
	read()
}
