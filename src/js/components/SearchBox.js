import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkActions from '../actions/BookmarkActions.js';

export default class  SearchBox extends React.Component{
	performSearch(){
		let keyword = this.refs.keyword.value;
		BookmarkActions.search(keyowrd);
	}

	render(){
		return(
			<div className="search">
				<input type='text' 
					placeholder='type to search...' 
					ref="keyword"
					onChange={this.performSearch} />	
			</div>
		)
	}
}