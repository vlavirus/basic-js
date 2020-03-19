let tableVinger = new Map ([['a', 0],['b', 1],['c', 2],['d', 3],['e', 4],['f', 5],['g', 6],['h', 7],['i', 8], ['j', 9], ['k', 10],['l', 11]
, ['m', 12], ['n', 13], ['o', 14], ['p', 15], ['q', 16], ['r', 17], ['s', 18], ['t', 19], ['u', 20], ['v', 21], ['w', 22], ['x', 23],['y', 24], ['z', 25]]);

let reversetableVinger = new Map ([[0, 'a'],[1, 'b'],[2, 'c'],[3, 'd'],[4, 'e'],[5, 'f'],[6, 'g'],[7, 'h'],[8, 'i'], [9, 'j'], [10, 'k'],[11, 'l']
, [12, 'm'], [13, 'n'], [14, 'o'], [15, 'p'], [16, 'q'], [17, 'r'], [18, 's'], [19, 't'], [20, 'u'], [21, 'v'], [22, 'w'], [23, 'x'],[24, 'y'], [25, 'z']]);

class VigenereCipheringMachine {
    constructor(direction=true){
        this.direction = direction;
    }
    
    encrypt(text, keyWord) {
        if ( keyWord == undefined || (typeof text) != "string" || !text ) {
            throw new Error;
        }

        let newText = text.toLowerCase();
        let newkeyWord = keyWord.toLowerCase();
        let answer = '';
        let indexText;
        let indexKeyword;
        let indexCryp;

        for ( let i = 0, j = 0; i < newText.length; i++ ) {
            if ( tableVinger.get(newkeyWord[j]) == undefined ) {
                j = 0;
            }
            if ( tableVinger.get(newText[i]) == undefined ) {
                answer += newText[i];
            } else {

            indexCryp = Number(tableVinger.get(newText[i]) + tableVinger.get(newkeyWord[j]));
            if ( indexCryp > 25 ) {
                indexCryp -= 26;
            }
                answer += reversetableVinger.get(indexCryp);
                j++;
            }
        }
        return this.direction ? answer.toUpperCase() : answer.split('').reverse().join('').toUpperCase(); 
    }

    decrypt(text, keyWord) {
        if ( keyWord == undefined || (typeof text) != "string" || !text ) {
            throw new Error;
        }

        let newText = text.toLowerCase();
        let newkeyWord = keyWord.toLowerCase();
        let answer = '';
        let indexText;
        let indexKeyword;
        let indexCryp;

        for ( let i = 0, j = 0; i < newText.length; i++) {
            if ( tableVinger.get(newkeyWord[j]) == undefined ) {
                j = 0;
            }
            if ( tableVinger.get(newText[i]) == undefined ) {
                answer += newText[i];
            } else {

            indexCryp = tableVinger.get(newText[i]) + 26 - tableVinger.get(newkeyWord[j]);
            if ( indexCryp > 25 ) {
                indexCryp -= 26;
            }
                answer += reversetableVinger.get(indexCryp);
                j++
                
            }
        }
        return this.direction ? answer.toUpperCase() : answer.split('').reverse().join('').toUpperCase();
    }
}

module.exports = VigenereCipheringMachine;