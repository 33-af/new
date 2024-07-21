export interface INews{
    author: string;
    category: CategoryType[];
    decription: string;
    id: string;
    image: string;
    language: string;
    published: string;
    title: string;
    url: string;
}


export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';
export type CategoryType = string;

export interface NewsApiResponse {
    news: INews[];
    page: number;
    status: string;
}

export interface CategoriesApiResponse {
    categories: CategoryType[];
    description: string;
    status: string;
}


export interface IFilters{
    page_number: number;
    page_size: number;
    category: CategoryType | null;
    keywords:string;
}



export  interface IPaginationProps{
    totalPages : number,
  handlePreviousPage: () => void,
  handleNextPage:  () => void,
  handlePageClick:  (page: number) => void,
  currentPage: number;
}

export interface WithSkeletonProps {
    isLoading: boolean;
  }

export type ParamsType = Partial<IFilters>
 
