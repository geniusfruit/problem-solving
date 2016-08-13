function multiply(m1, m2) {
    var m1_rows = m1.length, m1_cols = m1[0].length;
    var m2_rows = m2.length, m2_cols = m2[0].length;

    var result = new Array(m1_rows);
    for(var i = 0; i < m1_rows; i++) {
        result[i] = new Array(m2_cols);
        for (var j = 0; j < m2_cols; j++) {
            result[i][j] = 0;
            for(var k = 0; k < m1_cols; k++)
                result[i][j] += m1[i][k] * m2[k][j];
        }
    }
    return result;
}

function matrix(arr, row, col) {
    var result = [], k = 0;

    for(var i = 0; i < row; i++){
        result[i] = [];
        for(var j = 0; j < col; j++, k++)
            result[i][j] = arr[k];
    }

    return result;
}
//
// var a = matrix([1,2,3,4,5,6], 3, 2);
// var b = matrix([1,2,3,4,5,6], 2, 3);

// multiply(a, b);

module.exports = {
    matrix,
    multiply
};
