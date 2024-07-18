import styles from './NewsList.module.css';
import NewsItem from '../NewsItem/NewsItem';
import withSkeleton from '../Skeleton/Skeleton';

export const NewsList = ({ news = [] }) => {
  if (!Array.isArray(news)) {
    return <div>No news available</div>; // or any fallback UI
  }

  return (
    <ul className={styles.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);

export default NewsListWithSkeleton;