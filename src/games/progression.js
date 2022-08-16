import createGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getProgressionDirection = () => (Math.round(Math.random()) ? 1 : -1);

const getProgressionSpreading = () => {
  const step = getRandomNumber(10, 1) * (getProgressionDirection());
  const start = getRandomNumber(10);
  return [start, step];
};

const createProgression = (elemsCount = 10) => {
  const [start, step] = getProgressionSpreading();
  const progression = [];
  for (let i = 0; i < elemsCount; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getProgressionTask = () => {
  const progression = createProgression();
  const missingNumberIndex = getRandomNumber(progression.length, 0);
  const rightAnswer = String(progression[missingNumberIndex]);
  progression[missingNumberIndex] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const taskMessage = 'What number is missing in the progression?';

export default () => {
  createGame(getProgressionTask, taskMessage);
};
