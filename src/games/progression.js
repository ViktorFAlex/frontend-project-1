import createGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getProgressionDirection = () => (Math.round(Math.random()) ? 1 : -1);
const progressionElemsCount = 10;
const createProgression = () => {
  const progression = [];
  const start = getRandomNumber(10);
  const step = getRandomNumber(10, 1) * (getProgressionDirection());
  for (let i = 1; i <= progressionElemsCount; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getProgressionTask = () => {
  const progression = createProgression();
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
