


import styles from './LatestNews.module.css'

import BannersList from '../BannersList/BannersList'


// Таким образом, LatestNews является контейнером, который оборачивает BannersList и передает ему необходимые данные 
const LatestNews = ({banners, isLoading}) => {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  )
}

export default LatestNews
