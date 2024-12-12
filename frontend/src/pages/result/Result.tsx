import {
	arrowThree,
	impeachmentFufu,
	lineDeco,
	lyricsContainer,
	red2025,
	resultBottomBackground,
	resultHeader,
	resultSaveBackground,
	songContainer,
	timerContainer,
} from '@/assets/img';
import ArchiveButton from '@/components/Button/ArchiveButton';
import InstaButton from '@/components/Button/InstaButton';
import ListenButton from '@/components/Button/ListenButton';
import SharedButton from '@/components/Button/SharedButton';
import TimerMessage from '@/components/Result/TimerMesseage';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Result = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [nickname, setNickname] = useState('');
	const [song, setSong] = useState(() => location.state?.song);

	useEffect(() => {
		// localStorage에서 닉네임 가져오기
		const storedNickname = localStorage.getItem('nickname');
		if (storedNickname) {
			setNickname(storedNickname);
		}
	}, []);

	useEffect(() => {
		if (!song) {
			// song 정보가 없을 때 fallback 처리
			navigate('/loading', { replace: true });
		}
	}, [song, navigate]);

	if (!song) return <p>Loading...</p>;

	const handleListenButtonClick = () => {
		window.location.href = song.link;
	};

	const handleSharedButtonClick = async () => {
		const url = window.location.href; // 현재 페이지 URL
		const text = '새해 첫 곡과 함께 2025년을 시작해보세요!'; // 공유 메시지
		const title = '2025 새해 첫 곡';

		// Web Share API가 지원되는지 확인
		if (navigator.share) {
			try {
				// 기본 공유 창 열기
				await navigator.share({
					title: title,
					text: text,
					url: url,
				});
				console.log('공유 성공!');
			} catch (error) {
				console.error('공유 실패:', error);
			}
		} else {
			alert('이 브라우저는 공유 기능을 지원하지 않습니다.');
		}
	};

	const handleSaveImage = async () => {
		const saveWrapper = document.getElementById('save-wrapper'); // SaveWrapper 요소 선택
		if (!saveWrapper) return;

		try {
			// html2canvas로 캡처
			const canvas = await html2canvas(saveWrapper, { useCORS: true }); // CORS 이슈 방지
			const imgData = canvas.toDataURL('image/png'); // 이미지 데이터를 URL 형식으로 변환

			// 이미지 다운로드 링크 생성
			const link = document.createElement('a');
			link.href = imgData;
			link.download = 'saved_image.png';
			link.click();
		} catch (error) {
			console.error('Error saving image:', error);
		}
	};

	return (
		<ResultWrapper>
			<SaveWrapper id="save-wrapper">
				<DecoWrapper>
					<img src={red2025} alt="2025 빨간색" className="year" />
					<img src={lineDeco} alt="가름 선" className="line" />
				</DecoWrapper>
				<HeaderWrapper>
					<img src={resultHeader} alt="홈 헤더" />
				</HeaderWrapper>
				<ContentsWrapper>
					<FufuWrapper>
						<img src={impeachmentFufu} alt="탄핵 푸푸" />
					</FufuWrapper>
					<SongWrapper>
						<img src={songContainer} alt="추천 곡" />
						<TextOverlay className="nickname">
							{nickname}의
							<br />
							새해 첫 곡
						</TextOverlay>
						<TextOverlay className="title">{song.title}</TextOverlay>
						<TextOverlay className="artist">{song.artist}</TextOverlay>
					</SongWrapper>
					<TimerWrapper>
						<img src={timerContainer} alt="시간" />
						<MessageWrapper>
							<TimerMessage timestamp={song.timestamp} />
						</MessageWrapper>
					</TimerWrapper>
					<LyricsWrapper>
						<img src={lyricsContainer} alt="가사" />
						<TextOverlay className="lyrics">{song.lyrics}</TextOverlay>
					</LyricsWrapper>
				</ContentsWrapper>
			</SaveWrapper>
			<BottomWrapper>
				<ButtonWrapper>
					<SaveButton onClick={handleSaveImage}>꾹 눌러 이미지 저장하기</SaveButton>
					<ButtonGroup>
						<ListenButton onClick={handleListenButtonClick} />
						<SharedButton onClick={handleSharedButtonClick} />
					</ButtonGroup>
				</ButtonWrapper>
				<InfoWrapper>
					<img src={arrowThree} alt="데코 화살표" className="arrow" />
					<InfoButtonWrapper>
						<ArchiveButton />
						<InstaButton />
					</InfoButtonWrapper>
				</InfoWrapper>
			</BottomWrapper>
		</ResultWrapper>
	);
};

export default Result;

const ResultWrapper = styled.div`
	width: 100%;
	height: 100vh;
`;

const SaveWrapper = styled.div`
	width: 100%;
	height: 77.6rem;
	position: relative;
	background-image: url(${resultSaveBackground});
	background-size: cover; // 이미지를 화면에 맞게 확대/축소
	background-position: center; // 이미지가 중앙에 위치하도록 설정
	background-repeat: no-repeat; // 배경이 반복되지 않도록 설정
	padding-bottom: 2rem;
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

const ContentsWrapper = styled.div`
	${flexCssGenerator('flex', 'center', 'center', 'column')}
`;

const ButtonWrapper = styled.div``;

const BottomWrapper = styled.div`
	width: 100%;
	height: 80.4rem;
	background-color: ${({ theme }) => theme.colors.burgundy};
	background-image: url(${resultBottomBackground});
	background-size: cover; // 이미지를 화면에 맞게 확대/축소
	background-position: center; // 이미지가 중앙에 위치하도록 설정
	background-repeat: no-repeat; // 배경이 반복되지 않도록 설정
`;

const DecoWrapper = styled.div`
	z-index: 10;
	position: relative;

	img {
		position: absolute;
	}

	.year {
		top: 10.3rem;
		left: -3.6rem;
		width: 21.469rem;
		height: auto;
	}

	.line {
		top: 48.717rem;
		left: 4.8rem;
		width: 28rem;
	}
`;

const FufuWrapper = styled.div`
	width: 28rem;
	height: 20rem;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const SongWrapper = styled.div`
	width: 42.4rem;
	height: 21.128rem;
	position: absolute;
	top: 35.6rem;
	left: -1.4rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const LyricsWrapper = styled.div`
	width: 32rem;
	height: 10rem;
	position: absolute;
	top: 56.2rem;
	left: 1.6rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
const TimerWrapper = styled.div`
	width: 32rem;
	height: 10rem;
	position: absolute;
	top: 64.9rem;
	left: 3.9rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const SaveButton = styled.div`
	color: ${({ theme }) => theme.colors.lightyellow};
	border: none;
	padding: 1rem 2rem;
	cursor: pointer;
	${({ theme }) => theme.fonts.Header2};
	text-align: center;
`;

const TextOverlay = styled.div`
	position: absolute;
	text-align: center;
	transform: translate(-50%, -50%);
	left: 19.8rem;

	&.nickname {
		top: 9.8rem;
		color: ${({ theme }) => theme.colors.green};
		${({ theme }) => theme.fonts.Header};
	}

	&.title {
		top: 15.517rem;
		color: ${({ theme }) => theme.colors.green};
		${({ theme }) => theme.fonts.Body};
	}

	&.artist {
		top: 17.817rem;
		color: ${({ theme }) => theme.colors.green};
		${({ theme }) => theme.fonts.Body2};
	}

	&.lyrics {
		width: 28rem;
		height: 6.8rem;
		top: 5.817rem;
		left: 15.9rem;
		color: ${({ theme }) => theme.colors.lightyellow};
		${({ theme }) => theme.fonts.Body2};
	}
`;

const MessageWrapper = styled.div`
	position: absolute;
	width: 30rem;
	height: 4rem;
	top: 3.4rem;
	left: 1rem;
	text-align: center;
	color: ${({ theme }) => theme.colors.green};
	${({ theme }) => theme.fonts.Header3};
`;

const ButtonGroup = styled.div`
	${flexCssGenerator('flex', 'center', 'center', 'row')}
	gap: 1.2rem;
`;

const InfoWrapper = styled.div`
	${flexCssGenerator('flex', 'center', 'center', 'column')}
	gap: 2.341rem;
	padding-top: 21rem;

	.arrow {
		width: 9.527rem;
		height: 5.859rem;
	}
`;
const InfoButtonWrapper = styled.div`
	${flexCssGenerator('flex', 'center', 'center', 'column')}
	gap: 1.2rem;
`;
