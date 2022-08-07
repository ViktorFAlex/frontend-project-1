import { getResult } from '../src/index.js';
import { calc } from '../src/functions.js';
import { calcTask } from '../src/gamequestions.js';

export default () => {
  const random10 = () => Math.floor(Math.random() * 10 + 1);
  const randomOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[Math.floor(Math.random() * 3)];
  };

  const calcQuestion = () => `${random10()} ${randomOperator()} ${random10()}`;

  calcTask();
  getResult(calcQuestion, calc);
};
