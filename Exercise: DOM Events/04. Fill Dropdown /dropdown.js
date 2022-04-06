function addItem() {
    const inputText = document.getElementById('newItemText')
    const inputValue = document.getElementById('newItemValue')
const menu = document.getElementById('menu')
    const newOptions = document.createElement('option')
    newOptions.textContent = inputText.value
    newOptions.value =inputValue.value
    menu.appendChild(newOptions)
    inputText.value = ''
    inputValue.value = ''
    
}