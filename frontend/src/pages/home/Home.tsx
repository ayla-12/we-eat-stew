import homeBackgroundImage from '@/assets/img/HOME_background.png';
import listeningFufu from '@/assets/img/fufu_png.png';
import homeBubble from '@/assets/img/home_chatbubble.png';
import homeHeader from '@/assets/img/home_header.png';
import { ButtonWishDefault } from '@/assets/svg';
import WishButton from '@/components/Button/WishButton';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
	const navigate = useNavigate(); // useNavigate 훅 사용

	const handleButtonClick = () => {
		navigate('/wish'); // Wish 페이지로 이동
	};

	return (
		<HomeWrapper>
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

export default Home;
