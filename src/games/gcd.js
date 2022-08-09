import getResult from '../index.js';
import randomize from '../functions.js';

const findGcd = (num1, num2) => {
  const smallest = (num1 >= num2) ? num2 : num1;
  for (let i = smallest; i > 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const getGcdTask = () => {
  const num1 = randomize(100);
  const num2 = randomize(100);
  const question = `${num1} ${num2}`;
  const rightAnswer = findGcd(num1, num2);
  return [question, rightAnswer];
};

export default () => {
  console.log('Find the greatest common divisor of given numbers.');
  getResult(getGcdTask);
};
