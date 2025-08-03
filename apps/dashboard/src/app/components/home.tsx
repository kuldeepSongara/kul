import { Link } from 'react-router-dom';
import { PATH } from '../consts';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        This is the generated root route.{' '}
        <Link to={PATH.WIDGETS}>Click here for widgets page.</Link>
      </div>
    </div>
  );
}

export default Home;
