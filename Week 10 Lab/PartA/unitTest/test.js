var assert = require('assert');
var linear = require("../linearPoint.js");
describe('Tests for function one', () => {
    describe('Test Case 1 #fnOne()',() => {
        it('should return 6', () => {
            assert.equal(linear(2,1,4), 6);
        });
    });
    describe('Test Case #fnOne()', () => {
        it('should return 3', () => {
            assert.equal(linear(2,0,4), 4);
        });
    });
    describe('Test Case #fnOne()', () => {
        it('should return 2', () => {
            assert.equal(linear(2,-1,4), 2);
        });
    });
});