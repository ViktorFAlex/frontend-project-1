import createGame from '../index.js';
import { getRandomNumberFromOne } from '../getRandomNumber.js';

const isEven = (num) => num % 2 === 0;

const getIsEvenTask = () => {
  const num = getRandomNumberFromOne(100);
  const rightAnswer = isEven(num) ? 'yes' : 'no';
  return [`${num}`, rightAnswer];
};

const taskMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => {
  createGame(getIsEvenTask, taskMessage);
};
