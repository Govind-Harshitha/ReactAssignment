import React, { Component } from 'react';
import './Topics.css';
class Topics extends Component {
	render() {
        const categories = this.props.authorTopics;
		return (
			<div className="container">
				<div>
					<h5>Popular Topics</h5>
				</div>
				<div className="row">
					{categories.map((category, i) => {
						return category.topics.map((topic, i) => (
							<div className="col-sm-3" key={i}>
								<div className="card">
									<div className="card-body text-center">{topic}</div>
								</div>
							</div>
						));
					})}
				</div>
			</div>
		);
	}
}

export default Topics;
