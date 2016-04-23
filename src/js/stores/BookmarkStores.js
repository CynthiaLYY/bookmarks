import Reflux from 'reflux';
import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkActions from '../actions/BookmarkActions.js';
import $ from '../jquery.min.js';
import Utils from '../utils/fetch-client';

/*export default class BookmarkStores extends React.Component{
	componentDidMount(){
		listenables = [BookmarkActions];
	}

	init(){
		this.onFetch();
	}
	onFetch(){
		let self = this;
		Client.fetch('../../../data/bookmarks.json').then(function(bookmarks){
			self.trigger({
				bookmarks: bookmarks,
				match: ''
			});
		});
	}
	onSearch(keyword){
		let self = this;
		Client.fetch('/bookmarks?keyword='+keyword).then(function(bookmarks){
			self.trigger({
				bookmarks: bookmarks,
				match: keyword
			});
		});
	}
}*/

var BookmarkStore = Reflux.createStore({
	listenables: [BookmarkActions],

	init: function() {
		this.onFetch();
	},

	onFetch: function() {
		var self = this;
		Utils.fetch('./data/bookmarks').then(function(bookmarks) {
			self.trigger({
				data: bookmarks,
				match: ''
			});
		});
	},

	onSearch: function(keyword) {
		var self = this;

		Utils.fetch('./data/bookmarks?keyword='+keyword).then(function(bookmarks) {
			self.trigger({
				data: bookmarks,
				match: keyword
			});
		});
	}
});

module.exports = BookmarkStore;
