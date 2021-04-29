let fizzBuzz = function (min, max) {
  for (let count = min; count <= max; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      document.write("FizzBuzz");
    } else if (count % 3 === 0) {
      document.write("Fizz");
    } else if (count % 5 === 0) {
      document.write("Buzz");
    } else {
      document.write(count);
    }
  }
};
fizzBuzz(0, 99);
