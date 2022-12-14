import readlineSync from 'readline-sync';

export default (createTask, taskMessage) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anonymous',
  });
  console.log(`Hello, ${userName}!`);
  console.log(taskMessage);
  const gameRounds = 3;
  for (let i = 0; i < gameRounds; i += 1) {
    const [question, rightAnswer] = createTask();
    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer}`);
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
