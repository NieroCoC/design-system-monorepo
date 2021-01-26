import React, { useState } from "react";

export interface TabsProps {
  tabs: string[];
}
//
const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="msk-bg-white">
      <nav className="msk-flex msk-flex-row">
        {tabs.map((tab, i) => (
          <button
            className={`msk-text-gray-600 hover:msk-text-blue-500 msk-py-4 msk-px-6 msk-block ${
              activeTab === i &&
              " msk-text-blue-500 msk-border-b-2 msk-font-medium msk-border-blue-500"
            }`}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
