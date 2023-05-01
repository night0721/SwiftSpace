import Message from "@/types/Message";
import React from "react";

type Props = {
  messages: Message[];
};

const MessageBox = ({ messages }: Props) => {
  return (
    <div className="flex-1 bg-sky-200 overflow-y-auto my-3">
      <div className="max-w-3xl mx-auto py-8">
        <div className="bg-white-300 rounded-lg shadow-md p-6">
          {messages.map((msg, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center">
                <img
                  src={msg.author.avatar}
                  alt="User avatar"
                  className="rounded-full border-2 w-10 mr-3"
                />
                <h3 className="text-lg font-bold">{msg.author.username}</h3>
              </div>
              <p className="text-gray-700">{msg.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
