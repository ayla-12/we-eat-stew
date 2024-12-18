import { lyricsContainer } from '@/assets/img';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface LyricsWrapperProps {
	lyrics: string;
}

const LyricsWrapper = ({ lyrics }: LyricsWrapperProps) => {
	return (
		<Lyrics>
			<p>{lyrics}</p>
		</Lyrics>
	);
};

export default LyricsWrapper;

const Lyrics = styled.div`
	width: 32rem;
	height: 10rem;
	position: absolute;
	top: 18.9rem;
	left: 1.6rem;

	background-image: url(${lyricsContainer});
	background-size: cover; // 이미지를 화면에 맞게 확대/축소
	background-position: center;
	background-repeat: no-repeat;

	${flexCssGenerator('flex', 'center', 'center', 'column')}

	p {
		padding: 1.6rem 2.1rem;
		text-align: center;
		color: ${({ theme }) => theme.colors.lightyellow};
		${({ theme }) => theme.fonts.Body2};
	}
`;
