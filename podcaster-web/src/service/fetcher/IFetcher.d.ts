export interface IFetcher {
  url: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  headers?: {};
  mode?: 'cors' | 'no-cors' | 'same-origin';
  body?: string;
}
