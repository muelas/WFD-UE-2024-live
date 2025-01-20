export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Activity {
  id: number;
  type: string;
  duration: number;
  date: string;
}
