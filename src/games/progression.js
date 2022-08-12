import createGame from '../index.js';
import { getRandomNumber, getRandomNumberFromOne } from '../getRandomNumber.js';

const getProgressionDirection = () => (Math.round(Math.random()) ? 1 : -1);

const getProgressionTask = () => {
  const elemsInProgression = 10;
  const start = getRandomNumberFromOne(10);
  const step = getRandomNumberFromOne(10) * (getProgressionDirection());
  const progression = [];
  for (let i = 1; i <= elemsInProgression; i += 1) {
    progression.push(start + step * i);
  }
  const missingNumberIndex = getRandomNumber(progression.length);
  const rightAnswer = String(progression[missingNumberIndex]);
  progression[missingNumberIndex] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const taskMessage = 'What number is missing in the progression?';

export default () => {
  createGame(getProgressionTask, taskMessage);
};
