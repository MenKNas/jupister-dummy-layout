import * as React from "react";
import { Link } from "react-router-dom";
import MainButton from "../../Buttons/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Account() {
  return (
    <div className="bg-gray-800">
      <div style={{ maxWidth: 1400, margin: "0 auto" }} className="p-4">
        <div className="bg-white flex rounded-lg">
          <div className="w-2/6">
            <SideMenu />
          </div>
          <div className="w-4/6">
            <div> The rest of the form </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideMenu() {
  let user = {
    userName: "George Papadopoulos",
    userMail: "papadopoulosg@gmail.com",
    totalBalance: 2500,
    bonusBalance: 200,
  };
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <div>
        <div className="flex flex-col space-y-4" data-component="RegisteredTab">
          <div className="flex flex-row justify-between items-center space-x-4">
            <div>
              <div className="flex flex-row justify-evenly space-x-2 items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  className="bg-gray-700 text-white p-2 text-4xl rounded-md"
                  size="lg"
                  style={{ width: 36, height: 36 }}
                />
                <div className="flex flex-col">
                  <h4 className="text-gray-500 text-xs"> User </h4>
                  <span className="text-sm font-bold truncate text-gray-700">
                    {user.userMail}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center pb-4">
            <div>
              <div className="flex flex-col">
                <h4 className="text-md text-gray-700">Real Money</h4>
                <span className="text-gray-800 font-bold text-lg">
                  {user.totalBalance.toFixed(2)} &euro;
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-md text-gray-700">Bonus Money</h4>
              <span className="text-gray-800 font-bold text-lg">
                {user.bonusBalance.toFixed(2)} &euro;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
