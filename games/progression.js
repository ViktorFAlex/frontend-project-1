import { getResult } from '../src/index.js';
import { progression, random10 } from '../src/functions.js';
import { progressionTask } from '../src/gamequestions.js';

export default () => {
  const progressionQuestion = () => {
    const arr = [];
    const step = (random10() * (Math.round(Math.random()) ? 1 : -1));
    let start = random10();
    const num = random10() - 1;
    for (let i = 0; i <= 9; i += 1) {
      if (i === num) {
        arr.push('..');
      } else {
        arr.push(start);
      }
      start += step;
    }
    return arr.join(' ');
  };

  progressionTask();
  getResult(progressionQuestion, progression);
};
