import getResult from '../index.js';
import randomize from '../functions.js';

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
  const num = randomize(100);
  const question = `${num}`;
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  getResult(getIsPrimeTask);
};
