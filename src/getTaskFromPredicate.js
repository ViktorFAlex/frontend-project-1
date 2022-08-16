import getRandomNumber from './getRandomNumber.js';

export default (predicate) => {
  const num = getRandomNumber(100, 1);
  const rightAnswer = predicate(num) ? 'yes' : 'no';
  return [`${num}`, rightAnswer];
};
