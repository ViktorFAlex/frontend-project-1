import createGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (num) => num % 2 === 0;

const getIsEvenTask = () => {
  const num = getRandomNumber(100, 1);
  const rightAnswer = isEven(num) ? 'yes' : 'no';
  return [`${num}`, rightAnswer];
};

const taskMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => {
  createGame(getIsEvenTask, taskMessage);
};
