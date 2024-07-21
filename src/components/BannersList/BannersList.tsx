import withSkeleton from '../../helpers/hocs/withSkeleton'; // Импортируем withSkeleton по умолчанию
import { INews } from '../../interfaces';
import NewsBanner from '../NewsBanner/NewsBanner';
import styles from './BannersList.module.css'

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners } : Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner}/>
      })}
    </ul>
  );
};

// Он добавляет поддержку "скелетонов" — это временные заполнители, которые отображаются до тех пор, пока реальные данные не будут загружены.
const BannersListWithSkeleton = withSkeleton<Props>(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;