import React, { Component } from 'react';
import AuthorInfo from '../AuthorInfo/AuthorInfo';

class Instructors extends Component {
	render() {
		const authorsData = this.props.authorDetails;
		return ( 
			<div className="container">
				<div>
					<h5>Popular Instructors</h5>
				</div>
				<div>
                    <div className="row">{authorsData.map((author, i) =>
                         <AuthorInfo author={author} key={i} />)}</div>
				</div>
			</div>
		);
	}
}

export default Instructors;
