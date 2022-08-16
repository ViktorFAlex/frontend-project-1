import createGame from '../index.js';
import getTaskFromPredicate from '../getTaskFromPredicate.js';

const isEven = (num) => num % 2 === 0;

const getIsEvenTask = () => getTaskFromPredicate(isEven);

const taskMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => {
  createGame(getIsEvenTask, taskMessage);
};
