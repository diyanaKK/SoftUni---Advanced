function solve() {
let name = document.querySelector('#recipientName')
let title = document.querySelector('#title')
let message = document.querySelector('#message')
let btnAdd = document.querySelector('#add')
let btnReset = document.querySelector('#reset')
btnAdd.addEventListener('click', add)
btnReset.addEventListener('click',reset)
function reset(ev) {
    ev.preventDefault()
    name.value=''
    title.value=''
    message.value=''
}

function add(ev) {
    ev.preventDefault()
    if(name.value&&title.value&&message.value){
    let ul = document.querySelector('#list')
    let li = document.createElement('li')

    let titleVal = title.value
    let h4Title = document.createElement('h4')
    h4Title.textContent = 'Title: ' + title.value
    li.appendChild(h4Title)
    title.value = ''
    let nameVal = name.value
    let h4Name = document.createElement('h4')
    h4Name.textContent = 'Recipient Name: ' + name.value
    li.appendChild(h4Name)
    name.value = ''

    let spanMessage = document.createElement('span')
    spanMessage.textContent = message.value
    li.appendChild(spanMessage)
    message.value = ''

    ul.appendChild(li)
    let btnSend = document.createElement('button')
    btnSend.textContent ='Send'
    btnSend.id = 'send'
    let btnDelete = document.createElement('button')
    btnDelete.textContent = 'Delete'
    btnDelete.id = 'delete'
    btnSend.addEventListener('click', sendMails)
    btnDelete.addEventListener('click', deleteList)
    
    function deleteList(ev) {
        if (li) {
            let ulDel = document.querySelector('.delete-list')
            let liDelete = document.createElement('li')
            let spanDel = document.createElement('span')
            spanDel.textContent = nameVal
            let spanDelT = document.createElement('span')
            spanDelT.textContent = titleVal
            liDelete.appendChild(spanDel)
            liDelete.appendChild(spanDelT)
            ulDel.appendChild(liDelete)
            li.remove()
        }
    }

    function sendMails(ev) {

        let ulMails = document.querySelector('.sent-list')
        let liMail = document.createElement('li')
        let spanName = document.createElement('span')
        spanName.textContent = 'To: ' + nameVal
        let spanTitle = document.createElement('span')
        spanTitle.textContent = 'Title: ' + titleVal
        liMail.appendChild(spanName)
        liMail.appendChild(spanTitle)
        ulMails.appendChild(liMail)
        let divForButton = document.createElement('div')
        divForButton.classList.add('btn')

        btnDelete.addEventListener('click', deleteFunc)

        function deleteFunc(ev) {
            let ulDel = document.querySelector('.delete-list')
             if (liMail) {
                ulDel.appendChild(liMail)
                liMail.remove()
            }
        }
        divForButton.appendChild(btnDelete)
        liMail.appendChild(divForButton)
        li.remove()

    }



    let divForBtns = document.createElement('div')
    divForBtns.id ='list-action'
    divForBtns.appendChild(btnSend)
    divForBtns.appendChild(btnDelete)
    li.appendChild(divForBtns)

    }
}
}

solve()





