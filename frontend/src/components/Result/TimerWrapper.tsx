import TimerMessage from './TimerMesseage';
import { timerContainer } from '@/assets/img';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface TimerWrapperProps {
	song: number;
}

const TimerWrapper = ({ song }: TimerWrapperProps) => {
	return (
		<Timer>
			<MessageWrapper>
				<TimerMessage timestamp={song} />
			</MessageWrapper>
		</Timer>
	);
};

export default TimerWrapper;

const Timer = styled.div`
	width: 32rem;
	height: 10rem;
	${flexCssGenerator('flex', 'center', 'center', 'column')}

	position: absolute;
	top: 27.6rem;
	left: 3.9rem;

	background-image: url(${timerContainer});
	background-size: cover; // 이미지를 화면에 맞게 확대/축소
	background-position: center;
	background-repeat: no-repeat;
`;

const MessageWrapper = styled.div`
	width: 27.9rem;
	height: 4rem;
	text-align: center;
	color: ${({ theme }) => theme.colors.green};
	${({ theme }) => theme.fonts.Header3};
`;
