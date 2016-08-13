//explanation
//https://www.youtube.com/watch?v=NJuKJ8sasGk

function coinChange(coins, sum){
    let MAX = 100000;
    var T = new Array(sum + 1).fill(MAX);
    var R = new Array(sum + 1).fill(-1);

    T[0] = 0;

    for(var j = 0; j < coins.length; j++) {
        let coin = coins[j];
        for(var i = 1; i < T.length; i++) {

            if( T[i] > (T[i - coin] + 1) ) {
                T[i] = T[i - coin] + 1;
                R[i] = j;
            }

        }
    }

    console.log('Needs: ' + T[T.length - 1] + ' coins');
    console.log('\n' + 'Table T: ', T);
    console.log('\n' + 'Table R: ', R);

    console.log('\n' + 'Coins are: ', getDenoms(coins, sum, R));


}

function getDenoms(coins, sum, R) {
    let index = R.length - 1;
    let denoms = [];
    while(index > 0){
        let coin = coins[R[index]];
        index = index - coin;
        denoms.push(coin);
    }
    return denoms;
}


//coinChange([7,2,3,6], 13);


module.exports = coinChange;