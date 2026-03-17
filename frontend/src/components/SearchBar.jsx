function SearchBar({ search, setSearch, filter, setFilter }) {
  return (
    <div className="card">
      <input
        placeholder="Search issue..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="All">All</option>
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}

export default SearchBar;