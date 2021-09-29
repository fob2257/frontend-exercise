export interface Dog {
  id: string;
  title: string;
  url: string;
}

export interface Response {
  count?: number;
  data?: Dog[];
}
