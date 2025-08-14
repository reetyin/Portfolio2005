import './App.css';

function App() {
	return (
		<div className="portfolio-container">
			<header className="portfolio-header">
				<h1>Rui Yin Portfolio</h1>
				<p className="portfolio-subtitle">Full Stack Developer & Project Builder</p>
			</header>
			<div className="portfolio-content">
				<section className="portfolio-section">
					<h2>Basic Information</h2>
					<div className="portfolio-info">
						<span><strong>Name:</strong> Rui Yin</span>
						<span><strong>Major:</strong> Software Development</span>
						<span><strong>Email:</strong> your@email.com</span>
					</div>
				</section>

				<section className="portfolio-section">
					<h2>Project Display</h2>
					<div className="portfolio-project">
						<h3>Study Abroad Service Platform</h3>
						<a href="https://lets.rundiy.com" target="_blank" rel="noopener noreferrer">lets.rundiy.com</a>
						<ul>
							<li><strong>Tech Stack:</strong> PHP, MySQL, WordPress, Nginx, Ubuntu, Baota Panel</li>
							<li><strong>Responsibilities:</strong> Deployed and maintained full website on cloud VPS; Fixed missing core file class-wp-token-map.php in WordPress 6.5.2; Set up LEMP environment, SSL, DNS, DB backup & security; Designed user funnel and private domain strategy; Integrated with WeChat, short videos, and SEO for traffic</li>
							<li><strong>Results:</strong> Acquired 1000+ targeted users; Converted users into paying clients via funnel automation; Generated consistent monthly profit; Built a long-term owned marketing channel</li>
						</ul>
					</div>
					<div className="portfolio-project">
						<h3>Rui Yin – GitHub Project History (as of July 2025)</h3>
						<a href="https://github.com/reetyin" target="_blank" rel="noopener noreferrer">github.com/reetyin</a>
						<table className="portfolio-table">
							<thead>
								<tr>
									<th>Project Name</th>
									<th>Tech Stack</th>
									<th>Last Contribution</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr><td>crm_app</td><td>Ruby</td><td>July 9, 2025</td><td>A simple CRM system simulating customer interaction workflows.</td></tr>
								<tr><td>simple_store</td><td>Ruby</td><td>July 6, 2025</td><td>A basic e-commerce app practicing Rails MVC and CRUD operations.</td></tr>
								<tr><td>Intro_to_Rails_Project_books</td><td>HTML</td><td>July 22, 2025</td><td>Intro project using Rails to manage a book listing page.</td></tr>
								<tr><td>rui_yin_ui_garden</td><td>TypeScript</td><td>July 3, 2025</td><td>A UI component library built with React and styled components.</td></tr>
								<tr><td>coding_assignment13</td><td>TypeScript</td><td>July 20, 2025</td><td>A front-end assignment using React and Storybook to showcase components.</td></tr>
								<tr><td>ActiveRecord</td><td>Ruby</td><td>2024</td><td>Practice project using Active Record for database operations.</td></tr>
								<tr><td>yin_rui_coding_assignment11</td><td>HTML</td><td>2024</td><td>Basic HTML/CSS assignment for static web layout and styling.</td></tr>
								<tr><td>web</td><td>HTML</td><td>2024</td><td>One of the earliest projects practicing web layout and navigation design.</td></tr>
							</tbody>
						</table>
					</div>
				</section>

				<section className="portfolio-section">
					<h2>Skills</h2>
					<ul className="portfolio-skills">
						<li><strong>Languages/Frameworks:</strong> JavaScript, React, HTML, CSS</li>
						<li><strong>Tools:</strong> VSCode, Git, Docker</li>
						<li><strong>Other:</strong> UI/UX Design, SEO, Cloud Deployment</li>
					</ul>
				</section>

				<section className="portfolio-section">
					<h2>Resources</h2>
					<div className="portfolio-resource">
						<h3>React Official Documentation</h3>
						<img src="https://reactjs.org/logo-og.png" alt="React" style={{width: '50px'}} />
						<p>React learning resources</p>
						<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">Visit</a>
					</div>
				</section>

				<section className="portfolio-section">
					<h2>Developer Setup</h2>
					<ul className="portfolio-setup">
						<li>VSCode setup: One Dark Pro theme</li>
						<li>Terminal setup: zsh</li>
						<li>Preferred editor font: Fira Code</li>
					</ul>
				</section>
			</div>
			<footer className="portfolio-footer">
				<p>© 2025 Rui Yin</p>
			</footer>
		</div>
	);
}

export default App;




