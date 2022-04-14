function solve(input) {
    let uriRegex = /\.*[A-z0-9]+\.*[A-z0-9]*\.*[A-z0-9]*/gm
    let messageR = /[^\\<\>\&\'\"]+/gm
    let arrMethod = ['GET', 'POST', 'DELETE', 'CONNECT']
    let arrVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']

    function isGetValid(string) {
        if(string){
            return arrMethod.includes(string)
        }
        
    }

    function isURIValid(string) {
        if(string === '*'){
            return true
        }
        let matched = string.match(uriRegex)
        if (matched[0] === string) {   
            return true
        }
        return false
    }

    function isValidVersion(string) {
        return arrVersion.includes(string)
    }


    function isMssageValid(string) {
        if(string === ''){
            return true
        }
        let matched = string.match(messageR)
        if ( matched[0] === string) {
            return true
        }
        return false
    }

if(input.uri){
    
}





if( isGetValid(input.method)&& isURIValid(input.uri)&& isValidVersion(input.version)&& isMssageValid(input.message)){
    return input

}else{
     if(!isGetValid(input.method)){
        throw new Error(`Invalid request header: Invalid Method`)
     }else if(!isURIValid(input.uri)){
        throw new Error(`Invalid request header: Invalid URI`)
    }else if(!isValidVersion(input.version)){
        throw new Error(`Invalid request header: Invalid Version`)
    }else if(!isMssageValid(input.message)){
        throw new Error(`Invalid request header: Invalid Message`)
    }
}

}

// console.log(solve({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }))

console.log(solve({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
}))