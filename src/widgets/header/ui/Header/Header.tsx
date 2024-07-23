import { useTheme } from '@/app/providers/ThemeProvider';
import { formDate } from '@/shared/helpers/formatDate';
import ThemeButton from '@/features/theme/ui/themeButton/themeButton';
import styles from './Header.module.css';




const Header = () => {
  const {isDark} = useTheme();
  return (
    <header
    className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}> News REACTIFY</h1>
        <p className={styles.date}>{formDate(new Date())}</p>
      </div>

      <ThemeButton/>

    </header>
  )
}

export default Header