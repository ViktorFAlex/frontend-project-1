import createGame from '../index.js';
import { getRandomNumberFromOne } from '../getRandomNumber.js';

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
  const num1 = getRandomNumberFromOne(100);
  const num2 = getRandomNumberFromOne(100);
  const rightAnswer = String(findGcd(num1, num2));
  return [`${num1} ${num2}`, rightAnswer];
};

const taskMessage = 'Find the greatest common divisor of given numbers';
export default () => {
  createGame(getGcdTask, taskMessage);
};
