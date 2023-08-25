import MealsList from './MealsList';
import MealsSummary from './MealsSummary';

const Meals = props => {
    return <div>
        <MealsSummary />
        <MealsList />
    </div>
}

export default Meals;