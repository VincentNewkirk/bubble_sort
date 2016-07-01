var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var bubbleSort = require('./../script.js');


describe('Bubble sort algorithm', function () {

  describe('Sorting function', function(){
    it('Should be a function', function () {
      expect(bubbleSort).to.be.a('function');
    });
    it('Should order the array from smallest to largest number', function(){
      expect(bubbleSort([2,6,5,1,8])).to.deep.equal([1,2,5,6,8]);
      expect(bubbleSort([8,7,6,5,4,3,2,1])).to.deep.equal([1,2,3,4,5,6,7,8]);
      expect(bubbleSort([1,2,3,4,5,6])).to.deep.equal([1,2,3,4,5,6]);
      console.log([5,7,6,4,8,3,2,1]);
      console.log(bubbleSort([8,7,6,5,4,3,2,1]));
    });
  });
});