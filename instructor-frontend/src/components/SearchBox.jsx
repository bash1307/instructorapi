function SearchBox({
  searchTerm,
  onSearchChange,
  resultCount,
  totalCount,
}) {
  function handleClear() {
    onSearchChange("");
  }

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search by name, email, specialization, or status..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <button type="button" onClick={handleClear}>
        Clear
      </button>

      <p className="summary">
        Showing {resultCount} of {totalCount} instructors
      </p>
    </div>
  );
}

export default SearchBox;