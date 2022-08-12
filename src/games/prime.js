import createGame from '../index.js';
import { getRandomNumberFromOne } from '../getRandomNumber.js';

const isPrime = (num) => {
  const start = Math.floor(num / 2);
  for (let i = start; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getIsPrimeTask = () => {
  const num = getRandomNumberFromOne(100);
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return [`${num}`, rightAnswer];
};

const taskMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => {
  createGame(getIsPrimeTask, taskMessage);
};
