import React, { useState, Fragment } from "react";

export interface TabsProps {
  tabs: string[];
}
//
const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Fragment>
      <nav className="msk-flex msk-flex-row">
        {tabs.map((tab, i) => (
          <button
            className={`msk-text-gray-600 hover:msk-text-primary-base msk-py-2 msk-px-6 msk-block ${
              activeTab === i &&
              " msk-text-primary-base msk-border-b-2 msk-font-medium msk-border-blue-500"
            }`}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div></div>
    </Fragment>
  );
};

export default Tabs;
