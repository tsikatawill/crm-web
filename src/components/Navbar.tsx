import React from "react";
import ProfileImage from "../assets/icons/bryan.png"

function Navbar() {
  return (
    <div className="w-full  flex items-center justify-between py-6 px-10 border-b border-secondary">
      <div className="p-3">
        <h1 className="font-bold text-xl">Slightly Techie CRM</h1>
      </div>

      <div className="gap-16 flex">
        <button className="nav-btn font-semibold border border-primary text-lg text-secondary">Recent Activity</button>
        <button className="nav-btn font-semibold text-lg text-secondary">Marketplace</button>
        <button className="nav-btn font-semibold text-lg text-secondary">Scoreboard</button>
      </div>

      <div className="flex items-center gap-4">
        <h2 className="font-bold text-xl text-secondary">Welcome Brian!</h2>
        <img src={ProfileImage} alt="profile image" />
      </div>
    </div>
  );
}

export default Navbar;