function colorizeRows(){
    const rows = document.getElementsByTagName('tr')
    for(let i = 1;i<rows.length;i+=2){
        if(i % 2 !== 0){
            rows[i].style.backgroundColor = 'teal'
        }
    }
}