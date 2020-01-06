import React from 'react';
import { Link } from 'react-router-dom';
import './AuthorInfo.css';
const AuthorInfo = (props) => {
	const authorsData = props.author;
	return (
		<div className="col-md-3" key={authorsData.key}>
		  <Link to={{ pathname: '/aboutauthor', state: { author: authorsData } }} style={{textDecoration:"none"}}>
			<div className="card">
			  <div className="card-body text-center">
				<div className="card-image">
				  <img className="author-image" src={authorsData.image} alt="Author" />
				</div>
				<div className="card-heading">
				  <h5 className="heading">{authorsData.name}</h5>
				</div>
				<div className="heading" >{authorsData.topics}</div>
				<div>782.653 students</div>
				<div>33 courses</div>
			  </div>
			</div>
		  </Link>
		</div>
	  );
};

export default AuthorInfo;
