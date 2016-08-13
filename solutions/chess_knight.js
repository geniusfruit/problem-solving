var visits = {};

function getNextMoves(pos) {
    var x = pos.location.x, y = pos.location.y;
    return [
        x <= 6 && y <= 5 ? {location: {x: x+1, y: y+2}} : null,
        x <= 6 && y >= 2 ? {location: {x: x+1, y:  y-2}} : null,
        x >= 1 && y <= 5 ? {location: {x: x-1, y:  y+2}} : null,
        x >= 1 && y >= 2 ? {location: {x: x-1, y:  y-2}} : null,
        x <= 5 && y >= 1 ? {location: {x: x+2, y:  y-1}} : null,
        x <= 5 && y <= 6 ? {location: {x: x+2, y:  y+1}} : null,
        x >= 2 && y >= 1 ? {location: {x: x-2, y:  y-1}} : null,
        x >= 2 && y <= 6 ? {location: {x: x-2, y:  y+1}} : null,
    ].filter(function (item) {
        return item!=null && !visits[item.location.x + ' ' + item.location.y];
    }).map(function (item) {
        var path = ((pos.path || '') + ' ' + (pos.location.x + ',' +pos.location.y)).trim();
        return Object.assign({
            path: path,
            dist: path.split(' ').length
        }, item);
    });
}

function getMoves(srcPos, destPos, dist) {

    if(srcPos.location.x === destPos.location.x && srcPos.location.y === destPos.location.y)
        return { path: '', dist: 0};

    var queue = getNextMoves(srcPos), current;
    visits[srcPos.location.x +' ' +srcPos.location.y] = true;

    while (queue.length) {
        current = queue.shift();

        if(current.location.x === destPos.location.x && current.location.y === destPos.location.y)
            return current;

        visits[current.location.x + ' ' + current.location.y] = true;

        getNextMoves(current).map(function (item) {
            queue.push(item);
        });
    }

}

// var result = getMoves({location: {x: 1, y: 2}}, {location: {x: 6, y: 2}}, 1);
// console.log(result);


module.exports = getMoves;