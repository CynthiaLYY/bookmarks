import $ from '../jquery.min.js';
import Promise from 'promise';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Utils extends React.Component{
	static fetch(url){
		let promise = new Promise(function(rsolve, reject){
			$.get(url).done(resolve).fail(reject);
		});
		return promise;
	}
}