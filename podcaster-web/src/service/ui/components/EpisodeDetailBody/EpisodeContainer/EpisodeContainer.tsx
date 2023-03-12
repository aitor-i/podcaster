interface IProps {
  title: string;
  descriptions: string;
  episodeUrl: string;
}

export const EpisodeContainer = ({ descriptions, episodeUrl, title }: IProps) => {
  const url = new URL(episodeUrl).toString();
  return (
    <div>
      <h2>{title}</h2>
      <p>{descriptions}</p>
      <audio controls src={url} />
    </div>
  );
};
