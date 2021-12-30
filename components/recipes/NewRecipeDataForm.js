import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewRecipeDataForm.module.css';

function NewRecipeDataForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const ingredientsInputRef = useRef();
  const descriptionInputRef = useRef();
  const directionsInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredIngredients = ingredientsInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDirections = directionsInputRef.current.value;

    const recipeData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      ingredients: enteredIngredients,
      directions: enteredDirections,
    };

    props.onAddRecipe(recipeData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Recipe Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Recipe Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='2'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='ingredients'>Ingredients</label>
          <textarea
            id='ingredients'
            required
            rows='5'
            ref={ingredientsInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='directions'>Directions</label>
          <textarea
            id='directions'
            required
            rows='5'
            ref={directionsInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Recipe</button>
        </div>
      </form>
    </Card>
  );
}

export default NewRecipeDataForm;
