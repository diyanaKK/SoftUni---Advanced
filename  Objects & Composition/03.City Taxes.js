function solve(name,population,treasury){
    let obj = {
        name:name,
        population:population,
        treasury:treasury,
        taxRate:10,
        collectTaxes() {
         this.treasury+=this.population*this.taxRate},
         applyGrowth(percentage){
             Math.floor(this.population+=Math.floor(this.population*percentage/100))} ,
             applyRecession(percentage){
                 this.treasury-= Math.ceil(this.treasury*percentage/100)
             }  
    }
    return obj
}
    const city =
obj.collectTaxes();
console.log(obj.treasury);
obj.applyGrowth(5);
console.log(obj.population);
    
    
    solve('Tortuga',
    7000,
    15000)