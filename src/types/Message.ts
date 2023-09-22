import { User } from "./User";

export type Message = {
  id: string;
  type: string;
  author: User;
  content: string;
  timestamp: number;
};
