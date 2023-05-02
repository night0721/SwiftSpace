interface Status {
  status: "online" | "offline" | "idle" | "dnd";
}
export const StatusCircle = ({ status }: Status) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div
          className={`m-3 flex h-2 w-2 items-center justify-center rounded-full ${
            status == "online"
              ? "bg-green-500"
              : status == "offline"
              ? "bg-gray-500"
              : status == "idle"
              ? "bg-orange-400"
              : status == "dnd"
              ? "bg-red-500"
              : "bg-gray-500"
          }`}
        ></div>
      </div>
    </>
  );
};
