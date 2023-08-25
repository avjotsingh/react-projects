import Card from "../UI/Card";
import MealItem from "./MealItem";
import classes from "./MealsList.module.css";

const DUMMY_MEALS = [
  {
    id: "iteam1",
    name: "Poori Sabzi",
    description: "Spiced potato curry served with crispy Indian fried bread",
    price: 70,
  },
  {
    id: "item2",
    name: "Poha",
    description: "Indian breakfast made with flattened rice, onions, spices, herbs, lemon juice, and peanuts",
    price: 50,
  },
  {
    id: "item3",
    name: "Roasted Chicken",
    description: "Roasted chicken breast served with mashed potatoes, veggies, and rice",
    price: 125,
  },
  {
    id: "item4",
    name: "Vegatable Soup",
    description: "Soup made with various vegetables, leafy greens, herbs, and spices",
    price: 80,
  },
];

const MealsList = (props) => {
  return (
    <div className={classes.mealsList}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
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
