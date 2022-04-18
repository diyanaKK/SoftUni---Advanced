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
    let regexForUsername = /[A-Za-z0-9]{3,20}/g
    let regexForPassword = /[\w]{5,15}/g
    let regexForEmail = /\w+@(\w+).+(\w+)$/g
    checkBox.addEventListener('change', checkBoxChange)
    submitBtn.addEventListener('click', submitClicked)
    let counter = 0

    function submitClicked(ev) {

        let matchForUsername = username.value.match(regexForUsername)
        if (matchForUsername) {
            if (username.value === matchForUsername[0]) {
                username.style.border = 'none'
                counter++
            }
        } else {
            username.style.borderColor = 'red'
        }

        let matchForPass = password.value.match(regexForPassword)
        if (matchForPass) {
            if (password.value === matchForPass[0]) {
                password.style.border = 'none'
                counter++
            }
        } else {
            password.style.borderColor = 'red'
        }

        if (confirmPassword.value === password.value) {
            confirmPassword.style.border = 'none'
            password.style.border = 'none'
            counter++
        } else {
            password.style.borderColor = 'red'
            confirmPassword.style.borderColor = 'red'
            
        }
        let matchForEmail = email.value.match(regexForEmail)
        if (matchForEmail) {
            if (email.value === matchForEmail[0]) {
                email.style.border = 'none'
                counter++
            }
        } else {
            email.style.borderColor = 'red'
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
        else if (companyInfo.style.display === 'none' && counter == 4) {
            div.style.display = 'block'
        } else {
            div.style.display = 'none'
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
