function notify(message) {
  let div = document.getElementById('notification')
  div.textContent = message
  div.style.display = 'block'
  div.addEventListener('click',onClick)

function onClick(ev){
  div.style.display = 'none'
}



}