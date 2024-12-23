import Wish from '@/pages/Wish/Wish';
import NotFound from '@/pages/error/NotFound';
import UnexpectedError from '@/pages/error/UnexpectedError';
import Home from '@/pages/home/Home';
import Loading from '@/pages/loading/Loading';
import Result from '@/pages/result/Result';
// 로딩 페이지 추가
import { PATH } from '@/router/path.ts';
import { createBrowserRouter } from 'react-router-dom';

// /loading 경로에서 category가 없으면 홈으로 리다이렉트
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
		element: <Loading />,
	},
	{
		path: `${PATH.RESULT}/:id`,
		element: <Result />,
	},
	{
		path: '/404',
		element: <NotFound />, // 404 페이지
	},
	{
		path: '*', // 모든 경로에서 일치하지 않는 경우 404 페이지로 리다이렉트
		element: <NotFound />,
	},
	{
		path: '/unexpected-error',
		element: <UnexpectedError />, // 예기치 못한 오류 페이지
	},
]);

export default router;
