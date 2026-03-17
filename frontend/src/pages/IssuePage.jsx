import { useState } from "react";

import CommentBox from "../components/CommentBox";
import ActivityTimeline from "../components/ActivityTimeline";
import AISummary from "../components/AISummary";

function IssuePage() {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="page-container">
      <div className="card">
        <h1>Issue Details</h1>

        <h2>Fix Login Bug</h2>

        <p>
          Users are unable to login due to incorrect validation.
        </p>

        <button onClick={() => setShowSummary(true)}>
          Generate AI Summary
        </button>
      </div>

      <CommentBox />
      <ActivityTimeline />
      <AISummary showSummary={showSummary} />
    </div>
  );
}

export default IssuePage;