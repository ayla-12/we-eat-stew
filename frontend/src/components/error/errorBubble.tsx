import { homeBubble } from '@/assets/img';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

const ErrorBubble = () => {
	return (
		<ChatBubbleWrapper>
			<Title>앗, 없는 페이지예요!</Title>
			<Text>
				경로를 다시 한 번 확인해주세요.
				<br />
				혹시 문제가 있다면
				<br />
				we.eat.stew@gmail.com으로
				<br />
				문의해 주세요!
			</Text>
		</ChatBubbleWrapper>
	);
};

export default ErrorBubble;

const ChatBubbleWrapper = styled.div`
	width: 24.7rem;
	height: 21.7rem;

	${flexCssGenerator('flex', 'center', 'center', 'column')}
    gap: 1rem;

	padding-top: 4rem;
	position: relative; /* 자식 요소를 절대 위치로 설정할 수 있도록 하기 위해 상대 위치로 설정 */
	background-image: url(${homeBubble});
	background-size: cover; // 이미지를 화면에 맞게 확대/축소
	background-position: center;
	background-repeat: no-repeat;
`;

const Title = styled.h1`
	color: ${({ theme }) => theme.colors.lightyellow};
	${({ theme }) => theme.fonts.Body};
`;

const Text = styled.div`
	color: ${({ theme }) => theme.colors.lightyellow};
	${({ theme }) => theme.fonts.Body2};
	text-align: center;
`;
