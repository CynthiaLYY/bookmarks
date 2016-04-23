import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import Moment from 'moment';
import BookmarkStores from '../stores/BookmarkStores.js';

export default class Bookmark extends React.Component{
	constructor(){
		super();
		this.state = {
			match: ''
		};
	}
	componentDidMount(){
		this.unsubscribe = BookmarkStores.listen(this.onMatch.bind(this));
	}
	componentWillUnmount(){
		this.unsubscribe();
	}

	onMatch(data){
		this.setState({
			match: data.match
		});
	}

	render(){
		let created = new Date(this.props.created*1000);
		let date = Moment(created).format('YYYY-MM-DD');

		let title = this.props.title;
		if(this.state.match.length > 0){
			title = <span
		        dangerouslySetInnerHTML={{
		          __html : this.props.title.replace(new RegExp('('+this.state.match+')', "gi"), '<span class="highlight">$1</span>')
		        }} />
		}

		return(
			<li>
				<div className='bookmark'>
					<h5 className='title'>{title}</h5>
					<span className='date'>Created @ {date}</span>
				</div>
			</li>
		);
	}

}
