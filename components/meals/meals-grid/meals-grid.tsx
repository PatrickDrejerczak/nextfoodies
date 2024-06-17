import { MealsType } from "@/types/meals";
import MealItem from "../meal-item/meal-item";
import classes from "./meals-grid.module.css";
import { FC } from "react";

type Props = {
  meals: MealsType;
};

const MealsGrid: FC<Props> = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
