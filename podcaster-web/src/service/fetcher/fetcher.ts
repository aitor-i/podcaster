import type { IFetcher } from './IFetcher';

export const fetcher = async ({ url, method, headers, mode, body }: IFetcher) => {
  // const allowedUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
  // Oops... Request Timeout.
  const config = {
    method: method,
    headers: headers,
    mode: mode,
    body: body
  };
  const response = await fetch(url, config);

  if (!response.ok) throw new Error(response.toString());

  return await await response.json();
};
