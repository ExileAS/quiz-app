import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="top-nav-header">
      <nav className="top-nav">
        <h2 className="welcome-user">Welcome, User</h2>
        <SearchBar />
        <div className="notification-tab">Notification</div>
        <div className="messages-tab">Messages</div>
        <div className="profile-tab">
          <img src="profile.jpg" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
