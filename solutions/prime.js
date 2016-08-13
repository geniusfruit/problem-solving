function isPrime(n){
    
    if(n== 2 || n==3 || n==5)
        return true;
    else if ( n % 2 == 0 || n % 3 === 0 )
        return false;
    
    var limit = Math.sqrt(n);
    
    for(var i = 5; i < limit; i+=2){
        if(n % i === 0){
            return false;
        }
    }
    
    return true;
    
}

// console.log( isPrime(5421231734328) );

module.exports = isPrime;