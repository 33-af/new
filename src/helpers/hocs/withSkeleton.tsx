import Skeleton from "../../components/Skeleton/Skeleton";
import { DirectionType, SkeletonType, WithSkeletonProps } from "../../interfaces";


// export interface WithSkeletonProps {  // Экспортируем интерфейс
//   isLoading: boolean;
// }

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
) {
  return function WithSkeleton(props: WithSkeletonProps & P) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
