function create(words) {
   for(let word of words){
     const newEl =  document.createElement('div')
     let p = document.createElement('p')
     p.textContent = word
     p.style.display='none'
     newEl.appendChild(p)
     document.querySelector('#content').appendChild(newEl)
     newEl.addEventListener('click',onClick)
   }
   function onClick(ev){
 const div = ev.currentTarget
 div.children[0].style.display = 'block'
   }
}