import { INews, NewsItem } from '@/entitites/news';
import styles from './NewsList.module.css';
import withSkeleton from '@/shared/hocs/withSkeleton';

export interface NewsListProps {
  news?: INews[];
  isLoading: boolean;
}

export const NewsList = ({ news, isLoading }: NewsListProps) => {
  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>; 
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


