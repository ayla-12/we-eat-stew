import { instaButtonDefault, instaButtonSelected } from '@/assets/img';
import styled from 'styled-components';

const InstaButton = () => {
	const handleButtonClick = () => {
		window.location.href = 'https://www.instagram.com/we.eat.stew/';
	};

	return (
		<ButtonWrapper onClick={handleButtonClick}>
			<img src={instaButtonDefault} alt="Button" />
		</ButtonWrapper>
	);
};

export default InstaButton;

const ButtonWrapper = styled.button`
	background: transparent;
	border: none;
	padding: 0;
	cursor: pointer;

	/* 기본 상태 이미지 */
	img {
		width: 24.5rem;
		height: 6.5rem;
		object-fit: contain;
		transition: transform 0.3s ease;
	}

	/* Hover 상태 이미지 */
	&:hover img {
		content: url(${instaButtonSelected});
	}

	/* Active 상태 이미지 */
	&:active img {
		content: url(${instaButtonSelected});
		transform: scale(0.95); /* Active 시 버튼 이미지 크기 축소 */
	}
`;
