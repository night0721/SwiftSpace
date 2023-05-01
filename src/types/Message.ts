import User from "./User";

interface Message {
  id: string;
  type: string;
  author: User;
  content: string;
  timestamp: number;
}

export default Message;
