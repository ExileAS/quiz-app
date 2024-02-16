import { useState } from "react";
import { HomeMax } from "@mui/icons-material";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface Tab {
  name: string;
  active: boolean;
  icon: ReactJSXElement;
}

type Tabs = Tab[];

const SideBar = () => {
  const [tabs, setTabs] = useState<Tabs>([
    { name: "tab1", active: true, icon: <HomeMax color="primary" /> },
    { name: "tab2", active: false, icon: <HomeMax color="primary" /> },
    { name: "tab3", active: false, icon: <HomeMax color="primary" /> },
    { name: "tab4", active: false, icon: <HomeMax color="primary" /> },
    { name: "tab5", active: false, icon: <HomeMax color="primary" /> },
    { name: "tab6", active: false, icon: <HomeMax color="primary" /> },
  ]);

  const handleTabClick = (ind: number) => {
    setTabs(
      tabs.map((tab, i) => {
        return i === ind ? { ...tab, active: true } : { ...tab, active: false };
      })
    );
  };

  const content = tabs.map((tab, ind) => (
    <div
      className={tab.active ? "tab active" : "tab"}
      onClick={() => handleTabClick(ind)}
    >
      {tab.icon}
    </div>
  ));
  return (
    <aside className="sidebar">
      <header className="sidebar-title">
        <h2>Sidebar Title</h2>
      </header>
      <nav className="tabs">{content}</nav>
    </aside>
  );
};

export default SideBar;
