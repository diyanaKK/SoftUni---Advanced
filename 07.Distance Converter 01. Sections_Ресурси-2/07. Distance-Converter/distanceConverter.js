function attachEventsListeners() {
    const input = document.querySelector('#inputDistance').value
    const btn = document.querySelectorAll('input[type="button"]')[0]

    btn.addEventListener('click',convert)
    let unit = document.getElementsBYId('inputUnits')
    const ratios = {
        km:1000,
        m:1,
        cm:0.01,
        mm:0.001,
        mi:1609.34,
        yrd:0.9144,
        ft:0.3048,
        in:0.0254
    }

function convert(input,unit){
    const inMeters = Number(input*ratios.m)
    return {
        m:inMeters,
        km:inMeters*ratios.km,
        cm:inMeters*ratios.cm,
        mm:inMeters*ratios.mm,
        mi:inMeters*ratios.mi,
        yrd:inMeters*ratios.yrd,
        ft:inMeters*ratios.ft,
        in:inMeters*ratios.in
    
    }
}






}