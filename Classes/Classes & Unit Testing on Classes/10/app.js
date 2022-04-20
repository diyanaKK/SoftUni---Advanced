
class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.phone = phone,
            this.email = email,
            this.online = false
    }
    get online() {
        return this._online = false
    }
    set online(value) {
        this._online = value
        console.log(this.online);
        let div = document.querySelector('.title')
        if (this.online) {
            div.classList.toggle('online')
        } else {
            div.classList.toggle('online')
        }
    }
    
    render(id) {
        let mainContainer = document.querySelector('#' + id)
        let name = document.querySelector('.title')
        let phone = document.querySelectorAll('div span')[0]
        let email = document.querySelectorAll('div span')[1]
        name.innerHTML = this.firstName + ' ' + this.lastName + '<button>&#8505;</button>'
        phone.textContent = this.phone
        email.textContent = this.email
    }
    
}



let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")];

contacts.forEach(c => c.render('main'));
setTimeout(() => contacts[1].online = true, 2000);
document.addEventListener('DOMContentLoaded', () => {
    let buttonForInfo = document.querySelector('.title button')
buttonForInfo.addEventListener('click', onClick)
function onClick(ev) {
    let infoBox = document.querySelector('.info')
    if (infoBox.style.display === 'none') {
        infoBox.style.display = 'block'
    } else {
        infoBox.style.display = 'none'
    }
}
})

