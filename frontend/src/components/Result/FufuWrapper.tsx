import { fufu1, fufu2, fufu3, fufu4, fufu5, fufu6, fufu7, fufu8, fufu9, fufu10, fufu11,fufu12, fufu13, fufu14 } from '@/assets/img';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface fufuProps {
	category: string;
}

// 카테고리명에 따른 이미지 매핑 객체
const fufuImages: Record<string, string> = {
	challenge: fufu1,
	favorite: fufu2,
	health: fufu3,
	impeachment: fufu4,
	love: fufu5,
	lucky: fufu6,
	marriage: fufu7,
	rich: fufu8,
	study: fufu9,
	trip: fufu10,
	freedom: fufu11,
	escape: fufu12,
	happiness: fufu13,
	success: fufu14,

};

const FufuWrapper = ({ category }: fufuProps) => {
	// 매핑 객체에서 카테고리에 맞는 이미지를 가져옴
	const imageSrc = fufuImages[category];

	// 카테고리에 해당하는 이미지가 없을 경우 기본 이미지 처리
	if (!imageSrc) {
		console.error(`Invalid category: ${category}`);
		return null; // 이미지가 없으면 렌더링하지 않음
	}
	return (
		<Fufu>
			<img src={imageSrc} alt="푸푸 이미지" />
		</Fufu>
	);
};

export default FufuWrapper;

const Fufu = styled.div`
	width: 100%;
	${flexCssGenerator('flex', 'center', 'center', 'column')}

	img {
		width: 28rem;
		height: 20rem;
		object-fit: cover;
	}
`;
