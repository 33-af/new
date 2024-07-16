import { useEffect } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './Main.module.css';
import { getNews } from '../../api/apiNews';
import { useState } from 'react';
import NewsList from '../../NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      const fetchNews = async () => {
          try {
            setIsLoading(true) //пока загрузка
              const response = await getNews();
              if (response && response.news) {
                  setNews(response.news);
                  setIsLoading(false) //закончилась
              } else {
                  setNews([]); // Ensure news is an empty array if response is invalid
              }
          } catch (error) {
              console.error('Error in fetchNews:', error);
              setNews([]); // Set news to an empty array in case of an error
          }
      };

      fetchNews();
  }, []);

  return (
      <main className={styles.main}>
          {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton type='banner' count={1}/>}
          {!isLoading ? <NewsList news={news}/> : <Skeleton type='item' count={10}/>}
      </main>
  );
};

export default Main;