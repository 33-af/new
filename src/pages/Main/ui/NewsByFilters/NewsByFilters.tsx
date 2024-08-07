import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { useDebounced } from "@/shared/hooks/useDebounced";
import { NewsList } from "@/widgets/news/ui/NewsList/NewsList";
import { setFilters } from "@/entitites/news/model/newsSlice";
import { useGetNewsQuery } from "@/entitites/news/api/newsApi";
import NewsFilters from "../NewsFilters/NewsFilters";
import PaginationWrapper from "@/features/pagination/ui/Pagination/Pagination";
import styles from './NewsByFilters.module.css'

const NewsByFilters = () => {
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