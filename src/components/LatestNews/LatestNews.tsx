


import styles from './LatestNews.module.css'

import BannersList from '../BannersList/BannersList'
import { useGetLatestNewsQuery } from '../../store/services/newsApi'


// Таким образом, LatestNews является контейнером, который оборачивает BannersList и передает ему необходимые данные 
const LatestNews = () => {
  // const {data, isLoading} = useFetch <NewsApiResponse, null>(getLatestNews)
  const { data, isLoading } = useGetLatestNewsQuery(null)
    
  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  )
}

export default LatestNews
