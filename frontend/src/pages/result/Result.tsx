import { resultBottomBackground, resultSaveBackground } from '@/assets/img';
import styled from 'styled-components';

const Result = () => {
	return (
		<ResultWrapper>
			<SaveWrapper></SaveWrapper>
			<BottomWrapper></BottomWrapper>
		</ResultWrapper>
	);
};

export default Result;

const ResultWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.burgundy};
`;

const SaveWrapper = styled.div`
	width: 100%;
	height: 77.6rem;
	background-image: url(${resultSaveBackground});
	background-size: cover; // 이미지를 화면에 맞게 확대/축소
	background-position: center; // 이미지가 중앙에 위치하도록 설정
	background-repeat: no-repeat; // 배경이 반복되지 않도록 설정
`;

const BottomWrapper = styled.div`
	width: 100%;
	height: 80.4rem;
	background-color: ${({ theme }) => theme.colors.burgundy};
	background-image: url(${resultBottomBackground});
	background-size: cover; // 이미지를 화면에 맞게 확대/축소
	background-position: center; // 이미지가 중앙에 위치하도록 설정
	background-repeat: no-repeat; // 배경이 반복되지 않도록 설정
`;
