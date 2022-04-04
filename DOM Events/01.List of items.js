function addItem(){
    const text = document.getElementById('newItemText').value
    const newElement = document.createElement('li')
    newElement.textContent = text
    const ul = document.querySelector('ul')
    ul.appendChild(newElement)


}