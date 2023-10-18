import React, { useState, KeyboardEvent, ChangeEvent } from "react";

type Props = {
  onSendMessage: (message: string) => void;
};

export const MessageBar = ({ onSendMessage }: Props) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="bottom-0 bg-gray-500 border-gray-300 flex">
      <input
        type="text"
        className="flex-1 border border-gray-400 rounded-md w-3/12 py-2 px-4 mr-2 text-sm focus:outline-none focus:border-blue-500"
        placeholder="Type your message here"
        value={message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
