import { useState } from "react";

const SideBar = () => {
  const [tabs, setTabs] = useState([
    { name: "tab1", active: false },
    { name: "tab2", active: false },
    { name: "tab3", active: false },
    { name: "tab4", active: false },
    { name: "tab5", active: false },
    { name: "tab6", active: false },
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
      {tab.name}
    </div>
  ));
  return (
    <aside className="sidebar">
      <header className="sidebar-title">Sidebar Title</header>
      <nav className="tabs">{content}</nav>
    </aside>
  );
};

export default SideBar;
