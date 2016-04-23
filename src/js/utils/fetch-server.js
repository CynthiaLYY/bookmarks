import $ from '../jquery.min.js';
import Promise from 'promise';
import fs from 'fs';

export default class Server extends React.Component{
	fetch(file){
		let real = __dirname + file;
		let promise = new Promise(function(resole, reject){
			fs.readFile(real, 'utf8', function(err, res){
				if(err) reject(err);
				else resolve(res);
			});
		});
		return promise;
	}
}