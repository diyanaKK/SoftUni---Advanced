function createSortedList() {
    const something = {
        list: [],
        add: function (num) {
            this.list.push(num)
            this.sortArray()
            this.size++
            
           
        },
        size:0,
        sortArray: function () {
            this.list = this.list.sort((a, b) => a - b)
        },
        remove: function (index) {
            if  (index > -1 && index < this.size) {
                let removeEl = this.list.splice(index, 1)
                this.sortArray()
               this.size--
              
            }
        },
        get:function(index){   
                return this.list[index]
            
        }
        
    }

    return something;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));



