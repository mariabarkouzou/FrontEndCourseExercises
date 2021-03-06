const getTheTitles = function(array) {
    const result =  array.map(element => {
        return element.title;
    })
   return result;
}

module.exports = getTheTitles;
