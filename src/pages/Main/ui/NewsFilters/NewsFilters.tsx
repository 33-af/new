import { useAppDispatch } from "@/app/appStore";
import { setFilters } from "@/entitites/news/model/newsSlice";
import { useGetCategoriesQuery } from "@/entitites/category/api/categoriesApi";
import { IFilters } from "@/shared/interfaces";
import { useTheme } from "@/app/providers/ThemeProvider";



import styles from "./NewsFilters.module.css"
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { isDark } = useTheme();
  const { data } = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider isDark={isDark} >
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => dispatch(setFilters({ key: 'category', value: category }))}
          />
        </Slider>
      ) : null}
      <Search keywords={filters.keywords} setKeywords={(keywords) => dispatch(setFilters({ key: 'keywords', value: keywords }))} />
    </div>
  )
}

export default NewsFilters