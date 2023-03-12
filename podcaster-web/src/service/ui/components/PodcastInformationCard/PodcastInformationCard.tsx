import { Link } from 'react-router-dom';
import CardStyles from './PodcastInformationCard.module.css';
interface IProps {
  imageSrc: string;
  podcastName: string;
  author: string;
  description: string;
  id: string;
}

export const PodcastInformationCard = ({ author, description, imageSrc, podcastName, id }: IProps) => {
  return (
    <div className={CardStyles.container}>
      <Link className={CardStyles.image} relative="path" to={`/podcast/${id}`}>
        <img alt="podcast cover" className={CardStyles.image} src={imageSrc} />
      </Link>
      <div className={CardStyles.authorContainer}>
        <Link className={CardStyles.title} relative="path" to={`/podcast/${id}`}>
          <p className={CardStyles.title}>{podcastName}</p>
        </Link>
        <p className={CardStyles.author}> by {author}</p>
      </div>
      <div className={CardStyles.descriptionContainer}>
        <p className={CardStyles.titleDescription}>Description:</p>
        <p className={CardStyles.description}>{description}</p>
      </div>
    </div>
  );
};
