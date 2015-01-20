describe("FizzBuzz", function() {

  var fizzbuzz;

  describe("knows when a number", function() {

    it("is divisible by 3", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it("is NOT divisible by 3", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it("is divisible by 5", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it("is NOT divisible by 5", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false)
    });

    it("is divsible by 15", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true)
    });

    it("is NOT divisible by 15", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false)
    });

  });

  describe("FizzBuzz says", function() {

    it("'Fizz' when a number is divisible by 3", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.sayFizz(3)).toBe("Fizz")
    });

    it("'Buzz' when a number is divisible by 5", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.sayBuzz(5)).toBe("Buzz")
    });

  });

});