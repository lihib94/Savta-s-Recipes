import AboutSavte from '../../components/recipes/AboutSavta'
import classes from '../../components/recipes/AboutSavta.module.css';
const About = () => {
    return(
        <div className={classes.background}>
             <div className={classes.headline}>About Savta Rachel</div>
            <AboutSavte/>
        </div>
   
    );
}
export default About;