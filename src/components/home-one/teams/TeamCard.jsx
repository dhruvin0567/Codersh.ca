
function TeamCard({ team: { name, designation, img }, index }) {
	return (
		<div className="aximo-team-wrap">
			<div className="aximo-team-thumb">
				<img src={img} alt={name} />
				{index === 0 && (
					<div className="aximo-social-icon team-social">
						<ul>
							<li>
								<a href="https://twitter.com/CodershWeb/" target="_blank" rel="noopener noreferrer">
									<i className="icon-twitter"></i>
								</a>
							</li>
							<li>
								<a href="https://facebook.com/Codershweb/" target="_blank" rel="noopener noreferrer">
									<i className="icon-facebook"></i>
								</a>
							</li>
							<li>
								<a href="https://instagram.com/codersh.web/" target="_blank" rel="noopener noreferrer">
									<i className="icon-instagram"></i>
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/company/30213091/admin/analytics/followers/" target="_blank" rel="noopener noreferrer">
									<i className="icon-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
				)}
			</div>
			<div className="aximo-team-data">
				<h3>{name}</h3>
				<p>{designation}</p>
			</div>
		</div>
	);
}

export default TeamCard;