import { lineDeco, songContainer } from '@/assets/img';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface SongWrapperProps {
	nickname: string;
	title: string;
	artist: string;
}

const SongWrapper = ({ nickname, title, artist }: SongWrapperProps) => {
	return (
		<Song>
			<TextContent>
				<TextOverlay className="nickname">
					{nickname}의
					<br />
					새해 첫 곡
				</TextOverlay>
				<img src={lineDeco} alt="가름 선" className="line" />
				<TextOverlay className="title">{title}</TextOverlay>
				<TextOverlay className="artist">{artist}</TextOverlay>
			</TextContent>
		</Song>
	);
};

export default SongWrapper;

const Song = styled.div`
	width: 42.4rem;
	height: 21.128rem;
	padding-top: 6.4rem;

	position: relative;

	background-image: url(${songContainer});
	background-size: cover; // 이미지를 화면에 맞게 확대/축소
	background-position: center;
	background-repeat: no-repeat;
`;

const TextContent = styled.div`
	position: absolute;
	left: 6.2rem;

	${flexCssGenerator('flex', 'center', 'center', 'column')}
	img {
		width: 28rem;
	}
`;

const TextOverlay = styled.div`
	text-align: center;

	&.nickname {
		color: ${({ theme }) => theme.colors.green};
		${({ theme }) => theme.fonts.Header};
		padding-bottom: 0.8rem;
	}

	&.title {
		color: ${({ theme }) => theme.colors.green};
		${({ theme }) => theme.fonts.Body};
		padding-top: 1.2rem;
		padding-bottom: 0.4rem;
	}

	&.artist {
		color: ${({ theme }) => theme.colors.green};
		${({ theme }) => theme.fonts.Body2};
	}
`;
