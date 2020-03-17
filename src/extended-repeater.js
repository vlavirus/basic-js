module.exports = function repeater( str, options) {
    let repeatTimes = options.repeatTimes;
    let separator;
    let addition;
    let newAddition;
    let additionSeparator;
    let additionRepeatTimes = options.additionRepeatTimes;

    if ( !(options.separator)) {
        separator = '+';
    } else {
        separator = (''+options.separator);
    }
    if ((options.addition) === undefined && typeof options.addition !== 'string') {
        newAddition = '';
        addition = '';
    } else {
        addition = (''+options.addition);
        newAddition = (''+options.addition);
    }
    if (!(options.additionSeparator)) {
        additionSeparator = '';
    } else {
        additionSeparator = (''+options.additionSeparator);
    }
    
    for ( let i = 0; i < additionRepeatTimes - 1; i++ ) {
        newAddition += additionSeparator + addition;
    }

    let answer = (''+str)+newAddition;

    for ( let i = 0; i < repeatTimes - 1; i++) {
        answer += separator+str+newAddition;;
    }
    return answer;
};
  