import getResult from '../index.js';
import randomize from '../functions.js';

const getProgressionTask = () => {
  let elemOfProgression = randomize(10);
  const step = randomize(10) * (Math.round(Math.random()) ? 1 : -1);
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(elemOfProgression);
    elemOfProgression += step;
  }
  const missingNumber = randomize(10) - 1;
  const rightAnswer = progression[missingNumber];
  progression[missingNumber] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

export default () => {
  console.log('What number is missing in the progression?');
  getResult(getProgressionTask);
};
