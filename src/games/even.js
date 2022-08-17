import createGame from '../index.js';
import getTaskFromPredicateFunction from '../getTaskFromPredicateFunction.js';

const isEven = (num) => num % 2 === 0;

const getIsEvenTask = () => getTaskFromPredicateFunction(isEven);

const taskMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => {
  createGame(getIsEvenTask, taskMessage);
};
