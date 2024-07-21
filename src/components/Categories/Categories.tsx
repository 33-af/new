import { forwardRef, ForwardedRef } from 'react';
import styles from './Categories.module.css'
import { CategoryType } from '../../interfaces';


interface Props{
  categories: CategoryType[];
  selectedCategory: CategoryType | null;
  setSelectedCategory: (category: CategoryType | null) => void
}
const Categories =  forwardRef(
  (
    { selectedCategory, categories, setSelectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement> ) => {
  return (
    <div ref={ref} className={styles.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? styles.active : styles.item}
        >
          All
        </button>
        {categories.map((category)=> {
          return(

            <button
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category ? styles.active : styles.item
            }
            key={category}
            >
              {category}
            </button>
          )
        })}
  
    </div>
  );
  
}
);

Categories.displayName='Categories'

export default Categories;