import { TOTAL_PAGES } from '../../constants/constants'
import styles from './NewsByFilters.module.css'
import { NewsList } from '../NewsList/NewsList'
import NewsFilters from '../NewsFilters/NewsFilters';
import { useDebounced } from '../../helpers/hooks/useDebounced';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import { useGetNewsQuery } from '../../store/services/newsApi';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';



const NewsByFilters = () => {

  // const { filters, changeFilter } = useFilters({
  //   page_number: 1,
  //   page_size: PAGE_SIZE,
  //   category: null,
  //   keywords: '',
  // });

  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  //задержка для поиска
  const debouncedKeywords = useDebounced(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  })




  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {

      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number + 1 })
      )
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number - 1 })
      )
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(
      setFilters({ key: 'page_number', value: pageNumber })
    )
  };

  return (
    <section className={styles.section}>
      {/* changeFilter={changeFilter} */}
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top
        bottom
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;