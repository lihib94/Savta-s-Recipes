
import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import RecipesList from '../../components/recipes/RecipesList';
import classes from '../../components/layout/Layout.module.css';

//the head is for search engines and for seeing these values on the html page
function Recipes(props) {
  return (
    <Fragment>
      <div className={classes.mainLayout}>
        <Head>
          <title>Savta's Recipes</title>
          <meta
            name='description'
            content='Browse a huge list of highly active React Recipes!'
          />
        </Head>
        <RecipesList recipes={props.recipes} />;
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://bel:123bel@cluster0.girhn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );
  const db = client.db();

  const recipesCollection = db.collection('recipes');

  const recipes = await recipesCollection.find().toArray();

  client.close();

  return {
    props: {
      recipes: recipes.map((recipe) => ({
        title: recipe.title,
        description: recipe.description,
        image: recipe.image,
        ingredients: recipe.ingredients,
        directions: recipe.directions,
        id: recipe._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Recipes;