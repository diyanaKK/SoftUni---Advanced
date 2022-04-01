function extract(content){
const text = document.getElementById(content).textContent
let regex = /\((.+?)\)/g
let matched = text.match(regex)

return matched.join('; ')

}