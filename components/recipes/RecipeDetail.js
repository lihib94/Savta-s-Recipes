import classes from './RecipeDetail.module.css';
function RecipeDetail(props) {
  return (
    <section className={classes.detail}>
      <div className={classes.image}>
        <img
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className={classes.container}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div className={classes.titles}>Ingredients</div>
      <p>{props.ingredients}</p>
      <div className={classes.titles}>method</div>
      <p>{props.directions}</p>
      </div>
    </section>
    
  );
}

export default RecipeDetail;