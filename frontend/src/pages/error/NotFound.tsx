import { errorBackground, fufuError, loadingHeader, yellow2025 } from '@/assets/img';
import HomeButton from '@/components/Button/HomeButton';
import ErrorBubble from '@/components/error/errorBubble';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

	const handleButtonClick = () => {
		navigate('/'); // 홈으로 이동
	};

	return (
		<Wrapper>
			<DecoWrapper>
				<img src={yellow2025} alt="2025" className="year" />
			</DecoWrapper>
			<HeaderWrapper>
				<img src={loadingHeader} alt="헤더" />
			</HeaderWrapper>
			<ContentWrapper>
				<ImageWrapper>
					<img src={fufuError} alt="푸푸" />
				</ImageWrapper>
				<ErrorBubble />
				<HomeButton onClick={handleButtonClick} />
			</ContentWrapper>
		</Wrapper>
	);
};

export default NotFound;

const Wrapper = styled.div`
	width: 100%;
	height: 81.2rem; //디폴트는 원래 배경 사이즈인 812px로 고정을 해두기기
	background-image: url(${errorBackground});
	background-size: cover; /* 기본적으로 cover로 설정하여 비율을 유지하며 꽉 채움 */
	background-position: center; /* 중앙에 배경 이미지 위치 */
	background-repeat: no-repeat; /* 배경 이미지 반복 방지 */

	/* 높이가 812px 이상인 화면에서만 배경이 100vh로 꽉 차게 */
	@media (min-height: 812px) {
		height: 100vh; /* 812px 이상에서는 화면 세로 꽉 채우기 */
		background-size: cover; /* 배경 이미지를 꽉 채우도록 */
	}

	/* 812px 이하인 화면에서는 배경이 잘리지 않도록 */
	@media (max-height: 811px) {
		background-size: contain; /* 화면에 맞게 이미지 크기 조정, 잘리지 않음 */
	}
`;

const DecoWrapper = styled.div`
	z-index: 10;
	position: relative;

	img {
		position: absolute;
	}

	.year {
		top: 10.3rem;
		width: 18rem;
		height: auto;
	}
`;

const HeaderWrapper = styled.div`
	width: 100%;
	height: auto;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
`;

const ContentWrapper = styled.div`
	padding: 4.3rem 6.1rem 4rem 6.7rem;
	${flexCssGenerator('flex', 'center', 'center', 'column')}
	gap: 1.8rem;
`;

const ImageWrapper = styled.div`
	width: 33.9rem;
	height: 24.9rem;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
