import classes from "./MainImage.module.css";
import mealsImg from "../../assets/meals.jpg";

const MainImage = (props) => {
  return (
    <div className={classes.mainImage}>
      <img src={mealsImg} alt="A table full of delicious meals" />
    </div>
  );
};

export default MainImage;
