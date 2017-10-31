/*jshint esversion: 6 */
/* eslint-disable no-console */

import './index.css';
import numeral from 'numeral';
var exports = module.exports = {};

const courseValue = numeral(2000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);
exports.courseValue = courseValue;
