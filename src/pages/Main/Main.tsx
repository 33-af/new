import styles from './Main.module.css';
import LatestNews from '../../components/LatestNews/LatestNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';



const Main = () => {

  return (

    <main className={styles.main}>
      <LatestNews />


{/* дальше прокидуем */}
      <NewsByFilters  />
    </main>
  );
};

export default Main;