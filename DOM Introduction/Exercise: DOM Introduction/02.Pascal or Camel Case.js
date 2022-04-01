function solve() {
    const text = document.getElementById('text').value
    const convention = document.getElementById('naming-convention').value
    let result = ''
    const splited = text.split(' ')

    if (convention === 'Pascal Case') {
        for (let i = 0; i < splited.length; i++) {
            result += splited[i][0].toUpperCase() + splited[i].slice(1, splited[i].length).toLowerCase()
        }

    }
    else if (convention === 'Camel Case') {
        result += splited[0][0].toLowerCase() + splited[0].slice(1, splited[0].length).toLowerCase()


        for (let i = 1; i < splited.length; i++) {
            result += splited[i][0].toUpperCase() + splited[i].slice(1, splited[i].length).toLowerCase()
        }
    } else {
        result = 'Error!'
    }

    document.getElementById('result').textContent = result
}