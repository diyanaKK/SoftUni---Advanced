function solve(pies,startPie,endPie){
let start = pies.indexOf(startPie)
let end = pies.indexOf(endPie)
let result = pies.slice(start,end+1)
return(result);

}
solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)