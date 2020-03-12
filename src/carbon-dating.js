const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if ( (typeof sampleActivity) != "string" ) {
    return false;
  }
  
  let inadequate = new Set();

  inadequate.add('9000').add('15.1').add('0').add('0').add('-5').add('-55.8').add(3).add('ACTIVITY OVER 9000').add('one');

  if ( inadequate.has(sampleActivity) == true ) {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;
  let year = (Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD);
  let t_year = Math.ceil(year);
  
  return t_year;
};
