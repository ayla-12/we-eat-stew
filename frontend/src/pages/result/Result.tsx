import { arrowThree, red2025, resultBottomBackground, resultHeader, resultSaveBackground } from '@/assets/img';
import ArchiveButton from '@/components/Button/ArchiveButton';
import InstaButton from '@/components/Button/InstaButton';
import ListenButton from '@/components/Button/ListenButton';
import RetryButton from '@/components/Button/RetryButton';
import SharedButton from '@/components/Button/SharedButton';
import FufuWrapper from '@/components/Result/FufuWrapper';
import LyricsWrapper from '@/components/Result/LyricsWrapper';
import SongWrapper from '@/components/Result/SongWrapper';
import TimerWrapper from '@/components/Result/TimerWrapper';
import DownloadSvg from '@/components/Result/downloadSvg';
import { Song, songById } from '@/mocks/songData';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Result = () => {
	const { id } = useParams<{ id: string }>();
	const location = useLocation();
	const navigate = useNavigate();
	const [nickname, setNickname] = useState('');
	const [songData, setSongData] = useState<Song | null>(null);
	const category = location.state?.category || null; // loading에서 넘어온 category

	useEffect(() => {
		// 로컬 스토리지에서 닉네임 불러오기
		const storedNickname = localStorage.getItem('nickname');
		if (storedNickname) setNickname(storedNickname);
	}, []);

	useEffect(() => {
		// id로 곡 정보 가져오기
		if (id) {
			const song = songById[parseInt(id, 10)];
			if (song) {
				setSongData(song);
			} else {
				console.error('Invalid song ID:', id);
				navigate('/404', { replace: true }); // 잘못된 id 처리
			}
		}
	}, [id, navigate]);

	const handleListenButtonClick = () => {
		if (songData) window.location.href = songData.link;
	};

	const handleRetryButtonClick = () => {
		navigate('/'); // 홈으로 리다이렉션
	};
	const handleSharedButtonClick = async () => {
		// 초기 화면 링크로 공유하려면 URL을 고정
		const text = `2026년 모든 목표를 이룰 ${nickname}의 새해 첫곡은?\n\n${songData?.artist}의 <${songData?.title}>\n나만의 새해 첫 곡 추천 받으러 가기\n⬇️⬇️⬇️\nhttps://play-your-wish.vercel.app/\n#Play_Your_Wish`;
		const title = 'stew!와 함께하는 2025 새해 첫 곡';

		// saveWrapper의 영역을 이미지로 저장
		const saveWrapper = document.getElementById('save-wrapper');
		if (!saveWrapper) {
			alert('이미지를 불러오는 데 실패했습니다.');
			return;
		}

		try {
			const canvas = await html2canvas(saveWrapper, { useCORS: true });
			const imgData = canvas.toDataURL('image/jpeg'); // 이미지 파일을 base64로 변환

			// 이미지 파일을 Blob 형태로 변환
			const imgBlob = await (await fetch(imgData)).blob();
			const file = new File([imgBlob], 'image.jpg', { type: 'image/jpeg' });

			// Share API 지원 여부 확인
			if (navigator.share) {
				try {
					await navigator.share({
						title,
						text,
						files: [file], // 이미지를 공유에 포함
					});
				} catch (error) {
					console.error('공유 실패:', error);
				}
			} else {
				alert('이 브라우저는 공유 기능을 지원하지 않습니다.');
			}
		} catch (error) {
			console.error('Error capturing image:', error);
		}
	};

	const handleSaveImage = async () => {
		const saveWrapper = document.getElementById('save-wrapper');
		if (!saveWrapper) return;

		try {
			const canvas = await html2canvas(saveWrapper, { useCORS: true });
			const imgData = canvas.toDataURL('image/png');
			const link = document.createElement('a');
			link.href = imgData;
			link.download = 'saved_image.png';
			link.click();
		} catch (error) {
			console.error('Error saving image:', error);
		}
	};

	// songData나 category가 로드되지 않았을 때 로딩 화면 표시
	if (!songData) {
		return <p>Loading...</p>;
	}

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
					<FufuWrapper category={category} />
					<TextWrapper>
						<SongPosition>
							<SongWrapper nickname={nickname || '당신'} title={songData.title} artist={songData.artist} />
						</SongPosition>
						<TimerWrapper song={songData.timestamp} />
						<LyricsWrapper lyrics={songData.lyrics} />
					</TextWrapper>
				</ContentsWrapper>
			</SaveWrapper>
			<BottomWrapper>
				<ButtonWrapper>
					<SaveButton onClick={handleSaveImage}>
						여길 눌러 이미지 저장하기 <DownloadSvg />
					</SaveButton>
					<ButtonGroup>
						<ListenButton onClick={handleListenButtonClick} />
						<SharedButton onClick={handleSharedButtonClick} />
					</ButtonGroup>
					<RetryButton onClick={handleRetryButtonClick} />
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
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
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
	margin-top: 1.3rem;
`;

const TextWrapper = styled.div`
	position: relative;
`;

const ButtonWrapper = styled.div`
	${flexCssGenerator('flex', 'center', 'center', 'column')}
	gap: 2rem;
`;

const BottomWrapper = styled.div`
	width: 100%;
	height: 89.1rem;
	background-color: ${({ theme }) => theme.colors.burgundy};
	background-image: url(${resultBottomBackground});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
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
	cursor: pointer;
	${({ theme }) => theme.fonts.Header2};
	text-align: center;
	${flexCssGenerator('flex', 'center', 'center', 'row')}
	gap: 0.4rem;
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
