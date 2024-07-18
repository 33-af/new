import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import withSkeleton from '../../helpers/hocs/withSkeleton';
import Image from '../Image/Image'
import styles from './NewsBanner.module.css'

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      {item?.image && <Image image={item.image} />}
      <h3 className={styles.title}>{item?.title}</h3>
      <p className={styles.extra}>{item?.published ? formatTimeAgo(item.published) : 'Unknown time'} by {item?.author || 'Unknown author'}</p>
    </div>
  );
};

// При использовании этих компонентов, они получают проп isLoading и, в зависимости от его значения, отображают либо Skeleton, либо оригинальный компонент.

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);
export default NewsBannerWithSkeleton;