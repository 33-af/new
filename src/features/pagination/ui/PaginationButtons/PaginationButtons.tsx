import { useTheme } from '@/app/providers/ThemeProvider'
import { IPaginationProps } from '../../model/types'
import styles from './Pagination.module.css'


const PaginationButtons = ({ totalPages,  handlePreviousPage, handleNextPage, handlePageClick, currentPage } : IPaginationProps) => {
  const {isDark} = useTheme()
  return (
    <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
      <button className={styles.arrow} disabled={currentPage <= 1} onClick={handlePreviousPage}>{'<'}</button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return <button onClick={() => handlePageClick(index + 1)} disabled={index + 1 === currentPage} className={styles.pageNumber} key={index}>{index + 1}</button>
        })}
      </div>

      <button disabled={currentPage >= totalPages} onClick={handleNextPage} className={styles.arrow}>{'>'}</button>
    </div>
  )
}

export default PaginationButtons
