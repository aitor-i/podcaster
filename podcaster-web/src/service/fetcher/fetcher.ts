import type { IFetcher } from './IFetcher';

export const fetcher = async ({ url, method, headers, mode, body }: IFetcher) => {
  const response = await fetch(url, {
    method: method,
    headers: headers,
    mode: mode,
    body: body
  });

  if (!response.ok) throw new Error(response.toString());
  return await await response.json();
};
