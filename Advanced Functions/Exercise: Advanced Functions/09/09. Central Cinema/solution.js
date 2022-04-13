function solve() {
    const name = document.querySelector('div input[placeholder="Name"]')
    const hall = document.querySelector('div input[placeholder="Hall"]')
    const price = document.querySelector('div input[placeholder="Ticket Price"]')
    const movies = document.querySelector('#movies')
    const archive = document.querySelector('#archive')
    let buttonClear = archive.querySelector('button')

    let buttonOnScreen = document.querySelector('div button')
    buttonOnScreen.addEventListener('click', onScreen)
    archive.appendChild(buttonClear)

    function onScreen(ev) {
        ev.preventDefault()
        let priceNum = Number(price.value)
        if (name.value && hall.value && priceNum) {
            
                let nameV = name.value
                let hallV = hall.value

                let ul = movies.querySelector('ul')
                let li = document.createElement('li')

                let span = document.createElement('span')
                span.textContent = nameV
                li.appendChild(span)
                name.value = ''

                let strong = document.createElement('strong')
                strong.textContent = `Hall: ${hallV}`
                li.appendChild(strong)
                hall.value = ''

                let div = document.createElement('div')

                let strongDiv = document.createElement('strong')
                strongDiv.textContent = priceNum.toFixed(2)
                div.appendChild(strongDiv)
                price.value = ''

                let inputDiv = document.createElement('input')
                inputDiv.placeholder = "Tickets Sold"
                div.appendChild(inputDiv)

                let buttonArchive = document.createElement('button')
                buttonArchive.textContent = 'Archive'
                buttonArchive.addEventListener('click', onArchive)
                div.appendChild(buttonArchive)
                li.appendChild(div)
                ul.appendChild(li)
            



            function onArchive(ev) {
                let currentCont = ev.target.parentElement.parentElement

                let currentI = Number(currentCont.querySelector('input').value)
                
                    if (currentI || currentI ===0) {
                        let archiveUl = archive.querySelector('ul')
                        let filmName = currentCont.querySelector('span').textContent
                        let priceSingle = currentCont.querySelector('div strong')


                        singlePrice = Number(priceSingle.textContent)

                        let totalP = `Total amount: ${Number(currentI * singlePrice).toFixed(2)}`
                        currentCont.remove()

                        let newLi = document.createElement('li')
                        let spanName = document.createElement('span')
                        spanName.textContent = filmName
                        newLi.appendChild(spanName)
                        let strongTotal = document.createElement('strong')
                        strongTotal.textContent = totalP
                        newLi.appendChild(strongTotal)
                        let deleteB = document.createElement('button')
                        deleteB.addEventListener('click', onDelete)
                        deleteB.textContent = 'Delete'
                        newLi.appendChild(deleteB)
                        archiveUl.appendChild(newLi)


                        function onDelete(ev) {
                                newLi.remove()
                                     
                        }
                        buttonClear.addEventListener('click', clear)

                        function clear(ev) {
                            let li = Array.from(archive.querySelectorAll('li'))
                            li.forEach((el) => el.remove())

                        }
                    }
                
            }
        }
    }
}