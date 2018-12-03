import pointsCounter from './points-calculation';

import {expect} from 'chai';

let totalScore = 0;

describe(`Function that calculates the amount of points user can get`, () => {

  it(`should return -1 if user did not respond to all questions `, () => {
    expect(totalScore).to.equal(-1);
  });
});

