function solution(num){
    function add5(a,b){

return a + b
    }
    return add5.bind(this,num)
   
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));