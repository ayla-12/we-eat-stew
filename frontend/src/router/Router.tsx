import Wish from '@/pages/Wish/Wish';
import Home from '@/pages/home/Home';
import Loading from '@/pages/loading/Loading';
import Result from '@/pages/result/Result';
import { PATH } from '@/router/path.ts';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
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
		// 동적 경로 설정
		path: `${PATH.RESULT}/:id`,
		element: <Result />,
	},
]);
