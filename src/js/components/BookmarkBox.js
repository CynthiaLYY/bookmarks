import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox.js';
import List from './List.js';

export default class BookmarkBox extends React.Component{
	render(){
		return(
			<div>
				<SearchBox/>
				<List/>
			</div>
		)
	}
}