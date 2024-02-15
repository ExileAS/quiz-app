const Header = () => {
  return (
    <header className="top-nav">
      <div className="welcome-user">Welcome, User</div>
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
    </header>
  );
};

export default Header;
