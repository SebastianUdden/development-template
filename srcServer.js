/*jshint esversion: 6 */
/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from './webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.get('/users', function(req, res) {
	// Hard coding for simplicity. Pretend that it hits a database.
	res.json([
		{"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
		{"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
		{"id": 3,"firstName":"Tina","lastName":"Fey","email":"tf@hotmail.com"},
		{"id": 4,"firstName":"Ygnvie","lastName":"Malmstieen","email":"guitarhero@rockstar.com"}
	]);
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
