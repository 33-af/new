export type CategoryType = string;

export interface CategoriesApiResponse {
    categories: CategoryType[];
    description: string;
    status: string;
}
