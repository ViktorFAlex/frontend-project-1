import { getResult } from '../src/index.js';
import { calc, random10, randomOperator } from '../src/functions.js';
import { calcTask } from '../src/gamequestions.js';

export default () => {
  const calcQuestion = () => `${random10()} ${randomOperator()} ${random10()}`;

  calcTask();
  getResult(calcQuestion, calc);
};
