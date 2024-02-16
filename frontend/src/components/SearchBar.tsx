const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input">
        <form
          className="nosubmit"
          onSubmit={(e) => e.preventDefault()}
          autoComplete="off"
        >
          <input
            name="search-bar"
            id="search-bar"
            placeholder="search..."
            className="nosubmit"
            type="search"
          ></input>
        </form>
        <br />
      </div>
    </div>
  );
};

export default SearchBar;
