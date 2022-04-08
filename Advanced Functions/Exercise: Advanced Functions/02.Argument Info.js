function solve(){
    let array = arguments
    let obj = {}
  Array.from(arguments).forEach((el)=>{
      let type = typeof el 
      console.log(`${type}: ${el}`);


      if(!obj[type]){
        obj[type]=0;
      }
      obj[type]++
  })
  Object.entries(obj).sort((a,b)=> b[1]-a[1]).forEach((el)=> console.log(`${el[0]} = ${el[1]}`))


}
solve('cat', 42, 56, 67,145, function () { console.log('Hello world!'); })