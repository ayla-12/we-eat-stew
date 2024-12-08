import {
	arrowRed,
	homeBackgroundImage,
	homeBubble,
	homeHeader,
	listeningFufu,
	pink2025,
	questionMarkRed,
} from '@/assets/img';
import WishButton from '@/components/Button/WishButton';
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
					{/* listeningFufu를 이미지로 삽입 */}
					<img src={listeningFufu} alt="Listening Fufu" />
				</ImageWrapper>
				<ChatBubbleWrapper>
					<img src={homeBubble} alt="말풍선" />
					<TextOverlay>
						새해 첫 곡이
						<br />
						한 해를 결정한다는데
						<br />
						소원을 입력하면
						<br />
						AI푸푸가 노래를 골라줄게!
					</TextOverlay>
				</ChatBubbleWrapper>
				<WishButton onClick={handleButtonClick} />
			</HomeContentWrapper>
		</HomeWrapper>
	);
};

const HomeWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${homeBackgroundImage});
	background-size: cover; // 이미지를 화면에 맞게 확대/축소
	background-position: center; // 이미지가 중앙에 위치하도록 설정
	background-repeat: no-repeat; // 배경이 반복되지 않도록 설정
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

const ChatBubbleWrapper = styled.div`
	width: 24.7rem;
	height: 21.7rem;
	margin-bottom: 0.6rem;
	position: relative; /* 자식 요소를 절대 위치로 설정할 수 있도록 하기 위해 상대 위치로 설정 */

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const TextOverlay = styled.div`
	position: absolute;
	top: 7.6rem; /* 말풍선의 중앙에 텍스트를 배치 */
	left: 50%;
	transform: translateX(-50%); /* 텍스트를 정확히 중앙에 위치시키기 위해 */
	color: ${({ theme }) => theme.colors.lightyellow};
	${({ theme }) => theme.fonts.Body};
	text-align: center;
	width: 100%;
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
