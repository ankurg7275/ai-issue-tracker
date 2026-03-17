import { projects } from "../data/dummyData";
import ProjectCard from "../components/ProjectCard";

function Dashboard() {
  return (
    <div className="page-container">
      <h1>Dashboard</h1>

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Dashboard;