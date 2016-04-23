import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import BookmarkStores from '../stores/BookmarkStores.js';
import Bookmark from './Bookmark.js';

/*export default class List extends React.Component{
	constructor(){
		super();
		this.state = {
			bookmarks: {data: []}
		}
	}
	componentDidMount(){
		Reflux.connect(BookmarkStores, 'bookmarks');
	}

	render(){
		let list = [];
		this.state.bookmarks.data.forEach(function(item){
			list.push(<Bookmark title={item.title} created={item.created}/>)
		})

		return(
			<ul>{list}</ul>
		)
	}
}*/
var List = React.createClass({
	mixins: [Reflux.connect(BookmarkStores, 'bookmarks')],

	getInitialState: function() {
		return {
			bookmarks: {data: []}
		}
	},

	render: function() {
		var list = [];
		this.state.bookmarks.data.forEach(function(item) {
	      list.push(<Bookmark title={item.title} created={item.created}/>)
	    });
	    
		return <ul>
			{list}
		</ul>
	}
});

module.exports = List;