import {
	fufu1,
	fufu2,
	fufu3,
	fufu4,
	fufu5,
	fufu6,
	fufu7,
	fufu8,
	fufu9,
	fufu10,
	fufu11,
	fufu12,
	fufu13,
	fufu14,
	listeningFufu,
} from '@/assets/img';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface fufuProps {
	category: string;
}

// 카테고리명에 따른 이미지 매핑 객체
const fufuImages: Record<string, string> = {
	challenge: fufu1,
	fandom: fufu2,
	health: fufu3,
	impeachment: fufu4,
	love: fufu5,
	luck: fufu6,
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
	const imageSrc = fufuImages[category] || listeningFufu;

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
		width: auto;
		height: 20rem;
		object-fit: contain;
	}
`;
