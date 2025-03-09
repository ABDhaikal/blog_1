import { Category } from "./category";

export interface Blog {
   objectId: string;
   title: string;
   description: string;
   slug: string;
   category: Category;
   thumbnail: string;
   created: number;
   content: string;
   views: number ;
   user: User;
}
