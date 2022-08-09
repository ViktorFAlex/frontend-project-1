import getResult from '../index.js';
import randomize from '../functions.js';

const isEven = (num) => num % 2 === 0;

const getIsEvenTask = () => {
  const num = randomize(100);
  const rightAnswer = isEven(num) ? 'yes' : 'no';
  const question = `${num}`;
  return [question, rightAnswer];
};

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  getResult(getIsEvenTask);
};
