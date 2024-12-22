import Wish from '@/pages/Wish/Wish';
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
]);

export default router;
