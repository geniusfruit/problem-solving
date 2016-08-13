function reverse(str) {
    let result = '', buffer = '';

    for(var i =0; i < str.length; i++) {
        if(str[i] != ' ') {
            buffer+=str[i];
        }
        else {
            result = buffer + result;
            buffer = '';
        }
    }

    return (buffer + ' ' + result);
}

module.exports = reverse;

