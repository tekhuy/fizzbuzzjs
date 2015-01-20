var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0);
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return (number % 15 === 0);
};

FizzBuzz.prototype.say = function(number) {
	if(this.isDivisibleByFifteen(number)){
		return "FizzBuzz";
	}else if (this.isDivisibleByFive(number)) {
		return "Buzz";
	}else if (this.isDivisibleByThree(number)){
		return "Fizz";
	}else {
		return number;
	}
};