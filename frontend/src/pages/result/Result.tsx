import {
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
import { flexCssGenerator } from '@/styles/customStyle.ts';
import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Result = () => {
	const [nickname, setNickname] = useState('');

	useEffect(() => {
		// localStorage에서 'nickname' 값 가져오기
		const storedNickname = localStorage.getItem('nickname');
		if (storedNickname) {
			setNickname(storedNickname);
		}
	}, []);

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
						<TextOverlay>
							{nickname}의
							<br />
							새해 첫 곡
						</TextOverlay>
					</SongWrapper>
					<TimerWrapper>
						<img src={timerContainer} alt="시간" />
					</TimerWrapper>
					<LyricsWrapper>
						<img src={lyricsContainer} alt="가사" />
					</LyricsWrapper>
				</ContentsWrapper>
			</SaveWrapper>
			<BottomWrapper>
				<SaveButton onClick={handleSaveImage}>꾹 눌러 이미지 저장하기</SaveButton>
				{/* <ButtonWrapper>
					<SaveButton></SaveButton>
					<Group></Group>
				</ButtonWrapper> */}
			</BottomWrapper>
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
`;

const TextOverlay = styled.div`
	position: absolute;
	top: 6.5rem;
	left: 15rem;
	color: ${({ theme }) => theme.colors.green};
	${({ theme }) => theme.fonts.Header};
	text-align: center;
`;
