const pointsCounter = (responses, lives) => {
  let totalScore = 0;
  if (responses < 10) {
    totalScore = -1;
  } else {
    responses.forEach((answer) => {
      if (answer === correctAnswer) {
        totalScore += 100;
      }
      if (answer === fastAnswer) {
        totalScore += 50;
      }
      if (answer === slowAnswer) {
        totalScore -= 50;
      }
    });
    totalScore += lives * 50;
  }
  return totalScore;
};

export {pointsCounter};
