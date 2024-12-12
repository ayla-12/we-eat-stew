import { homeBubble } from '@/assets/img';
import styled from 'styled-components';

const HomeChatBubble = () => {
	return (
		<ChatBubbleWrapper>
			<TextOverlay>
				새해 첫 곡이
				<br />
				한 해를 결정한다는데...
				<br />
				소원을 입력하면
				<br />
				AI푸푸가 노래를 골라줄게!
			</TextOverlay>
		</ChatBubbleWrapper>
	);
};

export default HomeChatBubble;

const ChatBubbleWrapper = styled.div`
	width: 24.7rem;
	height: 21.7rem;
	margin-bottom: 0.6rem;
	position: relative; /* 자식 요소를 절대 위치로 설정할 수 있도록 하기 위해 상대 위치로 설정 */
	background-image: url(${homeBubble});
	background-size: cover; // 이미지를 화면에 맞게 확대/축소
	background-position: center;
	background-repeat: no-repeat;
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
