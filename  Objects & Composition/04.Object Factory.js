function solve(library,orders){
const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
const printer ={name: 'ACME Printer',print}
const scanner = {name:  'Initech Scanner',scan}
const coppier ={name: 'ComTron Copier',print,scan}
const stereo = {name: 'BoomBox Stereo',play}

let result = []
result.push(printer)
result.push(scanner)
result.push(coppier)
result.push(stereo);


  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    },
  ];
  const products = factory(library, orders);
  console.log(products);

}
solve()  