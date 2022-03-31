function solve(num1,num2,operator){ 
    let result = 0
switch(operator){
    case '-':result = num1-num2,console.log(result);break;
    case'+':result = num1 +num2,console.log(result);break;
    case'*':result = num1*num2,console.log(result);break;
    case '/':result = num1/num2,console.log(result);break;
}
}
let list = [5,6,4,8]
remove = list.splice(1,1)
console.log(list);