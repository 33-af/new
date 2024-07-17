import { useEffect } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './Main.module.css';
import { getNews } from '../../api/apiNews';
import { useState } from 'react';
import NewsList from '../../NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // всего страниц
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true)
        const response = await getNews(currentPage,pageSize );
        setNews(response.news)
        setIsLoading(false)
    } catch (error) {
        console.error('Error in fetchNews:', error);
    }
};

  useEffect(() => {
      fetchNews(currentPage);
  }, [currentPage]);


  const handleNextPage = () => {
    if(currentPage < totalPages){
        setCurrentPage(currentPage + 1)
    }
  }
  const handlePreviousPage = () => {
    if(currentPage > 1){
        setCurrentPage(currentPage - 1)
    }
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
      <main className={styles.main}>
          {news.length > 0 && !isloading ? (
            <NewsBanner item={news[0]} />
            ): ( <Skeleton type={'banner'} count={1} />
            )}
            <Pagination
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            handlePageClick={handlePageClick}
            totalPages={totalPages}
            currentPage={currentPage}
            />
            {!isloading ? (
                <NewsList news={news} />
             ): (
                <Skeleton type={'item'} count={10}/>
             )}
          <NewsList news={news}/>
          <Pagination
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            handlePageClick={handlePageClick}
            totalPages={totalPages}
            currentPage={currentPage}
            />
      </main>
  );
};

export default Main;