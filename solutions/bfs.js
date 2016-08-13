function bfs(obj) {
    
    // maintains list of nodes for next traversals
    var queue = [];

    queue.push(obj);

    while(queue.length) {
        
        var current = queue.shift();

        if(typeof current === 'object') {
            for(var x in current) {
                console.log('Visiting Node:', x);
                queue.push(current[x]);
            }
        }
        else {
            console.log('Visiting leaf');
        }
    }

}

//console.log(bfs({a: {b: 'hi'}}));

module.exports = bfs;