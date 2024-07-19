
import withSkeleton from '../../helpers/hocs/withSkeleton';
import NewsBanner from '../NewsBanner/NewsBanner';
import styles from './BannersList.module.css'

const BannersList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner}/>
      })}
    </ul>
  );
};

// Он добавляет поддержку "скелетонов" — это временные заполнители, которые отображаются до тех пор, пока реальные данные не будут загружены.
const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10,'row');

export default BannersListWithSkeleton;