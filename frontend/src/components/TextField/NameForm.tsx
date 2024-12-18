// useState 추가
import { nameForm } from '@/assets/img';
import styled, { css } from 'styled-components';

interface NameFormProps {
	name: string; // 부모로부터 전달받는 이름 상태
	onNameChange: (value: string) => void; // 부모로 상태를 전달하는 함수
}

const NameForm = ({ name, onNameChange }: NameFormProps) => {
	// 입력값 변경 핸들러
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onNameChange(e.target.value);
	};

	return (
		<FieldWrapper>
			<TextInput
				type="text"
				placeholder="이름은 10글자 이내로!"
				value={name}
				onChange={handleInputChange} // 입력값 변경 이벤트
				exceedsLimit={name.length > 10} // 글자 수 초과 여부 전달
			/>
		</FieldWrapper>
	);
};

// 스타일 컴포넌트
const FieldWrapper = styled.div`
	width: 32rem; /* PNG 이미지 크기와 동일하게 설정 */
	height: 5.6rem; /* PNG 이미지 크기와 동일하게 설정 */
	background-image: url(${nameForm});
	background-size: cover;
	background-position: center;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TextInput = styled.input<{ exceedsLimit: boolean }>`
	// exceedsLimit를 props로 받음
	width: 90%;
	height: 60%;
	border: none;
	outline: none;
	background: transparent;
	color: ${({ theme, exceedsLimit }) =>
		exceedsLimit ? theme.colors.red : theme.colors.lightyellow}; // 글자 수 초과 시 빨간색
	${({ theme }) => theme.fonts.Body};

	::placeholder {
		color: ${({ theme }) => theme.colors.lightyellow};
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

export default NameForm;
