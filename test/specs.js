const assert = require('assert');
const factory = require('../scripts/main.js');

describe('This is the test suite for the Wednesday', () => {

  describe('The convert function', () => {

    it('Should return the number came out of the string', () => {
      const actualResult = factory.convert('7');
      const expectedResult = 7;

      assert.strictEqual(actualResult, expectedResult);
    })
  })
})
