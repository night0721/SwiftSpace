import { useRouter } from "next/router";
import { RiSettings5Fill } from "react-icons/ri";
import { StatusCircle } from "./StatusCircle";

type UserProps = {
  avatar: string;
  username: string;
};

export const UserDetailsBox = ({ avatar, username }: UserProps) => {
  const router = useRouter();
  const handleSettingsClick = () => {
    router.push("/settings");
  };

  return (
    <div className="bg-sky-500 py-2 px-2">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={avatar}
            alt={`${username}'s avatar`}
            style={{ width: "3.5rem", height: "3.5rem", borderWidth: "3px" }}
            className="rounded-full border-red-500"
          />
          <h2 className="text-xl font-semibold font-mono text-blue-200">
            {username}
          </h2>
          <StatusCircle status="dnd" />
        </div>
        <button
          className="rounded-full w-12 bg-red-600"
          onClick={handleSettingsClick}
        >
          <RiSettings5Fill
            style={{
              color: "blue",
              fontSize: "3rem",
            }}
          />
        </button>
      </div>
    </div>
  );
};
