// our-domain.com/new-recipe
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import classes from '../../components/recipes/NewRecipeDataForm.module.css';
import NewRecipeDataForm from '../../components/recipes/NewRecipeDataForm';

function NewRecipePage() {
  const router = useRouter();

  async function addRecipeHandler(enteredRecipeData) {
    const response = await fetch('/api/new-recipe', {
      method: 'POST',
      body: JSON.stringify(enteredRecipeData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Recipe</title>
        <meta
          name='description'
          content='Add your own recipe and create amazing networking opportunities.'
        />
      </Head>
      <div className={classes.indexform}>
        <NewRecipeDataForm onAddRecipe={addRecipeHandler} />
      </div>

    </Fragment>
  );
}

export default NewRecipePage;