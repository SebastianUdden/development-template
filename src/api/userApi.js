/*jshint esversion: 6 */
/* eslint-disable no-console */

require('es6-promise').polyfill();
require('isomorphic-fetch');

export function getUsers() {
	return get('http://localhost:3001/users');
}

export function deleteUser(id) {
	return del(`http://localhost:3001/users/${id}`);
}

function get(url) {
	return fetch(url)
		.then(function(response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		})
		.catch(function(error) {
			console.log(error);
		});
}

function del(url) {
	const request = new Request(url, {
		method: 'DELETE'
	});

	return fetch(request).then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	})
	.catch(function(error) {
		console.log(error);
	});
}






/* Suggested code from Tutorial, not working due to fetch undefined */

// require('whatwg-fetch');
// export function getUsers() {
// 	return get('users');
// }
// function get(url) {
// 	// console.log(fetch); // eslint-disable-line no-console
// 	return fetch(url).then(onSuccess, onError);
// }
// function onSuccess() {
// 	return Response.json();
// }
// function onError(error) {
// 	console.log(error); // eslint-disable-line no-console
// }
