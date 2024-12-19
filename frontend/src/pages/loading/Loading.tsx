import { green2025, listeningFufu, loadingBackgroundImage, loadingBubble, loadingHeader } from '@/assets/img';
import loadingAnimation from '@/assets/lottie/loading.json';
import { categories } from '@/mocks/songData';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import Lottie from 'lottie-react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Loading = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { category } = location.state || {}; // 이전 컴포넌트에서 전달된 상태 확인

	useEffect(() => {
		const loadData = async () => {
			if (!category || !categories[category]) {
				console.error('Invalid category:', category);
				navigate('/wish'); // 카테고리가 유효하지 않을 경우 초기 화면으로 리다이렉트
				return;
			}

			// 최소 3초 지연
			await delay(3000);

			// 해당 카테고리에서 랜덤 곡 선택
			const categorySongs = categories[category];
			const randomSong = categorySongs[Math.floor(Math.random() * categorySongs.length)];

			if (!randomSong) {
				console.error('No songs available in this category:', category);
				navigate('/wish');
				return;
			}

			// 결과 화면으로 이동하며 곡 데이터 전달
			navigate(`/result/${randomSong.id}`, { state: { song: randomSong, category } });
		};

		loadData();
	}, [category, navigate]);

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
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
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
	width: 20rem;
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
	position: relative;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const TextOverlay = styled.div`
	position: absolute;
	top: 7.6rem;
	left: 50%;
	transform: translateX(-50%);
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
