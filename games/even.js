import { getResult } from '../src/index.js';
import { isEven, random100 } from '../src/functions.js';
import { isEvenTask } from '../src/gamequestions.js';

export default () => {
  const isEvenQuestion = () => `${random100()}`;
  isEvenTask();
  getResult(isEvenQuestion, isEven);
};
