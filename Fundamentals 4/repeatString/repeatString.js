const repeatString = function(str, times) {
    let result;
    if ( times > 0 ) {
      result = str.repeat(times);
    } else if ( times === 0 ) { 
      result = '';
    } else {
      result = "ERROR";
    }
    console.log(result);
    return result;
  }
module.exports = repeatString
