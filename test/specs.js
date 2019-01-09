const assert = require('assert');
const factory = require('../scripts/index.js');

describe('This is the test suite for the Wednesday', () => {

  describe('The convert function', () => {

    it('Should return the number came out of the string', () => {
      const actualResult = factory.convert('7');
      const expectedResult = 7;

      assert.strictEqual(actualResult, expectedResult);
    })

  })

  describe('Reversing the string function', () => {

    it('Should return the string in reverse mode', () => {
      const actualResult = factory.reverse('jake');
      const expectedResult = 'ekaj';

      assert.strictEqual(actualResult, expectedResult);
    })

    it('Should return false in case of not a string', () => {
      const actualResult = factory.reverse(5);
      const expectedResult = false;

      assert.strictEqual(actualResult, expectedResult);
    })

  })

  describe('Return the info about a person', () => {

    it('Should return the person object', () => {
      const actualResult = factory.returnInfo({firstName: 'Kostas', lastName: 'Jake', age: 28});
      const expectedResult = {firstName: 'Kostas', lastName: 'Jake', age: 28};

      assert.deepEqual(actualResult, expectedResult);
    })
  })

  describe('Return info about dci_relatives', () => {

    it('Should return dci_relatives object', () => {
      const actualResult = factory.returnInfo(factory.ali);
      const expectedResult = {firstName: 'Ali', lastName: 'Pudina', role: 'student'};

      assert.deepEqual(actualResult, expectedResult);
    })
  })

  describe('Return info about dci_relatives', () => {

    it('Should return dci_relatives object', () => {
      const actualResult = factory.returnInfo(factory.kostas);
      const expectedResult = {firstName: 'Kostas', lastName: 'Diakogiannis', role: 'trainer'};

      assert.deepEqual(actualResult, expectedResult);
    })
  })

  describe('The goals ratio function', () => {

    it('should return the goals ratio function of the player', () => {

      const actualResult = factory.kyriakos.getGoalsRatio();
      const expectedResult = 0.1;

      assert.strictEqual(actualResult, expectedResult);
    })
  })

})
