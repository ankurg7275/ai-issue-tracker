import { useState } from "react";
import { issues as initialIssues } from "../data/dummyData";

import IssueCard from "../components/IssueCard";
import KanbanBoard from "../components/KanbanBoard";
import IssueForm from "../components/IssueForm";
import SearchBar from "../components/SearchBar";

function ProjectPage() {
  const [issues, setIssues] = useState(initialIssues);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const addIssue = (newIssue) => {
    setIssues([...issues, newIssue]);
  };

  const deleteIssue = (id) => {
    setIssues(issues.filter((issue) => issue.id !== id));
  };

  const updateStatus = (id) => {
    const updated = issues.map((issue) => {
      if (issue.id === id) {
        if (issue.status === "Todo") issue.status = "In Progress";
        else if (issue.status === "In Progress") issue.status = "Done";
      }
      return issue;
    });

    setIssues([...updated]);
  };

  const filteredIssues = issues.filter((issue) => {
    const matchesSearch = issue.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || issue.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="page-container">
      <h1>Project Issues</h1>

      <IssueForm addIssue={addIssue} />

      <SearchBar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      {filteredIssues.map((issue) => (
        <IssueCard
          key={issue.id}
          issue={issue}
          deleteIssue={deleteIssue}
          updateStatus={updateStatus}
        />
      ))}

      <KanbanBoard issues={filteredIssues} />
    </div>
  );
}

export default ProjectPage;