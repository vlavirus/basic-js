module.exports = function createDreamTeam( members ) {

  if ( !Array.isArray(members)) {
    return false;
  }

  let answer = [];
  let memberLength = members.length;
  
  for ( let i = 0; i < memberLength; i++ ) {
    if ( (typeof members[i]) == 'string' ) {
        let name = members[i].toUpperCase().trim();
      answer.push(name[0]);
    }
  }
  return answer.sort().join('');
};