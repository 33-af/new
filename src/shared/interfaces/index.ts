

export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';
export type CategoryType = string;




export interface IFilters{
    page_number: number;
    page_size: number;
    category: CategoryType | null;
    keywords:string;
}



export interface WithSkeletonProps {
    isLoading: boolean;
  }

export type ParamsType = Partial<IFilters>
 
