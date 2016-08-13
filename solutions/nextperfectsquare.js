// http://www.mycodeschool.com/problems/make-a-perfect-square

function makePerfect(n) {

    let limit = Math.round(Math.sqrt(n));
    let ans = 1;

    for(var i = 2; i <= limit; i++)
    {
        let exponent = 0;
        while(n % i === 0)
        {
            exponent++;
            n = n/i;
        }

        if(exponent % 2 === 1)
            ans*=i;
    }

    if(n!=1)
        ans*=n;

    return ans;
}

console.log(makePerfect(54));

module.exports = makePerfect;