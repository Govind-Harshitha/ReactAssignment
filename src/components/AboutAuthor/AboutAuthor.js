import React from 'react';
import './AboutAuthor.css';
import * as FontAwesome from 'react-icons/lib/fa'
class AboutAuthor extends React.Component {
   
	render() { 
		const  {author} = this.props.location.state;
		console.log(author);
		return (
			<div>
				<div className="full-header">
					<div className="container">
						<div className="header">
							<div>
								<h1>{author.name}</h1>
								<h2>{author.title}</h2>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="container">
						<div className="row">
							<div className="size">
								<div className="image">
									<img
										src={author.image}
										alt="instructor-profile"
										className=" author-image"
										style={{ width: 60, height: 60 }}
									/>
								</div>
								<div className="social-website">
									<div className="website-link">
                                    <FontAwesome.FaGlobe className="link" />
                                    <FontAwesome.FaTwitter className="link"  />
                                    <FontAwesome.FaYoutube  className="link" />
                                   
									</div>
								</div>
							</div>
							<div className="content col-md-9">
								<div className="full-biography">
									<p>{author.description.intro}</p>
                                    <p>{author.description.skills}</p>
                                    <p>{author.description.important}</p>

								</div>
								<ul className="count">
									<li>
										<div>Total students</div>
										<div>495,239</div>
									</li>
									<li>
										<div>Courses</div>
										<div>24</div>
									</li>
									<li>
										<div>Reviews</div>
										<div>197,238</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutAuthor;
