export interface Blog {
   objectId: string;
   title: string;
   description: string;
   slug: string;
   category: string;
   thumbnail: string;
   created: number;
   content: string;
   views: number|null;
}
