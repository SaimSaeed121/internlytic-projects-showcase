import { useState } from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    intern: "Ayesha Khan",
    category: "Frontend",
    description: "A responsive portfolio showcasing skills, projects and experience.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    intern: "Ali Ahmed",
    category: "Web Development",
    description: "A clean dashboard interface for presenting weather information.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=700",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    intern: "Sara Malik",
    category: "UI/UX",
    description: "A modern interface concept for viewing and understanding data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700",
  },
  {
    id: 4,
    title: "Learning Platform",
    intern: "Usman Tariq",
    category: "Web Development",
    description: "A learning platform concept with an organized course layout.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=700",
  },
  {
    id: 5,
    title: "Mobile App Design",
    intern: "Hira Noor",
    category: "UI/UX",
    description: "A mobile app design concept focused on usability and simplicity.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700",
  },
  {
    id: 6,
    title: "Task Manager",
    intern: "Hamza Shah",
    category: "Frontend",
    description: "A task management interface concept for organizing daily work.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=700",
  },
];

const categories = ["All", "Frontend", "Web Development", "UI/UX"];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.intern.toLowerCase().includes(search.toLowerCase());

    return matchesSearch &&
      (category === "All" || project.category === category);
  });

  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#">
          <span className="logo-icon">I</span>
          Internlytic
        </a>
        <span className="nav-label">Internship Projects Showcase</span>
      </nav>

      <header className="hero">
        <span className="eyebrow">OUR COMMUNITY · OUR WORK</span>
        <h1>Ideas into <span>impact.</span></h1>
        <p>
          Explore projects built by our talented interns.
          Discover creativity, skills, and innovation in one place.
        </p>
        <div className="hero-stats">
          <div><strong>06</strong><span>Projects</span></div>
          <div><strong>03</strong><span>Categories</span></div>
          <div><strong>∞</strong><span>Possibilities</span></div>
        </div>
      </header>

      <main className="showcase">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE SHOWCASE</span>
            <h2>Featured projects</h2>
            <p>Explore what our interns have been creating.</p>
          </div>
          <span className="project-count">
            {filteredProjects.length} projects found
          </span>
        </div>

        <div className="filters">
          <input
            className="search"
            type="search"
            placeholder="Search projects or interns..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="category-filters">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "filter active" : "filter"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length ? (
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span className="badge">{project.category}</span>
                </div>

                <div className="project-content">
                  <span className="project-number">
                    PROJECT / {String(project.id).padStart(2, "0")}
                  </span>
                  <h3>{project.title}</h3>
                  <p className="description">{project.description}</p>

                  <div className="intern">
                    <span className="avatar">
                      {project.intern.charAt(0)}
                    </span>
                    <div>
                      <small>CREATED BY</small>
                      <strong>{project.intern}</strong>
                    </div>
                  </div>

                  <div className="card-actions">
                    <a href="https://example.com/" target="_blank" rel="noreferrer">
                      View Project ↗
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No projects found</h3>
            <p>Try a different search or category.</p>
            <button onClick={() => { setSearch(""); setCategory("All"); }}>
              Clear filters
            </button>
          </div>
        )}
      </main>

      <footer className="footer">
        <a className="logo" href="#">
          <span className="logo-icon">I</span> Internlytic
        </a>
        <p>Celebrating the next generation of innovators.</p>
        <span>© 2026 Internlytic · Projects Showcase</span>
      </footer>
    </div>
  );
}

export default App;