function attachGradientEvents() {
const element = document.getElementById('gradient').addEventListener('mousemove',onMove)
const output = document.getElementById('result')
function onMove(ev){
    const box = ev.target;
    const offset =Math.floor(ev.offsetX/box.clientWidth*100);
    output.textContent=`${offset}%`
}
}