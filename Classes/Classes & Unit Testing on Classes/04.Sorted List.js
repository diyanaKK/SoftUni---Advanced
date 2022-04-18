class List{
    constructor(){
        this.list = []
        this.size = 0
    }
  
    sorting(){
        this.list.sort((a,b)=>a-b)
    }
   add(element){
    this.list.push(element)
    this.sorting()
    this.size++
   }
   remove(index){
       if(index>= 0 && index <= this.size-1){
        this.list.splice(index,1)
        this.sorting()
        this.size--
       } 
         
   }
   get(index){
       if(index>= 0 && index <= this.size-1){
        return this.list[index]

       }
   }
    
}
let list = new List();
list.add(0);
list.add(1);
list.add(2);
list.add(3);
list.add(4);
console.log(list.remove(0)); 
console.log(list.get(list.size-1));
