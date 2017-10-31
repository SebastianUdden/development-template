/*jshint esversion: 6 */
var assert = require('assert');
var index = require('../src/index.js');

describe('Basic Mocha Test', function() {
	it('Should throw errors', function() {
		assert.equal(3,3);
	});
});

describe('Index', function() {
	it('Should return true if price is a thousand', function() {
		assert.equal('$1,000.00', index.courseValue);
	});
});
