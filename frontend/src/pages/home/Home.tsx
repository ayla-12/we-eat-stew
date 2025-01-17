import {
	arrowRed,
	homeBackgroundImage,
	homeHeader,
	listeningFufu,
	pink2025,
	questionMarkRed,
} from '@/assets/img';
import WishButton from '@/components/Button/WishButton';
import HomeChatBubble from '@/components/Home/HomeChatBubble';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Home = () => {
	const navigate = useNavigate(); // useNavigate 훅 사용

	const handleButtonClick = () => {
		navigate('/wish'); // Wish 페이지로 이동
	};

	return (
		<HomeWrapper>
			<DecoWrapper>
				<img src={pink2025} alt="2025 핑크색" className="year" />
				<img src={questionMarkRed} alt="물음표" className="questionMark" />
				<img src={arrowRed} alt="화살표" className="arrow" />
			</DecoWrapper>
			<HomeHeaderWrapper>
				<img src={homeHeader} alt="홈 헤더" />
			</HomeHeaderWrapper>
			<HomeContentWrapper>
				<ImageWrapper>
					<img src={listeningFufu} alt="Listening Fufu" />
				</ImageWrapper>
				<HomeChatBubble />
				<WishButton onClick={handleButtonClick} />
			</HomeContentWrapper>
		</HomeWrapper>
	);
};

const HomeWrapper = styled.div`
	width: 100%;
	height: 81.2rem; //디폴트는 원래 배경 사이즈인 812px로 고정을 해두기기
	background-image: url(${homeBackgroundImage});
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

const HomeHeaderWrapper = styled.div`
	width: 100%;
	height: auto;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
`;

const HomeContentWrapper = styled.div`
	padding: 4.3rem 6.1rem 4rem 6.7rem;
	${flexCssGenerator('flex', 'center', 'center', 'column')}
	gap: 1.8rem;
`;

const ImageWrapper = styled.div`
	width: 23.1rem;
	height: 24.4rem;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

// 물음표 애니메이션: 왼쪽으로 회전 후 오른쪽으로 회전
const rotateDeco = keyframes`
		0% {
		transform: rotate(0deg); /* 원래 위치 */
		}
		25% {
		transform: rotate(-10deg); /* 왼쪽으로 10도 회전 */
		}
		50% {
		transform: rotate(0deg); /* 오른쪽으로 10도 회전 */
		}
		75%{
		transform: rotate(-10deg); /* 오른쪽으로 10도 회전 */
		}
		100% {
		transform: rotate(0deg); /* 오른쪽으로 10도 회전 */
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

	.questionMark {
		top: 15.3rem;
		right: 3.35rem;
		width: 8.65rem;
		animation: ${rotateDeco} 2s infinite;
	}

	.arrow {
		top: 67rem;
		left: 1.8rem;
		width: 5.6rem;
	}
`;

export default Home;
