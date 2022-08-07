import { getResult } from '../src/index.js';
import { isPrime, random100 } from '../src/functions.js';
import { primeTask } from '../src/gamequestions.js';

export default () => {
  const primeQuestion = () => random100();
  primeTask();
  getResult(primeQuestion, isPrime);
};
