import { Link } from "react-router-dom";

function IssueCard({ issue, deleteIssue, updateStatus }) {
  return (
    <div className="card">
      <h3>{issue.title}</h3>

      <span className="status">{issue.status}</span>
      <span className="priority">{issue.priority}</span>

      <br />

      <button onClick={() => updateStatus(issue.id)}>
        Change Status
      </button>

      <button
        onClick={() => deleteIssue(issue.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>

      <br />

      <Link to="/issue">
        <button>View Issue</button>
      </Link>
    </div>
  );
}

export default IssueCard;