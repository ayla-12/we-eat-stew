import defaultImage from '@/assets/img/wish_button_default.png';
import selectedImage from '@/assets/img/wish_button_selected.png';
import styled from 'styled-components';

interface ButtonProps {
	onClick?: () => void;
}

const WishButton = ({ onClick }: ButtonProps) => {
	return (
		<ButtonWrapper onClick={onClick}>
			<img src={defaultImage} alt="Button" />
		</ButtonWrapper>
	);
};

const ButtonWrapper = styled.button`
	background: transparent;
	border: none;
	padding: 0;
	cursor: pointer;

	/* 기본 상태 이미지 */
	img {
		width: 19.8rem;
		height: 6.6rem;
		object-fit: contain;
		transition: transform 0.3s ease;
	}

	/* Hover 상태 이미지 */
	&:hover img {
		content: url(${selectedImage});
	}

	/* Active 상태 이미지 */
	&:active img {
		content: url(${selectedImage});
		transform: scale(0.95); /* Active 시 버튼 이미지 크기 축소 */
	}
`;

export default WishButton;
