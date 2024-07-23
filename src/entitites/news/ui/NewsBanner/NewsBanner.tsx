import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo"
import { INews } from '../..';
import styles from './NewsBanner.module.css'
import Image from "@/shared/ui/Image/Image";


interface Props{
  item: INews
}

const NewsBanner = ({ item }: Props) => {
  return (
    <div className={styles.banner}>
       <Image image={item?.image} />
      <h3 className={styles.title}>{item?.title}</h3>
      <p className={styles.extra}>{item?.published ? formatTimeAgo(item.published) : 'Unknown time'} by {item?.author || 'Unknown author'}</p>
    </div>
  );
};



export default NewsBanner;