import React from "react";
import { RiSettings5Fill } from "react-icons/ri";

interface UserProps {
  avatar: string;
  username: string;
}

const UserDetailsBox = ({ avatar, username }: UserProps) => {
  return (
    <div className="bg-sky-500 py-2 px-2">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={avatar}
            alt={`${username}'s avatar`}
            className="w-8/12 rounded-full border-8 border-red-500"
          />
          <h2 className="text-xl font-semibold font-mono text-blue-200">
            {username}
          </h2>
        </div>
        <button className="bg-stone-600 rounded-full">
          <RiSettings5Fill style={{ color: "blueviolet", fontSize: "1.5em" }} />
        </button>
      </div>
    </div>
  );
};

export default UserDetailsBox;
