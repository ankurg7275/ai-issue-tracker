function KanbanBoard({ issues }) {
  const todo = issues.filter((issue) => issue.status === "Todo");
  const progress = issues.filter((issue) => issue.status === "In Progress");
  const done = issues.filter((issue) => issue.status === "Done");

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        marginTop: "2rem"
      }}
    >
      <div style={{ flex: 1 }}>
        <h3>Todo</h3>
        {todo.map((issue) => (
          <div key={issue.id} className="card">
            {issue.title}
          </div>
        ))}
      </div>

      <div style={{ flex: 1 }}>
        <h3>In Progress</h3>
        {progress.map((issue) => (
          <div key={issue.id} className="card">
            {issue.title}
          </div>
        ))}
      </div>

      <div style={{ flex: 1 }}>
        <h3>Done</h3>
        {done.map((issue) => (
          <div key={issue.id} className="card">
            {issue.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;