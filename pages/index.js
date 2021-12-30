
import { Fragment, useState } from 'react';
import Head from 'next/head';
import classes from '../components/layout/index.module.css';
import AboutSavta from '../components/recipes/AboutSavta';
//the head is for search engines and for seeing these values on the html page
function HomePage(props) {
  const [isClicked,setIsClicked] = useState(false);
  const clickHandler = () => {
    setIsClicked(!isClicked);
  }
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
        <div className={classes.mainImage}>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0aa1ab90619965.5e4b514e9264a.jpg" alt="Goulash soup" />
        </div>
        <div className={classes.info}>" When life gives you <br />meat and peppers,<br />You better make <br />goulash "</div>
        <div className={classes.info2}>Savta Rachel</div>
        <div >
          <button className={classes.aboutbtn} onClick={clickHandler}>About Savta Rachel</button>
          {isClicked && <AboutSavta/>}
        </div>
        {/* <RecipesList recipes={props.recipes} />; */}
      </div>
    </Fragment>
  );
}


export default HomePage;