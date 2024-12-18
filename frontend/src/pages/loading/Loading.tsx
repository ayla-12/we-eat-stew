import { green2025, listeningFufu, loadingBackgroundImage, loadingBubble, loadingHeader } from '@/assets/img';
import loadingAnimation from '@/assets/lottie/loading.json';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import Lottie from 'lottie-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Loading = () => {
	const navigate = useNavigate();

	// 3초 후에 /result로 이동
	useEffect(() => {
		const timer = setTimeout(() => {
			navigate('/result'); // 3초 후에 /result로 이동
		}, 3000);

		// 컴포넌트가 언마운트되면 타이머를 정리
		return () => clearTimeout(timer);
	}, [navigate]);

	return (
		<LoadingWrapper>
			<DecoWrapper>
				<img src={green2025} alt="2025 초록색" className="year" />
			</DecoWrapper>
			<LoadingHeaderWrapper>
				<img src={loadingHeader} alt="헤더" />
			</LoadingHeaderWrapper>
			<LoadingContentWrapper>
				<LottieNote>
					<Lottie animationData={loadingAnimation} loop={true} style={{ width: '11.6rem', height: '6rem' }} />
				</LottieNote>
				<ImageWrapper>
					<img src={listeningFufu} alt="푸푸" />
				</ImageWrapper>
				<BubbleWrapper>
					<img src={loadingBubble} alt="말풍선" />
					<TextOverlay>
						AI푸푸가 추천곡을
						<br />
						고르고 있어요!
					</TextOverlay>
				</BubbleWrapper>
			</LoadingContentWrapper>
		</LoadingWrapper>
	);
};

export default Loading;

const LoadingWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${loadingBackgroundImage});
	background-size: cover; // 이미지를 화면에 맞게 확대/축소
	background-position: center; // 이미지가 중앙에 위치하도록 설정
	background-repeat: no-repeat; // 배경이 반복되지 않도록 설정
`;

const LoadingHeaderWrapper = styled.div`
	width: 100%;
	height: auto;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
`;

const LoadingContentWrapper = styled.div`
	padding: 4.3rem 6.1rem 4rem 6.7rem;
	${flexCssGenerator('flex', 'center', 'center', 'column')}
	gap: 1.8rem;
`;

const LottieNote = styled.div`
	width: 20rem; /* 로티 애니메이션 크기 조정 */
	height: 6rem;
	display: flex;
	justify-content: center;
	align-items: center;
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

const BubbleWrapper = styled.div`
	width: 24.7rem;
	height: 16.8rem;
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
