/*jshint esversion: 6 */
/* eslint-disable no-console */

require('es6-promise').polyfill();
require('isomorphic-fetch');

export function getBody() {
	return get('//offline-news-api.herokuapp.com/stories');
}

export function getBodyMetaData() {
	return getMetaData('//offline-news-api.herokuapp.com/stories');
}

function get(url) {
	return fetch(url)
		.then(function(response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		});
}

function getMetaData(url) {
	return fetch(url)
		.then(function(response) {
			console.log("\n============================================== Printing MetaData ==============================================");
			console.log("Content-Type: " + response.headers.get('Content-Type'));
			console.log("Date: " + response.headers.get('Date'));
			console.log("Status: " + response.status);
			console.log("Status-text: " + response.statusText + "\n");
		});
}
