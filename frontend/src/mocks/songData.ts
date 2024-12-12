// 데이터 타입 정의
interface Song {
	id: number; // 고유 식별자
	title: string; // 노래 제목
	artist: string; // 아티스트
	lyrics: string; // 주요 가사
	timestamp: number; // 타임스탬프 (초 단위)
	link: string; // 노래 링크
}

interface Category {
	impeachment: Song[];
}

// 목 데이터
const categories: Category = {
	impeachment: [
		{
			id: 8456126301,
			title: 'Sucker Punch!',
			artist: 'Xdinary Heroes',
			lyrics: 'Feels like sucker punch, 더 세게 한 방 또 날려\nSucker punch, 이 순간만을 기다린 듯이, pow',
			timestamp: 56,
			link: 'https://www.youtube.com/watch?v=rdNLkQ5PlVQ',
		},
		{
			id: 8456126302,
			title: 'How Sweet',
			artist: '뉴진스',
			lyrics:
				"거기 숨지 말고 빨리 나와 \n You, little demon in my storyline, don't knock on my door,\n너 얼른 나가버려",
			timestamp: 202,
			link: 'https://www.youtube.com/watch?v=vrM2mrI83uk',
		},
		{
			id: 8456126303,
			title: '소년만화',
			artist: 'Xdinary Heroes',
			lyrics: '최악의 상황에 주먹을 뻗는다\n몇 번이든 상대가 나가떨어질 때까지',
			timestamp: 46,
			link: 'https://www.youtube.com/watch?v=0HRVFXXPitY',
		},
		{
			id: 8456126304,
			title: 'Future Perfect (Pass the MIC)',
			artist: '엔하이픈',
			lyrics: 'Kill the past, 그냥 꺼져\n그냥 꺼져, 자격을 논해?',
			timestamp: 26,
			link: 'https://youtu.be/I4yPQGSgNxk?si=ahFjN3OFP7sosXzj',
		},
		{
			id: 8456126305,
			title: 'Am I Wrong',
			artist: '방탄소년단',
			lyrics: '자 소리질러 MAYDAY MAYDAY\n온 세상이 다 미친 것 같아 끝인 것 같아',
			timestamp: 56,
			link: 'https://www.youtube.com/watch?v=4fgUV5fzuIE',
		},
		{
			id: 8456126306,
			title: 'JUSTICE',
			artist: '드림캐쳐',
			lyrics: '얼룩이 날 삼키지 못하게\n간절한 외침으로 Fight for justice, Rise up',
			timestamp: 40,
			link: 'https://www.youtube.com/watch?v=cTbSrtZTqgw',
		},
		{
			id: 8456126307,
			title: 'Next Level',
			artist: 'aespa',
			lyrics: '위협에 맞서서\n제껴라 제껴라 제껴라',
			timestamp: 23,
			link: 'https://www.youtube.com/watch?v=tkzYyEp4zB4',
		},
		{
			id: 8456126308,
			title: 'Step Back',
			artist: 'GOT the beat',
			lyrics: '너 감히 누구라고 날 제껴\n이쯤에서 물러나고 입 닫는 게 좋을걸',
			timestamp: 15,
			link: 'https://www.youtube.com/watch?v=zspA0I7xme4',
		},
		{
			id: 8456126309,
			title: '때려쳐',
			artist: 'DAY6',
			lyrics: '때려쳐\n머릴 굴려보든 뭐를 더 하든\n답 없어',
			timestamp: 137,
			link: 'https://www.youtube.com/watch?v=I1nGGToyte8',
		},
		{
			id: 8456126310,
			title: '바꿔',
			artist: '이정현',
			lyrics: '거짓은 다 바꿔 바꿔 바꿔\n세상을 다 바꿔 ',
			timestamp: 89,
			link: 'https://www.youtube.com/watch?v=NY-U-0NHccs',
		},
		{
			id: 8456126311,
			title: 'Fearless',
			artist: '세븐틴',
			lyrics: '영원한 건 절대 없단 걸\n알 수 있기에 끝낼 수 있어',
			timestamp: 148,
			link: 'https://www.youtube.com/watch?v=kpewpapC9r8',
		},
		{
			id: 8456126312,
			title: '전야 (前夜) (The Eve)',
			artist: 'EXO',
			lyrics: "변화의 목소리 파도가 일어\n전부 집어삼킬 바다를 만든 건 It's you",
			timestamp: 133,
			link: 'https://www.youtube.com/watch?v=gK8YC0nxNe0',
		},
	],
};

export default categories;
