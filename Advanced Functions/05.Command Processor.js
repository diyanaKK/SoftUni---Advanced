function solution(string){
    let result = ''
return{
    
    append(str){
result+=str

    },
    removeStart(num){
result = result.slice(num)

    },
    removeEnd(num){
result = result.substring(0,result.length-num)

    },
    print(){
        console.log(result);
    }

}
}
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
