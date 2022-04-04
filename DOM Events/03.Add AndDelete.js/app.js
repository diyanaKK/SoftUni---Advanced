function addItem(){
        const text = document.getElementById('newItemText').value
        const newElement = document.createElement('li')
        const button = document.createElement('a')
        button.href ='#'
        button.textContent = '[Delete]';
        button.addEventListener('click',()=> newElement.remove())
        newElement.textContent = text
        newElement.appendChild(button)
        
        const ul = document.querySelector('ul')
        ul.appendChild(newElement)
    
    
}