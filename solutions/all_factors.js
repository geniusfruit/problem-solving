// key is to remember to loop only till Sqrt of number

function findFactors(num) {
    var output = [1, num];

    for(var i = 2; i <= Math.sqrt(num); i++)
        num % i === 0 && output.push(i) && num != i*i && output.push(num/i);

    return output;
}

// console.log(findFactors(36));

module.exports = findFactors;