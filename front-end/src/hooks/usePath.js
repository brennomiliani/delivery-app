import { useLocation, useRouteMatch } from 'react-router-dom';

const usePath = () => {
  const { pathname } = useLocation();
  const { params: { id } } = useRouteMatch();
  return { pathname, id };
};

export default usePath;
