/*jshint esversion: 6 */
/* eslint-disable no-console */
var assert = require('assert');
var index = require('../src/index.js');

import {expect} from 'chai';
import jsdom from "jsdom";
const { JSDOM } = jsdom;

function getJSDOM(url){
	return JSDOM.fromURL(url).then(dom => {
		const window = dom.window;
		const document = window.document;
		const h1 = document.getElementsByTagName('h1')[0];
		console.log("DOM: " + dom);
		console.log("window: " + window);
		console.log("document: " + document);
		console.log("h1: " + document.querySelector("h1"));
		console.log("Searching for: " + h1.innerHTML);
	});
}

getJSDOM('http:localhost:3000').then(function() {

});

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

describe('Our first test', () => {
	it('should pass', () =>  {
		expect(true).to.equal(true);
	});
});






// describe('header', () => {
// 	it('Should say Users', () => {
// 		expect(dom.document.getElementsByTagName('h1')[0].innerHTML).to.equal('Users');
// 	});
// });

// function getSomeDOMVar(/*callback*/) {
// 	const jsdom = require("jsdom");
// 	const { JSDOM } = jsdom;

// 	// const dom = new JSDOM(indexHTML, {
// 	// 	runScripts: "dangerously",
// 	// 	resources: "usable"
// 	// });
// 	JSDOM.fromURL("http://localhost:3000").then(dom => {
// 		console.log(dom.serialize());
// 		const window = dom.window;
// 		const document = window.document;
// 		const body = document.body;

// 		console.log("DOM: " + dom);
// 		console.log("window: " + window);
// 		console.log("document: " + document);
// 		console.log("body: " + body);
// 		console.log("h1: " + document.querySelector("h1"));
// 		console.log("Searching for: " + document.getElementsByTagName('h1')[0].innerHTML);
// 	});
// 	// dom.window.returnData = function(results, cb) {
// 	// 	callback(results);
// 	// }
// }

// getSomeDOMVar();


