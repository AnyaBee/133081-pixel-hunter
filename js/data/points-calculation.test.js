import {pointsCounter} from './points-calculation';

import {expect} from 'chai';

describe(`pointsCounter`, () => {
  it(`Если игрок ответил меньше чем на 10 вопросов, то игра считается непройденой и функция должна вернуть -1`, () => {
    // assert.equal(-1, pointsCounter([]));
    expect(pointsCounter([], 3)).to.equal(-1);
  });

  it(`should return 1150 points when all answers are correct and usual timing, and all lives have been kept `, () => {
    expect(pointsCounter([
      {correct: true, time: 18},
      {correct: true, time: 16},
      {correct: true, time: 18},
      {correct: true, time: 19},
      {correct: true, time: 16},
      {correct: true, time: 19},
      {correct: true, time: 18},
      {correct: true, time: 14},
      {correct: true, time: 15},
      {correct: true, time: 17}], 3)).to.equal(1150);
  });

  it(`should return 1650 points when all answers are correct and fast timing, and all lives have been kept `, () => {
    expect(pointsCounter([
      {correct: true, time: 8},
      {correct: true, time: 9},
      {correct: true, time: 7},
      {correct: true, time: 5},
      {correct: true, time: 5},
      {correct: true, time: 8},
      {correct: true, time: 7},
      {correct: true, time: 5},
      {correct: true, time: 7},
      {correct: true, time: 9}], 3)).to.equal(1650);
  });

  it(`should return 600 points when all answers are correct and slow timing, and two lives are left `, () => {
    expect(pointsCounter([
      {correct: true, time: 34},
      {correct: true, time: 31},
      {correct: true, time: 30},
      {correct: true, time: 35},
      {correct: true, time: 33},
      {correct: true, time: 30},
      {correct: true, time: 32},
      {correct: true, time: 31},
      {correct: true, time: 34},
      {correct: true, time: 31}], 2)).to.equal(600);
  });

  it(`should return 950 points when all answers are correct, 5 slow, 2 fast, 3 usual, and two lives are left `, () => {
    expect(pointsCounter([
      {correct: true, time: 34},
      {correct: true, time: 31},
      {correct: true, time: 30},
      {correct: true, time: 35},
      {correct: true, time: 33},
      {correct: true, time: 7},
      {correct: true, time: 5},
      {correct: true, time: 17},
      {correct: true, time: 18},
      {correct: true, time: 19}], 2)).to.equal(950);
  });

});

