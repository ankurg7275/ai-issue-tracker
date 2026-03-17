import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="card">
      <h2>{project.projectName}</h2>
      <p>{project.description}</p>

      <Link to="/project">
        <button>Open Project</button>
      </Link>
    </div>
  );
}

export default ProjectCard;