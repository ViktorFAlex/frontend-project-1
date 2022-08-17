import getRandomNumber from './getRandomNumber.js';

export default (predicateFunction) => {
  const num = getRandomNumber(100, 1);
  const rightAnswer = predicateFunction(num) ? 'yes' : 'no';
  return [`${num}`, rightAnswer];
};
