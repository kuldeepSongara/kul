import { Link } from 'react-router-dom';
import { PATH } from '../consts';

function Widgets() {
  return (
    <div>
      <h1>Widgets</h1>
      <div>
        <Link to={PATH.HOME}>Click here to go back to root page.</Link>
      </div>
    </div>
  );
}

export default Widgets;
