import Reflux from 'reflux';
import React from 'react';
import ReactDOM from 'react-dom';

var BookmarkActions = Reflux.createActions([
		"fetch",
		"search"
	]);

module.exports = BookmarkActions;