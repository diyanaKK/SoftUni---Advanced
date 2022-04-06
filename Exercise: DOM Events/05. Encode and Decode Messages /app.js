function encodeAndDecodeMessages() {
   let inputTextArea = document.querySelectorAll('textarea')[0]
const buttonEncode = document.querySelectorAll('button')[0]
const buttonDecode = document.querySelectorAll('button')[1]
const receiveTextArea=document.querySelectorAll('textarea')[1]

buttonEncode.addEventListener('click',enCode)
buttonDecode.addEventListener('click',deCode)
   

function deCode(){
    
    let message = receiveTextArea.value
    message = message.split('')
    let arr = []
    for(let ch of message){
        let code = ch.charCodeAt()
        let newCh = String.fromCharCode(code-1)
        arr.push(newCh) 
    }
    message= arr.join('')
    receiveTextArea.value =message
}
   
function enCode(){
    
    let message = inputTextArea.value
    message = message.split('')
    let arrForNewMes = []
for(let ch of message){
    let code = ch.charCodeAt()
    let newCh = String.fromCharCode(code+1)
    arrForNewMes.push(newCh)
}
message = arrForNewMes.join('')
    receiveTextArea.value = message
    inputTextArea.value= ''    
}
}