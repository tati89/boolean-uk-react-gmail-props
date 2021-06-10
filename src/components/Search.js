function Search(props) {
  return (
    <div className="search">
      <input
        className="search-bar"
        placeholder="Search mail"
        value={props.searchInput}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default Search
