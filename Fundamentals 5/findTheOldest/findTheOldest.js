let findTheOldest = function(array) {
 array.sort((a, b) => a.yearOfBirth > b.yearOfBirth ? 1 : -1 );
return array[0];

}; 

module.exports = findTheOldest

