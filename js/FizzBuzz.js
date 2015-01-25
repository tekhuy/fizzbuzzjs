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

FizzBuzz.prototype.upTo = function(last_number) {
	array = [];
	for (var i = 1; i <= last_number; i++) {array.push(this.say(i))};
	return array;
};

// Another way:
// for (i = 1; i <= 20; i++) {
//     if((i % 3 === 0) && (i % 5 === 0)) {
//         console.log("FizzBuzz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//             } else if (i % 3 === 0) {
//                 console.log("Fizz");
//                 } else {
//                     console.log(i);
//                     };
//     };
