import createGame from '../index.js';
import { getRandomNumber, getRandomNumberFromOne } from '../getRandomNumber.js';

const randomizeOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(operators.length)];
};

const calcResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return +num1 + +num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Not appropriate operator');
  }
};
const taskMessage = 'What is the result of the expression?';

const getCalcTask = () => {
  const num1 = getRandomNumberFromOne(10);
  const num2 = getRandomNumberFromOne(10);
  const operator = randomizeOperator();
  const rightAnswer = String(calcResult(num1, num2, operator));
  return [`${num1} ${operator} ${num2}`, rightAnswer];
};

export default () => {
  createGame(getCalcTask, taskMessage);
};
