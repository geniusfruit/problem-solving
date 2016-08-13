function anagram(strA, strB) {
    
    var fmap = {};
    
    strA.split('').map((i)=>fmap[i] ? (fmap[i]+=1) : (fmap[i] = 1));
    
    for(var i = 0; i < strB.length; i++) {
        var char = strB[i];
        if(!fmap[char])
            return false;
        else
            fmap[char]-= 1;
    }
    
    for(var ch in fmap) {
        if(fmap.hasOwnProperty(ch))
            if(fmap[ch] != 0)
                return false;
    }

    return true;
}

//console.log( anagram('jerk', 'kjer') );

module.exports = anagram;