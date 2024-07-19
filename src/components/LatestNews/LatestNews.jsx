


import styles from './LatestNews.module.css'

import BannersList from '../BannersList/BannersList'
import { useFetch } from '../../helpers/hooks/useFetch'
import { getLatestNews } from '../../api/apiNews'


// Таким образом, LatestNews является контейнером, который оборачивает BannersList и передает ему необходимые данные 
const LatestNews = () => {
  const {data, isLoading} = useFetch(getLatestNews)
  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  )
}

export default LatestNews
