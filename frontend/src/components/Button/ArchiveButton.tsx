import { archiveButtonDefault, archiveButtonSelected } from '@/assets/img';
import styled from 'styled-components';

const ArchiveButton = () => {
	const handleButtonClick = () => {
		window.location.href = 'https://kpop-stew.stibee.com/';
	};

	return (
		<ButtonWrapper onClick={handleButtonClick}>
			<img src={archiveButtonDefault} alt="Button" />
		</ButtonWrapper>
	);
};

export default ArchiveButton;

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
		content: url(${archiveButtonSelected});
	}

	/* Active 상태 이미지 */
	&:active img {
		content: url(${archiveButtonSelected});
		transform: scale(0.95); /* Active 시 버튼 이미지 크기 축소 */
	}
`;
