import React, { useState } from "react";
import AccountSettings from "./components/AccountSettings";
import PersonalInfo from "./components/PersonalInfo";

function Settings() {
  const [currentPath, setCurrentPath] = useState("/account");

  const handleNavigate = (path) => {
    setCurrentPath(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {currentPath === "/account" && (
        <AccountSettings onNavigate={handleNavigate} />
      )}
      {currentPath === "/personal-info" && (
        <PersonalInfo onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default Settings;
