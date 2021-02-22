const removeFromArray = function (array, ...elements) {
   console.log('original array: ' + array);
   for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < elements.length; j++) {
           
           if (array[i] === elements[j]) {
              
               array.splice(i, 1);
               i--;
            
           }
          
       }
   }
   return array;
 };
module.exports = removeFromArray
