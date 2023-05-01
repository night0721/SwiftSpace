import MessageBar from "@/components/MessageBar";
import MessageBox from "@/components/MessageBox";
import UserDetailsBox from "@/components/UserDetailsBox";
import Message from "@/types/Message";
import React, { useState, useCallback, useEffect, useRef } from "react";
import fetch from "node-fetch";

interface Key {
  key: string;
}
export default function Me() {
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([] as Message[]);
  const [key, setKey] = useState("swift");
  const username = "iOS";
  const password = "ABC";
  const ws = useRef<WebSocket | null>(null);
  useEffect(() => {
    ws.current = new WebSocket(
      `wss://sockets.night0721.repl.co/message?key=${key}`
    );
    ws.current.onopen = () => {
      setConnected(true);
      console.log("Connected");
    };
    ws.current.onclose = () => {
      setConnected(false);
      console.log("Disconnected");
    };
    ws.current.onmessage = async event => {
      const data = JSON.parse(event.data) as Message;
      setMessages((previous: Message[]) => [...previous, data]);
    };
    const wsCurrent = ws.current;
    return () => {
      wsCurrent.close();
    };
  }, []);

  const onSendMessage = (message: string): void => {
    if (!ws.current) return;
    ws.current.send(
      JSON.stringify({
        author: {
          username: "iOS",
          id: "123",
          avatar:
            "https://raw.githubusercontent.com/night0721/SwiftSpace/main/public/icon-192x192.png",
        },
        content: message,
      })
    );
  };
  return (
    <div className="bg-gray-900 h-screen flex flex-col">
      {/* <div className="flex bg-white drop-shadow-md rounded-lg p-1.5">
        <img
          className="w-28 h-28 rounded-full border-4 border-red-500 object-cover"
          src="https://www.kindacode.com/wp-content/uploads/2022/05/cute.jpeg"
        />
        <div className="flex flex-col px-5 py-1">
          <h4 className="font-bold text-lg text-pink-600">The Big Boss</h4>
          <p className="mt-1 flex-1 font-light text-sm text-slate-500">
            CEO & Co-Founder of XYZ
          </p>

          <a
            className="mt-2 inline-block px-2 py-1 border bg-blue-500 text-center text-white text-sm hover:underline"
            href="#"
          >
            View Profile
          </a>
        </div>
      </div> */}
      <UserDetailsBox username={username} avatar="https://placehold.co/400" />
      <MessageBox messages={messages} />
      <MessageBar onSendMessage={onSendMessage} />
    </div>
  );
}
