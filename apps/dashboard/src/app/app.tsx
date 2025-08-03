import styles from './app.module.css';

import { Link } from 'react-router-dom';
import Routing from './routing';
import { PATH } from './consts';

export function App() {
  return (
    <div>
      <div role="navigation">
        <nav className={styles.navigation}>
          <Link to={PATH.HOME}>Home</Link>
          <Link to={PATH.WIDGETS}>Widgets</Link>
        </nav>
      </div>
      <Routing />
    </div>
  );
}

export default App;
