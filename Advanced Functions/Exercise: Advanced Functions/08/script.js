function getArticleGenerator(articles) {
    let input = articles
    return function showNext(){
let newArticle = document.createElement('article')
if(input.length > 0){
    newArticle.textContent = input.shift()
    let div = document.getElementById('content')
    div.appendChild(newArticle)
    newArticle.style.display = 'block'
}
    }
}
