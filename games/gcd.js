import { getResult } from '../src/index.js';
import { gcd, random100 } from '../src/functions.js';
import { gcdTask } from '../src/gamequestions.js';

export default () => {
  const gcdQuestion = () => `${random100()} ${random100()}`;
  gcdTask();
  getResult(gcdQuestion, gcd);
};
