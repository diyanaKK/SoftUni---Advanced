function validate() {
    let username = document.querySelector('#username')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let confirmPassword = document.querySelector('#confirm-password')
    let checkBox = document.querySelector('#company')
    let companyNumber = document.querySelector('#companyNumber')
    let companyInfo = document.querySelector('#companyInfo')
    let submitBtn = document.getElementById('submit')
    let div = document.querySelector('#valid')
    let regexForUsername = /[\w+]{3,20}$/g
    let regexForPassword = /[A-Za-z0-9_]{5,15}$/g
    let regexForEmail = /\w+@(\w+).(\w+)$/g
    checkBox.addEventListener('change', checkBoxChange)
    submitBtn.addEventListener('click', submitClicked)
    let counter = 0

    function submitClicked(ev) {
        

        if (!regexForUsername.test(username.value)) {
            username.style.borderColor = 'red'

        } else {
            username.style.border = 'none'
            
            counter++
        }
        if (!regexForPassword.test(password.value)) {
            password.style.borderColor = 'red'

        } else {
            password.style.border = 'none'
            counter++
        }
        if (confirmPassword.value === password.value) {
            confirmPassword.style.border = 'none'
            counter++
        } else {
            confirmPassword.style.borderColor = 'red'
            counter++
        }
        if (!regexForEmail.test(email.value)) {
            email.style.borderColor = 'red'
        } else {
            email.style.border = 'none'
            counter++
        }
        if (companyNumber) {
            if (!(companyNumber.value >= 1000 && companyNumber.value <= 9999)) {
                companyNumber.style.borderColor = 'red'
            } else {
                companyNumber.style.border = 'none'
                counter++
            }
        }
        if (counter === 5) {
            div.style.display = 'block'
        }
        else if(companyInfo.style.display === 'none' && counter == 4){
            div.style.display = 'block'
        }else{
            div.style.display= 'none'
        }
    }

    function checkBoxChange(ev) {
        let isCompany = ev.currentTarget.checked
        if (isCompany) {
            companyInfo.style.display = 'block'
        } else {
            companyInfo.style.display = 'none'
        }
        
    }
}
