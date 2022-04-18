function solve(tickets, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
            this.price = price,
            this.status = status
        }
    }
    let array = []
    let regex = /(?<destination>[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*))*\|(?<price>\d+\.\d+)\|(?<status>[A-Za-z]+)/gm
    for (let line of tickets) {
        let matched = line.match(regex)[0]
        if (matched) {
            let [destination, price, status] = matched.split('|')
            let newTicket = new Ticket(destination, Number(price), status)
            
            array.push(newTicket)
        }

    }
   
let sortedArr = array.sort((a,b)=>{
    const acrit = a[criteria];
    const bcrit = b[criteria];
    if(criteria ===  'price'){
        return acrit - bcrit
    }else{
        return acrit.localeCompare(bcrit)
    }
})
//  sortedArr.forEach(({destination,price,status}) => console.log({destination,price,status}))
return sortedArr


}




solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
    )