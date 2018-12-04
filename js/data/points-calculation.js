const pointsCounter = (responses, livesLeft) => {
  let totalScore = 0;
  let correctAnswer = 100;
  // let fastAnswer = 50;
  // let slowAnswer = 50;
  let life = 50;
  let responsesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (responses < 10) {
    totalScore = -1;
  } else if (responses === responsesArray.length) {
    responsesArray.forEach((answer) => {
      if (answer) {
        totalScore += correctAnswer;
      }

      // if (fastAnswer) {
      //   totalScore += fastAnswer;
      // }
      //
      // if (slowAnswer) {
      //   totalScore -= slowAnswer;
      // }
    });

    totalScore += livesLeft * life;
  }
  return totalScore;
};

export {pointsCounter};
