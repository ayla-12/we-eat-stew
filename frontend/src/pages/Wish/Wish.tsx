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
	const navigate = useNavigate(); // useNavigate 훅 사용

	const handleButtonClick = async () => {
		if (!wish.trim()) {
		  alert('소원을 입력해주세요!');
		  return;
		}
	  
		try {
		  const matchedCategory = await matchCategory(wish);
		  const categoryValue = matchedCategory.category;
	  
	  
		  if (name.trim().length > 0 && name.trim().length <= 10) {
			localStorage.setItem('nickname', name); // 로컬스토리지에 이름 저장
	  
			// 로딩 페이지로 상태 전달
			navigate('/loading', { state: { category: categoryValue } }); // 다음 페이지로 이동
		  } else {
			alert('이름은 1글자 이상, 10글자 이내로 입력해주세요.');
		  }
		} catch (error) {
		  console.error('Error matching category:', error);
		  alert('곡을 고르는 중 오류가 발생했어요. 다시 시도해주세요.');
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
					<h1>2026년에 이루고 싶은 것</h1>
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
	height: 81.2rem; //디폴트는 원래 배경 사이즈인 812px로 고정을 해두기기
	background-image: url(${wishBackgroundImage});
	background-size: cover; /* 기본적으로 cover로 설정하여 비율을 유지하며 꽉 채움 */
	background-position: center; /* 중앙에 배경 이미지 위치 */
	background-repeat: no-repeat; /* 배경 이미지 반복 방지 */

	/* 높이가 812px 이상인 화면에서만 배경이 100vh로 꽉 차게 */
	@media (min-height: 812px) {
		height: 100dvh; /* 812px 이상에서는 화면 세로 꽉 채우기 */
		background-size: cover; /* 배경 이미지를 꽉 채우도록 */
	}

	/* 812px 이하인 화면에서는 배경이 잘리지 않도록 */
	@media (max-height: 811px) {
		background-size: contain; /* 화면에 맞게 이미지 크기 조정, 잘리지 않음 */
	}
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
