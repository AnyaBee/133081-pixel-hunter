import {pointsCounter} from './points-calculation';

import {expect} from 'chai';

let totalScore = 0;

describe(`Function that calculates the amount of points user can get`, () => {

  it(`should return -1 if user did not respond to all questions`, () => {
    totalScore = pointsCounter(5);
    expect(totalScore).to.equal(-1);
  });

  it(`should return 1150 points if all answers are correct and all lives have been kept`, () => {
    totalScore = pointsCounter(10, 3);
    expect(totalScore).to.equal(1150);
  });


  // it(`should return x points when all answers are correct and fast and all lives have been kept `, () => {
  //   totalScore = pointsCounter(10, 3);
  //   expect(totalScore).to.equal(1150);
  // });


  // it(`should return x points when all answers are correct and fast and all lives have been kept `, () => {
  //   totalScore = pointsCounter(10, 3);
  //   expect(totalScore).to.equal(1150);
  // });
  //
  // it(`should return x points when all answers are correct and slow and all lives have been kept `, () => {
  //   totalScore = pointsCounter(10, 3);
  //   expect(totalScore).to.equal(1150);
  // });
  //
  // it(`should return x points when all answers are correct, 4 fast and 2 slow, the remaining are usual,
  // all lives have been kept `, () => {
  //   totalScore = pointsCounter(10, 3);
  //   expect(totalScore).to.equal(1150);
  // });
});

