function lockedProfile() {
    const users = Array.from(document.getElementsByClassName('profile'))

    for (let user of users) {
        const inputs = Array.from(user.querySelectorAll('input[type = "radio"]'))
        inputs.forEach((el) => {
            el.addEventListener('change', onChange)
        })
        const button = user.querySelector('button')
        button.addEventListener('click', onClick)
        function onChange(ev) {
            ev.target.checked = true
        }
        const [inputLock, inputUnlock] = user.querySelectorAll('input[type = "radio"]')

        function onClick(ev) {


            if (inputLock.checked) {
                return
            }
            if (inputUnlock.checked) {
                const info = ev.target.parentElement.querySelector('div')
                info.style.display = info.style.display == 'block' ? 'none' : 'block'
                ev.target.textContent = ev.target.textContent === 'Hide it' ? 'Show more' : 'Hide it'

            }
        }

    }

}