import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div className={classes.mainLayout}>
      <MainNavigation />
      <main >{props.children}</main>
    </div>
  );
}

export default Layout;
