function dfs(obj) {

    if(typeof obj === 'object') {
        for(var x in obj) {
            console.log('Visiting Node: ', x);
            if(obj.hasOwnProperty(x))
                dfs(obj[x]);
        }
    }
    else {
        console.log('Visiting Leaf');
    }

}

//console.log(dfs({a: {b: 'hi'}}));

module.exports = dfs;