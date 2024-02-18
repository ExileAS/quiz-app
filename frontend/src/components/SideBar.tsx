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
    color: "#fff",
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

  const content = tabs.map((tab: Tab, ind) => (
    <div
      className={tab.active ? "tab active" : "tab"}
      onClick={() => handleTabClick(ind)}
      key={tab.name}
    >
      <i>{tab.icon}</i>

      <Link to={tab.name}>{`${t(tab.name)}`}</Link>
    </div>
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
