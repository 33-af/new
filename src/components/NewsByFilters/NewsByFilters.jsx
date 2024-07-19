import { TOTAL_PAGES } from '../../constants/constants'
import Pagination from '../Pagination/Pagination'
import styles from './NewsByFilters.module.css'
import {NewsList} from '../NewsList/NewsList'
import NewsFilters from '../NewsFilters/NewsFilters';



const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {


  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter('page_number', filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter('page_number', pageNumber);
  };

  return (
    <section className={styles.section}>
     <NewsFilters changeFilter={changeFilter} filters={filters}/>

  
  <Pagination
    handlePreviousPage={handlePreviousPage}
    handleNextPage={handleNextPage}
    handlePageClick={handlePageClick}
    totalPages={TOTAL_PAGES}
    currentPage={filters.page_number}
  />

  <NewsList isLoading={isLoading} news={news} />
</section>
  );
};

export default NewsByFilters;