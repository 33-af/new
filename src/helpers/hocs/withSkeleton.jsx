import Skeleton from "../../components/Skeleton/Skeleton";


function withSkeleton(Component, type, count, direction){
    return function WithSkeleton(props){
        const {isLoading, ...restProps} = props;

        if(isLoading){
            // Возвращает новый компонент WithSkeleton, который проверяет isLoading.
            // отображается Skeleton с заданным типом и количеством
            return <Skeleton type="type" count={count} direction={direction} />
        }
        // отображается исходный компонент с переданными ему свойствами.
        return <Component {...restProps}/>
    }
}

export default withSkeleton