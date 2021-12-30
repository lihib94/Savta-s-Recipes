import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';
import RecipeDetail from '../../components/recipes/RecipeDetail';

function RecipeDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.recipeData.title}</title>
        <meta name='description' content={props.recipeData.description} />
      </Head>
      <RecipeDetail
        image={props.recipeData.image}
        title={props.recipeData.title}
        description={props.recipeData.description}
        ingredients={props.recipeData.ingredients}
        directions={props.recipeData.directions}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://bel:123bel@cluster0.girhn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );
  const db = client.db();

  const recipesCollection = db.collection('recipes');

  //'_id:1' : only includes the id of the object, no other values. fetching 'id' only for every object
  const recipes = await recipesCollection.find({}, { _id: 1 }).toArray();

  client.close();
//fallback: blocking/true --> Next.js will not respond with 404 page if it cant find the page immidiatly.
  return {
    fallback: 'blocking',
    paths: recipes.map((recipe) => ({
      params: { recipeId: recipe._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single recipe

  const recipeId = context.params.recipeId;

  const client = await MongoClient.connect(
    'mongodb+srv://bel:123bel@cluster0.girhn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );
  const db = client.db();

  const recipesCollection = db.collection('recipes');

  const selectedRecipe = await recipesCollection.findOne({
    _id: ObjectId(recipeId),
  });

  client.close();

  return {
    props: {
      recipeData: {
        id: selectedRecipe._id.toString(),
        title: selectedRecipe.title,
        description: selectedRecipe.description,
        image: selectedRecipe.image,
        ingredients: selectedRecipe.ingredients,
        directions: selectedRecipe.directions,
      },
    },
  };
}

export default RecipeDetails;