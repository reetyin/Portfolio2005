import './App.css';

const sections = [
  { id: 'info', label: 'Basic Info' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'resources', label: 'Resources' },
  { id: 'setup', label: 'Developer Setup' }
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function App() {
  return (
    <div className="neo-root">
      <nav className="neo-navbar">
        <div className="neo-logo">Rui Yin</div>
        <ul className="neo-navlist">
          {sections.map(s => (
            <li key={s.id}>
              <button className="neo-navbtn" onClick={() => scrollToSection(s.id)}>{s.label}</button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="neo-main">
        <section id="info" className="neo-section">
          <h1 className="neo-title">Rui Yin Portfolio</h1>
          <p className="neo-subtitle">Full Stack Developer & Project Builder</p>
          <div className="neo-info">
            <span><strong>Name:</strong> Rui Yin</span>
            <span><strong>Major:</strong> Software Development</span>
            <span><strong>Email:</strong> reetyin@outlook.com</span>
          </div>
        </section>

        <section id="work" className="neo-section">
          <h2 className="neo-heading">Work</h2>
          <div className="neo-project">
            <h3>Study Abroad Service Platform</h3>
            <a href="https://lets.rundiy.com" target="_blank" rel="noopener noreferrer">lets.rundiy.com</a>
            <ul>
              <li><strong>Tech Stack:</strong> PHP, MySQL, WordPress, Nginx, Ubuntu, Baota Panel</li>
              <li><strong>Responsibilities:</strong> Deployed and maintained full website on cloud VPS; Fixed missing core file class-wp-token-map.php in WordPress 6.5.2; Set up LEMP environment, SSL, DNS, DB backup & security; Designed user funnel and private domain strategy; Integrated with WeChat, short videos, and SEO for traffic</li>
              <li><strong>Results:</strong> Acquired 1000+ targeted users; Converted users into paying clients via funnel automation; Generated consistent monthly profit; Built a long-term owned marketing channel</li>
            </ul>
          </div>
          <div className="neo-project">
            <h3>GitHub Project History (as of July 2025)</h3>
            <a href="https://github.com/reetyin" target="_blank" rel="noopener noreferrer">github.com/reetyin</a>
            <table className="neo-table">
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
                <tr><td>portfolio</td><td>HTML</td><td>2024</td><td>Personal portfolio website showcasing projects and skills.</td></tr>
                <tr><td>School CMS</td><td>PHP, MySQL, HTML, CSS, JavaScript, jQuery</td><td>20250415</td><td>A content management system for managing school information, featuring school info management, category system, image upload and management, user authentication, WYSIWYG editor, comment system with CAPTCHA, search functionality, and SEO-friendly URLs.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="skills" className="neo-section">
          <h2 className="neo-heading">Skills</h2>
          <ul className="neo-skills">
            <li><strong>Languages/Frameworks:</strong> JavaScript, React, HTML, CSS</li>
            <li><strong>Tools:</strong> VSCode, Git, Docker</li>
            <li><strong>Other:</strong> UI/UX Design, SEO, Cloud Deployment</li>
          </ul>
        </section>

        <section id="resources" className="neo-section">
          <h2 className="neo-heading">Resources</h2>
          <div className="neo-resource">
            <h3>React Official Documentation</h3>
            <img src="https://reactjs.org/logo-og.png" alt="React" style={{width: '50px'}} />
            <p>React learning resources</p>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">Visit</a>
          </div>
        </section>

        <section id="setup" className="neo-section">
          <h2 className="neo-heading">Developer Setup</h2>
          <ul className="neo-setup">
            <li>VSCode setup: One Dark Pro theme</li>
            <li>Terminal setup: zsh</li>
            <li>Preferred editor font: Fira Code</li>
          </ul>
        </section>
      </main>
      <footer className="neo-footer">
        <p>© 2025 Rui Yin</p>
      </footer>
    </div>
  );
}

export default App;




