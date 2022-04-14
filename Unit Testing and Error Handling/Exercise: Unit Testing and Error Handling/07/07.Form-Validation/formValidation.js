function validate() {
   let username = document.querySelector('#username')
   let email = document.querySelector('#email')
   let password = document.querySelector('#password')
   let confirmPassword = document.querySelector('#confirm-password')
   let company = document.querySelector('#company')
   let companyNumber = document.querySelector('#companyNumber')
let submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click',submitClicked)
let regexForUsername = /[A-Za-z0-9]{3,20}/gm
let regexForPassword = /[\w+]{5,15}/gm


function submitClicked(ev){
    if(!regexForUsername.test(username.value)){
username.style
    }
}

}
