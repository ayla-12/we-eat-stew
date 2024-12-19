import { matchCategory } from '@/api/wishApi';
import { homeHeader, musicNoteRed, pink2025, wishBackgroundImage } from '@/assets/img';
import RecommendButton from '@/components/Button/RecommendButton';
import NameForm from '@/components/TextField/NameForm';
import WishForm from '@/components/TextField/WishForm';
import { flexCssGenerator } from '@/styles/customStyle.ts';
// import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wish = () => {
	const [name, setName] = useState('');
	const [wish, setWish] = useState('');
	const [category, setCategory] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate(); // useNavigate 훅 사용

	//api 요청 함수
	// const matchCategory = async (wish: string) => {
	// 	const response = await axios.post('http://localhost:3000/api/match-category', {
	// 		wish,
	// 	});
	// 	return response.data;
	// };

	const handleButtonClick = async () => {
		setError(null);
		console.log('Current wish:', wish); // 값 확인
		if (!wish.trim()) {
			alert('소원을 입력해주세요!');
			return;
		}

		try {
			const matchedCategory = await matchCategory(wish);
			setCategory(matchedCategory);

			if (name.trim().length > 0 && name.trim().length <= 10) {
				localStorage.setItem('nickname', name); // 로컬스토리지에 이름 저장
				console.log('Navigating to loading with category:', category);

				navigate('/loading', { state: { category } }); // 다음 페이지로 이동
			} else {
				alert('이름은 1글자 이상, 10글자 이내로 입력해주세요.');
			}
		} catch (error) {
			console.error('Error matching category:', error);
			alert('카테고리를 매칭하는 중 오류가 발생했습니다. 다시 시도해주세요.');
		}
	};

	const handleNameChange = (value: string) => {
		setName(value);
	};
	const handleWishChange = (value: string) => {
		setWish(value);
	};

	return (
		<WishPageWrapper>
			<DecoWrapper>
				<img src={pink2025} alt="2025 핑크색" className="year" />
				<img src={musicNoteRed} alt="음표" className="note" />
			</DecoWrapper>
			<WishHeaderWrapper>
				<img src={homeHeader} alt="헤더" />
			</WishHeaderWrapper>
			<WishContentWrapper>
				<NameFormWrapper>
					<h1>당신의 이름은?</h1>
					<NameForm name={name} onNameChange={handleNameChange} />
				</NameFormWrapper>
				<WishFormWrapper>
					<h1>2025년에 이루고 싶은 것</h1>
					<WishForm wish={wish} onWishChange={handleWishChange} />
				</WishFormWrapper>
				<RecommendButton onClick={handleButtonClick} />
			</WishContentWrapper>
		</WishPageWrapper>
	);
};

export default Wish;

const WishPageWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${wishBackgroundImage});
	background-size: cover; // 이미지를 화면에 맞게 확대/축소
	background-position: center; // 이미지가 중앙에 위치하도록 설정
	background-repeat: no-repeat; // 배경이 반복되지 않도록 설정
`;

const WishHeaderWrapper = styled.div`
	width: 100%;
	height: auto;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
`;

const WishContentWrapper = styled.div`
	padding: 9.6rem 2.4rem 4rem;
	${flexCssGenerator('flex', 'center', 'center', 'column')}
	gap: 3.2rem;
`;

const NameFormWrapper = styled.div`
	${flexCssGenerator('flex', 'center', '', 'column')}
	gap: 1.2rem;

	h1 {
		${({ theme }) => theme.fonts.Header}
		color: ${({ theme }) => theme.colors.green}
	}
`;

const WishFormWrapper = styled.div`
	${flexCssGenerator('flex', 'center', '', 'column')}
	gap: 1.2rem;

	h1 {
		${({ theme }) => theme.fonts.Header}
		color: ${({ theme }) => theme.colors.green}
	}
`;

const DecoWrapper = styled.div`
	z-index: 10;
	position: relative;

	img {
		position: absolute;
	}

	.year {
		top: 10.3rem;
		width: 18rem;
		height: auto;
	}

	.note {
		top: 16.1rem;
		width: 9.2rem;
		right: 3.6rem;
	}
`;
