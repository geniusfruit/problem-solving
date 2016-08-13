function rotate(matrix, clockwise) {

    var layer, y, temp;

    for(layer = 0; layer < matrix.length / 2; layer++) {

        for(y = layer; y < matrix.length - 1 - layer; y++) {

            temp = matrix[layer][y];

            if(clockwise) {

                matrix[layer][y] = matrix[matrix.length - 1 - y][layer];

                matrix[matrix.length - 1 - y][layer] = matrix[matrix.length - 1 - layer][matrix.length - 1 - y];

                matrix[matrix.length - 1 - layer][matrix.length - 1 - y] = matrix[y][matrix.length - 1 - layer];

                matrix[y][matrix.length - 1 - layer] = temp;

            }
            else {
                matrix[layer][y] = matrix[y][matrix.length - 1 - layer];

                matrix[y][matrix.length - 1 - layer] = matrix[matrix.length - 1 - layer][matrix.length - 1 - y];

                matrix[matrix.length - 1 - layer][matrix.length - 1 - y] = matrix[matrix.length - 1 - y][layer];

                matrix[matrix.length - 1 - y][layer] = temp;
            }
        }

    }

    return matrix;

}


// console.log(rotate([[0,1],[2,3]], true));
// console.log(rotate([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]], false));

module.exports = rotate;