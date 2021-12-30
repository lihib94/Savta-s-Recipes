import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Savta's Recipes</div>
      <nav>
        <ul>
        <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/recipes'>Recipes</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/new-recipe'>Add New Recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;