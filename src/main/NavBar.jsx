import React from "react";

export const NavBar = ({ challenges }) => {
  return (
    <div className="nav">
      {challenges.map((challenge) => {
        return (
          <div>
            <button className="challenge">{challenge}</button>
          </div>
        );
      })}
    </div>
  );
};
