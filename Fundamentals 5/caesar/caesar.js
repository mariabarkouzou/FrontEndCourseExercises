const caesar = function (userInput, shiftNumber) {
  let result = "";
  for (let i = 0; i < userInput.length; i++) {

    //Negative Numbers

    if (shiftNumber < 0) {
        shiftNumber = 26 + (shiftNumber % 26);
      } 

    //UpperCase letters

     if (userInput.charCodeAt(i) >= 65 && userInput.charCodeAt(i) <= 90) {
      const charCode = userInput.charCodeAt(i);
      result += String.fromCharCode((charCode - 65 + shiftNumber) % 26 + 65); 

      // LowerCase letters

    } else if  (userInput.charCodeAt(i) >= 97 && userInput.charCodeAt(i) <= 122) {
      const charCode = userInput.charCodeAt(i);
      result += String.fromCharCode((charCode - 97 + shiftNumber) % 26 + 97); 

      // If it is not a letter let it pass
    } else {
        result += userInput.charAt(i);

    }

  }
  return result;
  
};

module.exports = caesar;

