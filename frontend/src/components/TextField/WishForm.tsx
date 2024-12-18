import { wishForm } from '@/assets/img';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const WishForm = () => {
	const [inputValue, setInputValue] = useState(''); // 입력값 상태

	// 입력값 변경 핸들러
	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		// 글자 수 제한
		if (e.target.value.length <= 100) {
			setInputValue(e.target.value);
		}
	};

	return (
		<FieldWrapper>
			<TextArea
				placeholder="간절한 소원 딱 하나만 빌어보세요!&#10;&#10;&#10;&#10;&#10;&#10;추천 정확도가 높아져요."
				value={inputValue}
				onChange={handleInputChange} // 입력값 변경 이벤트
				exceedsLimit={inputValue.length > 100} // 글자 수 초과 여부 전달
			/>
		</FieldWrapper>
	);
};

// 스타일 컴포넌트
const FieldWrapper = styled.div`
	width: 32rem; /* PNG 이미지 크기와 동일하게 설정 */
	height: 24rem; /* PNG 이미지 크기와 동일하게 설정 */
	background-image: url(${wishForm});
	background-size: cover;
	background-position: center;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-start; /* 위쪽 정렬 */
	padding-top: 1.6rem; /* 위쪽 패딩 추가 */
`;

const TextArea = styled.textarea<{ exceedsLimit: boolean }>`
	width: 90%;
	height: 80%;
	border: none;
	outline: none;
	background: transparent;
	color: ${({ theme, exceedsLimit }) =>
		exceedsLimit ? theme.colors.red : theme.colors.lightyellow}; // 글자 수 초과 시 빨간색
	${({ theme }) => theme.fonts.Body};
	resize: none; /* 사용자가 크기를 조절하지 못하도록 고정 */
	overflow-wrap: break-word; /* 텍스트가 영역을 넘지 않도록 줄바꿈 */
	white-space: pre-wrap; /* 줄바꿈 처리 */

	::placeholder {
		color: ${({ theme }) => theme.colors.lightyellow};
		opacity: 0.7;
		text-align: left; /* 왼쪽 정렬 */
		vertical-align: top; /* 위쪽 정렬 */
		line-height: 1.5; /* 줄 간격 추가 */
	}

	${({ exceedsLimit }) =>
		exceedsLimit &&
		css`
			animation: shake 0.3s; /* 글자 수 초과 시 흔들리는 효과 */
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

export default WishForm;
