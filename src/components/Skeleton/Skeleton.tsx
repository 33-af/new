
import styles from './Skeleton.module.css'; // Assuming you have styles defined somewhere
import { DirectionType, SkeletonType } from '../../interfaces/index'; // Adjust the import path as needed

interface SkeletonComponentProps {
  type?: SkeletonType;
  count?: number;
  direction?: DirectionType;
}

// Define Skeleton component
const Skeleton = ({
  count = 1,
  type = 'banner',
  direction = 'column',
}: SkeletonComponentProps) => {
  return (
    <>
      {count > 1 ? (
        <ul className={direction === 'column' ? styles.columnList : styles.rowList}>
          {[...Array(count)].map((_, index) => (
            <li key={index} className={type === 'banner' ? styles.banner : styles.item}></li>
          ))}
        </ul>
      ) : (
        <ul>
          <li className={type === 'banner' ? styles.banner : styles.item}></li>
        </ul>
      )}
    </>
  );
};

export default Skeleton;