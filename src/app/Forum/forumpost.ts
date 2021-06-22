export interface Forumpost{
  id: number;
  author: string;
  content: string;
}

export interface Forumthread{
  id: number;
  title: string,
  author: string;
  content:  string;
  replies: Forumpost[];
}