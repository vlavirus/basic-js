module.exports = function transform( arr ) {
    // throw 'Not implemented';
    if ( !Array.isArray(arr) ) {
        throw 'Not implemented';
    }

    function elementExist(arr) {
        if ( arr != undefined ) {
            return true;
        } else {
            return false;
        }
    }

    let next_array = [];
    let arr_length = arr.length;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] == '--discard-next' ) {
            i+=1;
        } else if ( arr[i] == '--discard-prev' ) {
            if ( elementExist(next_array[next_array.length - 1]) == true) {
                next_array.splice(next_array.length - 1, 1);
            }
        } else if ( arr[i] == '--double-next' ) {
            if ( elementExist(arr[i+1]) == true) {
                next_array.push(arr[i+1]);
            }
        } else if ( arr[i] == '--double-prev' ) {
            if ( elementExist(arr[i-1]) == true) {
                next_array.push(arr[i-1]);
            }
        } else if ( arr[i] == undefined || arr[i] == null || Array.isArray(arr[i]) == true ) {
        } else {
            next_array.push(arr[i]);
        }
    }
    return next_array;
}
