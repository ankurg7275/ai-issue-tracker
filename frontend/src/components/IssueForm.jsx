import { useState } from "react";

function IssueForm({ addIssue }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Todo");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = () => {
    if (!title) return;

    const newIssue = {
      id: Date.now(),
      title,
      status,
      priority
    };

    addIssue(newIssue);

    setTitle("");
    setStatus("Todo");
    setPriority("Low");
  };

  return (
    <div className="card">
      <h3>Create New Issue</h3>

      <input
        placeholder="Issue title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Todo</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>

      <br /><br />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <br />

      <button onClick={handleSubmit}>Add Issue</button>
    </div>
  );
}

export default IssueForm;