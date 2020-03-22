module.exports = function calculateHanoi (disksNumber, turnsSpeed ) {
    let answer = {}
    let turns = Math.pow(2, disksNumber);
    let seconds = (turnsSpeed / 3600);
    
    answer.turns = turns;
    answer.seconds = turns / seconds;
    
    return answer;   // remove line with error and write your code here
}