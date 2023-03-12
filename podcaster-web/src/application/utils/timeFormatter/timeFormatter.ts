export const timeFormatter = (timeInMs: number) => {
  const rawSeconds = timeInMs / 1000;
  const minutes = Math.floor(rawSeconds / 60);
  let restSeconds = Math.floor((rawSeconds / 60 - minutes) * 60).toString();

  if (restSeconds.length === 1) restSeconds = `0${restSeconds}`;

  return { minutes, restSeconds };
};
