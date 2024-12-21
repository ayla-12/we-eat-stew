import { wishForm } from '@/assets/img';
import styled, { css } from 'styled-components';

interface WishFormProps {
	wish: string;
	onWishChange: (value: string) => void;
}

const WishForm: React.FC<WishFormProps> = ({ wish, onWishChange }) => {
	// 입력값 변경 핸들러
	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		// 글자 수 제한
		if (e.target.value.length <= 100) {
			onWishChange(e.target.value); // 부모 컴포넌트에서 `wish` 상태 업데이트
		}
	};

	return (
		<FieldWrapper>
			<TextArea
				placeholder="간절한 소원 딱 하나만 빌어보세요!&#10;추천 정확도가 높아져요."
				value={wish} // 부모 컴포넌트에서 전달된 `wish` 값 사용
				onChange={handleInputChange} // 입력값 변경 이벤트
				exceedsLimit={wish.length > 100} // 글자 수 초과 여부 전달
			/>
		</FieldWrapper>
	);
};

export default WishForm;

// 스타일 컴포넌트
const FieldWrapper = styled.div`
	width: 32rem;
	height: 24rem;
	background-image: url(${wishForm});
	background-size: cover;
	background-position: center;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding-top: 1.6rem;
`;

const TextArea = styled.textarea<{ exceedsLimit: boolean }>`
	width: 90%;
	height: 80%;
	border: none;
	outline: none;
	background: transparent;
	color: ${({ theme, exceedsLimit }) => (exceedsLimit ? theme.colors.red : theme.colors.lightyellow)};
	${({ theme }) => theme.fonts.Body};
	resize: none;
	overflow-wrap: break-word;
	white-space: pre-wrap;

	::placeholder {
		color: ${({ theme }) => theme.colors.lightyellow};
		opacity: 0.7;
	}

	${({ exceedsLimit }) =>
		exceedsLimit &&
		css`
			animation: shake 0.3s;
		`}

	@keyframes shake {
		0%,
		100% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-3px);
		}
		50% {
			transform: translateX(3px);
		}
		75% {
			transform: translateX(-3px);
		}
	}
`;
