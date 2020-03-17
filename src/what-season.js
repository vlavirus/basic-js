module.exports = function getSeason( date ) {
  if ( !date ) {
    return 'Unable to determine the time of year!';
  } else if ( !(date instanceof Date) ) {
    throw new Error;
  } else if ( date == Date()) {
    throw new Error;
  }

  let validDate = new Date(date);
  let month = date.getMonth();
  let season;

  if ( month > -1 && month < 2 || month == 11) {
    season = 'winter';
  } else if ( month >= 2 && month < 5 ) {
    season = 'spring';
  } else if ( month >= 5 && month < 8 ) {
    season = 'summer';
  } else if ( month >= 8 && month < 11 ) {
    season = 'autumn';
  }

  return season;
};
