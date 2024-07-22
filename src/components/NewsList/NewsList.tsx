import styles from './NewsList.module.css';
import NewsItem from '../NewsItem/NewsItem';
import withSkeleton from '../../helpers/hocs/withSkeleton';
import { INews } from '../../interfaces';


export interface NewsListProps {
  news?: INews[];
  isLoading: boolean;
}

// Define NewsList component
export const NewsList = ({ news, isLoading }: NewsListProps) => {
  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>; // Display loading state
  }

  if (!Array.isArray(news) || news.length === 0) {
    return <div>No news available</div>;
  }

  return (
    <ul className={styles.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<NewsListProps>(
  NewsList,
  'item',  // type
  10,      // count
  'row'    // direction
);

export default NewsListWithSkeleton;


