export interface Forumpost{
  id: number;
  author: string;
  content: string;
}

export interface Forumthread{
  id: number;
  title: string,
  OP: string;
  post:  string;
  replies: Forumpost[];
}