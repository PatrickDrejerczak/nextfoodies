export type MealsType = [
  {
    id: string;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
  }
];

export type MealType = {
  id?: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email?: string;
  instructions: any;
};
