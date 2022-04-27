function solve() {
   let author = document.querySelector('#creator')
   let title = document.querySelector('#title')
   let category = document.querySelector('#category')
   let content = document.querySelector('#content')
   let btnCreate = document.querySelector('.btn.create')
   btnCreate.addEventListener('click', create)

   function create(ev) {
      ev.preventDefault()
      
      let postSection = document.querySelector('main section')
      let newArticle = document.createElement('article')
      let h1 = document.createElement('h1')
      h1.textContent = title.value
      newArticle.appendChild(h1)
      title.value = ''

      let pCategory = document.createElement('p')
      pCategory.textContent = 'Category:'


      let strongForCategory = document.createElement('strong')
      strongForCategory.textContent = category.value
      pCategory.appendChild(strongForCategory)
      newArticle.appendChild(pCategory)
      category.value = ''

      let pCreator = document.createElement('p')
      pCreator.textContent = 'Creator:'

      let strongForCreator = document.createElement('strong')
      strongForCreator.textContent = author.value
      pCreator.appendChild(strongForCreator)
      newArticle.appendChild(pCreator)
      author.value = ''

      let pForContent = document.createElement('p')
      pForContent.textContent = content.value
      newArticle.appendChild(pForContent)
      content.value = ''

      let divBtns = document.createElement('div')
      divBtns.classList.add('buttons')

      let deleteBtn = document.createElement('button')
      deleteBtn.textContent = 'Delete'
      deleteBtn.addEventListener('click', deleteArticle)
      deleteBtn.classList.add('btn', 'delete')
      divBtns.appendChild(deleteBtn)

      let archiveBtn = document.createElement('button')
      archiveBtn.textContent = 'Archive'
      archiveBtn.addEventListener('click', archiveTitle)
      archiveBtn.classList.add('btn', 'archive')
      divBtns.appendChild(archiveBtn)
      newArticle.appendChild(divBtns)
      postSection.appendChild(newArticle)

      function deleteArticle(ev) {
         newArticle.remove()
      }
      
      function archiveTitle(ev) {
         let ol = document.querySelector('ol')
         let li = document.createElement('li')
         li.textContent = h1.textContent
         ol.appendChild(li)
         let archiveSection = Array.from(document.querySelectorAll('ol li')).map(element => element.textContent)
         newArticle.remove()

         if(archiveSection.length > 0){
            archiveSection.sort((a,b)=>a.localeCompare(b))
            Array.from(ol.querySelectorAll('li')).forEach((li,index)=>{
               li.textContent = archiveSection[index]
            })
         }
      }

   }

}