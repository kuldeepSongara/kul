import { Route, Routes } from 'react-router-dom';
import { PATH } from './consts';
import Widgets from './components/widgets';
import Home from './components/home';

function Routing() {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<Home />} />
      <Route path={PATH.WIDGETS} element={<Widgets />} />
    </Routes>
  );
}

export default Routing;
