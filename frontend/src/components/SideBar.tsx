import { useState } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import {
  Home,
  EventNote,
  CalendarMonth,
  School,
  Campaign,
  ShowChart,
} from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Tab {
  name: string;
  active: boolean;
  icon: ReactJSXElement;
}

type Tabs = Tab[];

const useStyles = makeStyles(() => ({
  whiteIcon: {
    color: "#ffffff",
    padding: "10px",
    cursor: "pointer",
    justifyContent: "space-between",
    fontSize: "20px",
  },
  activeIcon: {
    padding: "10px",
    cursor: "pointer",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    color: "#4fba96",
    fontSize: "20px",
  },
}));

const SideBar = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [tabs, setTabs] = useState<Tabs>([
    {
      name: "Dashboard",
      active: false,
      icon: <Home className={classes.whiteIcon} />,
    },
    {
      name: "Schedule",
      active: false,
      icon: <CalendarMonth className={classes.whiteIcon} />,
    },
    {
      name: "Courses",
      active: false,
      icon: <EventNote className={classes.whiteIcon} />,
    },
    {
      name: "Gradebook",
      active: false,
      icon: <School className={classes.whiteIcon} />,
    },
    {
      name: "Performance",
      active: false,
      icon: <ShowChart className={classes.whiteIcon} />,
    },
    {
      name: "Announcment",
      active: false,
      icon: <Campaign className={classes.whiteIcon} />,
    },
  ]);

  const handleTabClick = (ind: number) => {
    setTabs(
      tabs.map((tab, i) => {
        return i === ind ? { ...tab, active: true } : { ...tab, active: false };
      })
    );
  };

  const handleMouseOver = (ind: number) => {
    setTabs(
      tabs.map((tab, i) => {
        return i === ind ? { ...tab, active: true } : { ...tab, active: false };
      })
    );
  };

  const content = tabs.map((tab: Tab, ind) => (
    <Link to={tab.name} className={classes.whiteIcon}>
      <div
        className={tab.active ? classes.activeIcon : classes.whiteIcon}
        onClick={() => handleTabClick(ind)}
        onMouseOver={() => handleMouseOver(ind)}
        key={tab.name}
      >
        <i className={tab.active ? classes.activeIcon : classes.whiteIcon}>
          {tab.icon}
        </i>
        {`${t(tab.name)}`}
      </div>
    </Link>
  ));
  return (
    <aside className="sidebar">
      <header className="sidebar-title">
        <h1 className="main-title">
          <Link to="/">Coligo</Link>
        </h1>
      </header>
      <nav className="tabs">{content}</nav>
    </aside>
  );
};

export default SideBar;
