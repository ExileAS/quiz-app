import SearchBar from "./SearchBar";
import { Email } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";
import profileImg from "../images/face.jpeg";

const useStyles = makeStyles((theme) => ({
  avatarBadge: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: "#fff",
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

const Header = () => {
  const classes = useStyles();
  const notificationsCount = 1;
  const messagesCount = 3;

  const profilePictureUrl = profileImg;

  return (
    <header className="top-nav-header">
      <nav className="top-nav">
        <h2 className="welcome-user">Welcome, User</h2>
        <SearchBar />
        <div className="notification-tab">
          <Badge badgeContent={messagesCount} color="secondary">
            <NotificationsIcon />
          </Badge>
        </div>
        <div className="messages-tab">
          <Badge badgeContent={notificationsCount} color="secondary">
            <Email />
          </Badge>
        </div>
        <div className="profile-tab">
          <img src="profile.jpg" alt="" />
        </div>
        <Badge
          className="profile-badge"
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          badgeContent={
            <Avatar
              alt="Profile Picture"
              src={profilePictureUrl}
              className={classes.avatarBadge}
            />
          }
        ></Badge>
      </nav>
    </header>
  );
};

export default Header;
