function AISummary({ showSummary }) {
  if (!showSummary) return null;

  return (
    <div className="card">
      <h3>AI Summary</h3>

      <p>
        Summary: Discussion focuses on login validation issue.
      </p>

      <p>
        Action Item: Fix frontend form validation.
      </p>

      <p>
        Next Step: Test API response after fix.
      </p>
    </div>
  );
}

export default AISummary;