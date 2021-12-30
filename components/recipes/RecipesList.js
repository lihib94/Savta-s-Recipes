import RecipeItem from './RecipeItem';
import classes from './RecipesList.module.css';

function RecipesList(props) {
  return (
    <ul className={classes.list}>
      {props.recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          title={recipe.title}
          description={recipe.description}
          ingredients={recipe.ingredients}
          directions={recipe.directions}
        />
      ))}
    </ul>
  );
}

export default RecipesList;
