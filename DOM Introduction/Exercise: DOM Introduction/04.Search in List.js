function search(){
    const elementsForSearch = document.getElementById('searchText').value
    const townsList = document.getElementsByTagName('li')
    let count = 0
    for(let town of Array.from(townsList)){
        if(town.textContent.includes(elementsForSearch)){
            town.style.textDecoration = 'underline'
            town.style.fontWeight = 'bold' 
            count++
        }else{
           town.style.fontWeight = 'normal';
           town.style.textDecoration = 'none'
        }
    }
    document.getElementById('result').textContent = `${Number(count)} matches found`
    
}