import * as React from "react";
import { ReactComponent as Avatar } from "../../../icons/avatar.svg";

export function UserInfo({ user }) {
  return (
    <div className="flex flex-col space-y-4 p-4" data-component="RegisteredTab">
      <div className="flex flex-row justify-between items-center space-x-4">
        <div className="flex flex-row justify-evenly space-x-4 items-center">
          <Avatar />
          <div className="flex flex-col">
            <h4 className="text-text-secondary text-xs font-bold"> User </h4>
            <span className="text-sm truncate text-white">{user.userMail}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center items-center">
        <div className="w-1/2 border-r border-bd-primary">
          <div className="flex flex-col">
            <h4 className="text-sm text-text-secondary font-bold">
              Real Money
            </h4>
            <span className="text-white font-light text-xl">
              {user.totalBalance.toFixed(2)} &euro;
            </span>
          </div>
        </div>
        <div className="w-1/2">
          <h4 className="text-sm text-text-secondary font-bold">Bonus Money</h4>
          <span className="text-white font-light text-xl">
            {user.bonusBalance.toFixed(2)} &euro;
          </span>
        </div>
      </div>
    </div>
  );
}
