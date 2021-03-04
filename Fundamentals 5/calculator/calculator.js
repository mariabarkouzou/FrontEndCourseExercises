function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(array) {
  return array.reduce((total, num) => {
    return total + num;
  }, 0);
}

function multiply(array) {
	return array.reduce((total, num) => {
		return total * num;
	  }, 1);
	}



function power(a , b) {
	return a ** b;
}

function factorial(num) {
	if (num === 0 || num === 1)
	  return 1;
	for (let i = num - 1; i >= 1; i--) {
	  num *= i;
	}
	return num;
  }

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
