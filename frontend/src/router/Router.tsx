import Wish from '@/pages/Wish/Wish';
import Home from '@/pages/home/Home';
import Result from '@/pages/result/Result';
import { PATH } from '@/router/path.ts';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// /loading 경로로 접근하면 /로 리다이렉트
const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Home />,
  },
  {
    path: PATH.WISH,
    element: <Wish />,
  },
  {
    path: PATH.LOADING,
    element: <Navigate to={PATH.HOME} />, // /loading으로 접근하면 /로 리다이렉트
  },
  {
    path: `${PATH.RESULT}/:id`,
    element: <Result />,
  },
]);

export default router;
