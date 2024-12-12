import { sharedButtonDefault, sharedButtonSelected } from '@/assets/img';
import styled from 'styled-components';

interface ButtonProps {
	onClick?: () => void;
}

const SharedButton = ({ onClick }: ButtonProps) => {
	return (
		<ButtonWrapper onClick={onClick}>
			<img src={sharedButtonDefault} alt="Button" />
		</ButtonWrapper>
	);
};

export default SharedButton;

const ButtonWrapper = styled.button`
	background: transparent;
	border: none;
	padding: 0;
	cursor: pointer;

	/* 기본 상태 이미지 */
	img {
		width: 16.5rem;
		height: 6.6rem;
		object-fit: contain;
		transition: transform 0.3s ease;
	}

	/* Hover 상태 이미지 */
	&:hover img {
		content: url(${sharedButtonSelected});
	}

	/* Active 상태 이미지 */
	&:active img {
		content: url(${sharedButtonSelected});
		transform: scale(0.95); /* Active 시 버튼 이미지 크기 축소 */
	}
`;
