import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkBox from './components/BookmarkBox.js';


window.main = () => {
	ReactDOM.render(<BookmarkBox/>,document.getElementById('panel-body'));
}

