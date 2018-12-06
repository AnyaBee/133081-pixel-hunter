const pointsCounter = (responses, livesLeft) => {
  let totalScore = 50 * livesLeft;
  let correctAnswer = 100;
  let fastAnswer = 50;
  let slowAnswer = 50;
  if (responses.length < 10) {
    return -1;
  }

  responses.forEach((answer) => {
    if (answer.correct) {
      totalScore += correctAnswer;
    }
    if (answer.time > 25) {
      totalScore -= slowAnswer;
    }
    if (answer.time < 15) {
      totalScore += fastAnswer;
    }
  });
  return totalScore;
};

export {pointsCounter};
