/*jshint esversion: 6 */
/* eslint-disable no-console */

/* Suggested code from Tutorial, not working due to fetch undefined */
 import {getUsers, deleteUser} from './api/userApi';

// // Populate table of users via API call
getUsers().then(result => {
	let usersBody = "";

	result.forEach(user => {
		usersBody+= `<tr>
			<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
			<td>${user.id}</td>
			<td>${user.firstName}</td>
			<td>${user.lastName}</td>
			<td>${user.email}</td>
		</tr>`;
	});
	if(global.document) {
		global.document.getElementById('users').innerHTML = usersBody;

		const deleteLinks = global.document.getElementsByClassName('deleteUser');
		Array.from(deleteLinks, link => {
			link.onclick = function(event) {
				const element = event.target;
				event.preventDefault();
				deleteUser(element.attributes["data-id"].value);
				const row = element.parentNode.parentNode;
				row.parentNode.removeChild(row);
			}
		});
	} else {
		console.log("Dont be hasty, global.document is not defined yet...");
	}
 }).catch(function(error){
	console.log(error);
});



/* Init code, not necessary but tied to test at the moment */
import './index.css';
import numeral from 'numeral';
var exports = module.exports = {};

const courseValue = numeral(1000).format('$0,0.00');
console.log(`\nI would pay ${courseValue} for this awesome course!\n`);
exports.courseValue = courseValue;


/* Example code, getting a proxy site */
// import {getBody, getBodyMetaData } from './api/apiTest';
// getBodyMetaData();
// getBody().then(result => {
// 	let articleBody = "";
// 	result.forEach(article => {
// 		articleBody+= `<tr>
// 			<td><a href="#" data-id="${article.guid}" class="deleteUser">Delete</a></td>
// 			<td>${article.guid}</td>
// 			<td>${article.author}</td>
// 			<td>${article.title}</td>
// 			<td>${article.date}</td>
// 			<td>${article.body}</td>
// 		</tr>`;
// 	});
// 	global.document.getElementById('articles').innerHTML = articleBody;
// });
