import { arrowThree, red2025, resultBottomBackground, resultHeader, resultSaveBackground } from '@/assets/img';
import ArchiveButton from '@/components/Button/ArchiveButton';
import InstaButton from '@/components/Button/InstaButton';
import ListenButton from '@/components/Button/ListenButton';
import SharedButton from '@/components/Button/SharedButton';
import FufuWrapper from '@/components/Result/FufuWrapper';
import LyricsWrapper from '@/components/Result/LyricsWrapper';
import SongWrapper from '@/components/Result/SongWrapper';
import TimerWrapper from '@/components/Result/TimerWrapper';
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
		//로컬스토리지 가져오기
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
				</DecoWrapper>
				<HeaderWrapper>
					<img src={resultHeader} alt="홈 헤더" />
				</HeaderWrapper>
				<ContentsWrapper>
					<FufuWrapper category="impeachment" />
					<TextWrapper>
						<SongPosition>
							<SongWrapper nickname={nickname} title={song.title} artist={song.artist} />
						</SongPosition>
						<TimerWrapper song={song.timestamp} />
						<LyricsWrapper lyrics={song.lyrics} />
					</TextWrapper>
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
	${flexCssGenerator('flex', '', '', 'column')}
	width: 37.5rem;
`;

const TextWrapper = styled.div`
	position: relative;
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
`;

const SongPosition = styled.div`
	position: absolute;
	top: -1.7rem;
	left: -1.4rem;
`;

const SaveButton = styled.div`
	color: ${({ theme }) => theme.colors.lightyellow};
	border: none;
	padding: 1rem 2rem;
	cursor: pointer;
	${({ theme }) => theme.fonts.Header2};
	text-align: center;
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
