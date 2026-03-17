function CommentBox() {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "1rem",
        marginTop: "1rem",
        borderRadius: "10px"
      }}
    >
      <h3>Comments</h3>

      <p>Need to fix login validation</p>
      <p>Backend API returning error</p>

      <input placeholder="Add comment" />
      <button>Add</button>
    </div>
  );
}

export default CommentBox;