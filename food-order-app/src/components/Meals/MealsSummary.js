import Card from "../UI/Card";
import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.mealsSummary}>
      
        <h1>Delicious Food, Delivered to You</h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      
    </section>
  );
};

export default MealsSummary;
