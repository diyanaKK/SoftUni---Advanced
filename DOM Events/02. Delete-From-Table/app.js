function deleteByEmail() {
    const input  = document.querySelector('input[name ="email"]')
    const rows = Array.from(document.querySelector('tbody').children)
const result = document.getElementById('result')
let remove = false
for(let row of rows){
    if(row.children[1].textContent == input.value){
        row.remove()
        remove = true
        
    }
}
if(remove){
    result.textContent = 'Deleted.'
}else {
    result.textContent = 'Not found.'
}
}