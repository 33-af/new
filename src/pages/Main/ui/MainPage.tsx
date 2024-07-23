import LatestNews from './LatestNews/LatestNews';
import NewsByFilters from './NewsByFilters/NewsByFilters';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default MainPage;