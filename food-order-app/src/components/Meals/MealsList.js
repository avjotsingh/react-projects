import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import classes from "./MealsList.module.css";
import useHttp from "../../hooks/use-http";

const MEALS_URL = 'https://react-meals-10cb7-default-rtdb.firebaseio.com/meals.json'

const MealsList = (props) => {

  const [meals, setMeals] = useState([]);
  const {isLoading, error, sendRequest: fetchMeals} = useHttp();

  const transformFn = (mealsData) => {
    const mealItems = [];
    for (const mealId in mealsData) {
      mealItems.push({
        id: mealId,
        name: mealsData[mealId].name,
        description: mealsData[mealId].description,
        price: mealsData[mealId].price
      })
    }

    setMeals(mealItems);
  }

  useEffect(() => {
    fetchMeals({url: MEALS_URL}, transformFn)

  }, [fetchMeals])

  return (
    <div className={classes.mealsList}>
      <Card>
        {isLoading && <p>Loading menu...</p>}
        {error !== null && <p>{error}</p>}
        <ul>
          {meals.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              price={meal.price}
              description={meal.description}
            />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default MealsList;
