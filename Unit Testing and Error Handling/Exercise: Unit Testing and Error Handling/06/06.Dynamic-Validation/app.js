function validate() {
    let input = document.getElementById('email')
    let patern= /\w+@(\w+).(\w+)$/g
   
    input.addEventListener('change',whenChange)

    function whenChange(ev){
        if(!patern.test(input.value)){
            input.classList.add('error')
        }else{
            input.removeAttribute('class')
        }
    }
}