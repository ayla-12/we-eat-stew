// 데이터 타입 정의
export interface Song {
	id: number; // 고유 식별자
	title: string; // 노래 제목
	artist: string; // 아티스트
	lyrics: string; // 주요 가사
	timestamp: number; // 타임스탬프 (초 단위)
	link: string; // 노래 링크
}

export interface Category {
	impeachment: Song[];
	health: Song[];
	marriage: Song[];
	success: Song[];
	freedom: Song[];
	rich: Song[];
	escape: Song[];
	trip: Song[];
	study: Song[];
	fandom: Song[];
	happiness: Song[];
	luck: Song[];
	challenge: Song[]; // 추가된 부분
	love: Song[];
	comfort: Song[];
}

// 목 데이터
const categories: Category = {
	challenge: [
		{
			id: 1000234,
			title: 'Celebrity',
			artist: '아이유',
			lyrics: `잊지마 넌 흐린 어둠 사이 왼손으로 그린 별 하나
보이니 그 유일함이 얼마나 아름다운지 말야`,
			timestamp: 40.0,
			link: 'https://youtu.be/ZThVobEtp_o?si=JzZXgBaivVBoxoPr',
		},
		{
			id: 1000194,
			title: 'Surf',
			artist: '하이라이트',
			lyrics: `한번도 해본 적 없어 잘 해낼 수 있을까 두렵다 해
그래도 괜찮아 내가 있으니까 어서 뛰어들자`,
			timestamp: 0.0,
			link: 'https://youtu.be/jMeWMz6YEds?si=hKqdZdfeo_gsZWQr',
		},
		{
			id: 1000191,
			title: 'STEP',
			artist: '카라',
			lyrics: `Step it up step it up 다시 시작이야
또 템포를 올려서 앞질러 갈래`,
			timestamp: 49.0,
			link: 'https://youtu.be/KLrcpz2p6UQ?si=ErC99uvNU04ktdTX',
		},
		{
			id: 1000188,
			title: 'N.O',
			artist: '방탄소년단',
			lyrics: `Everybody say NO!
더는 나중이란 말로 안돼 
더는 남의 꿈에 갇혀 살지 마`,
			timestamp: 64.0,
			link: 'https://youtu.be/vHTeiTSfDnw?si=rSsZtqQvJHp8-lVN',
		},
		{
			id: 3000036,
			title: '빛을 따라서',
			artist: '첫사랑(CSR)',
			lyrics: `Shining bright 태양보다 밝게 빛나 높이 날아가
손을 잡고 크게 소리쳐, 망설일 필요 없어 달려`,
			timestamp: 44.0,
			link: 'https://youtu.be/XF_23xq5Kv8?si=ClhaWQzv6gLo7v_f',
		},
		{
			id: 3000033,
			title: 'Wow Thing',
			artist: '소연, 슬기, 신비, 청하',
			lyrics: `시작해 꿈꿔 왔던 날 만나게 될 wow thing
전에 없던 날 만들어 줄 wow thing
내가 있는 어디라도 멋진 wow wow thing`,
			timestamp: 37.0,
			link: 'https://youtu.be/KR5CtMLuiqQ?si=vdNaXNkfE6FragMB',
		},
		{
			id: 3000032,
			title: "I'm Ready",
			artist: '청하',
			lyrics: `I'm ready to get this, ready to get this
Ready to get this stage
그 누구든 test me 얼마든 chase me 두려울 건 없지`,
			timestamp: 8.0,
			link: 'https://youtu.be/jf0_fwHYAbE?si=z8XSE0DAM_QzKv61',
		},
		{
			id: 3000027,
			title: '쏘아 올려',
			artist: '다크비',
			lyrics: `쏘아올려 더 높이 날게
그 날갯짓은 날 새롭게`,
			timestamp: 59.0,
			link: 'https://youtu.be/3C5GL4LA0m4?si=RXwXUNayCnByxm1G',
		},
		{
			id: 3000022,
			title: '파도혁명',
			artist: '음율',
			lyrics: `파란을 일으켜
눈부신 널 보여줘
이 바다를 집어삼키자`,
			timestamp: 59.0,
			link: 'https://youtu.be/SPniQOtoWis?si=7ikMIhJKeAfO3R64',
		},
		{
			id: 3000020,
			title: '계절의 시작은',
			artist: '달담',
			lyrics: '나의 시작은 이곳에서부터',
			timestamp: 128.0,
			link: 'https://youtu.be/JMhszuqSe6c?si=UmIGONI4f2idxqzA',
		},
		{
			id: 3000018,
			title: 'Opening',
			artist: 'LUCY',
			lyrics: '우리 이야기의 주인공은 우리니까',
			timestamp: 110.0,
			link: 'https://youtu.be/dqnYdGmspc4?si=kDy6XOuqj_4vsmcS',
		},
		{
			id: 3000016,
			title: '게릴라 (Guerilla)',
			artist: '오마이걸',
			lyrics: '낯설고 새로운걸 겁내본적은 없지',
			timestamp: 103.0,
			link: 'https://youtu.be/CBfJiyuHVPs?si=TXG1MPWf7vXfalF4',
		},
		{
			id: 3000009,
			title: 'Shoot It Out',
			artist: '원위',
			lyrics: `모든 선택이 최선이라 믿고
다시 가던 길을 함께 걸어갈래`,
			timestamp: 41.0,
			link: 'https://youtu.be/f4m3FNAiU90?si=yHl_D4USLj_PoZD_',
		},
		{
			id: 3000007,
			title: '청사진',
			artist: 'Stray Kids',
			lyrics: `난 계속 멈추지 않고서 달려갈 걸
절대 지치지 않고서 달려갈 걸`,
			timestamp: 77.0,
			link: 'https://youtu.be/r_G906iQID8?si=3KzKKkseK5zoZVva',
		},
		{
			id: 3000005,
			title: 'POP UP',
			artist: 'Dragon Pony (드래곤포니)',
			lyrics: `모든 게 다 잘 됐으면 좋겠어`,
			timestamp: 92,
			link: 'https://youtu.be/yc-eNqLjDMA?si=85ZN_gNT-TmrbktZ',
		},
		{
			id: 1000032,
			title: '듣기만 해도 성공하는 노래',
			artist: '조빈',
			lyrics: `나는 최고를 향해 걸어가는 도전자이다
나는 나를 영원히 응원한다`,
			timestamp: 110.0,
			link: 'https://youtu.be/0wwUmY7RGXI?si=QLL1cfD9lXvQpXnp',
		},
		{
			id: 1000033,
			title: '파이팅 해야지',
			artist: '부석순',
			lyrics: `힘내야지 뭐 어쩌겠어
파이팅 해야지 파이팅 해야지`,
			timestamp: 56.0,
			link: 'https://youtu.be/mBXBOLG06Wc?si=zY2LGFHHpFESx8DW',
		},
		{
			id: 1000034,
			title: 'Break The Wall',
			artist: 'NMIXX',
			lyrics: `꿈꿔왔던 세상이 보여
멈춰 설 이유는 없어 with you`,
			timestamp: 196.0,
			link: 'https://www.youtube.com/watch?v=M8iMREaObhM&pp=ygUOQnJlYWsgVGhlIFdhbGw%3D',
		},
		{
			id: 1000035,
			title: '우리의 꿈',
			artist: '코요태',
			lyrics: `세상은 꿈꾸는 자의 것이라고
용기를 내 넌 할 수 있어`,
			timestamp: 46.0,
			link: 'https://www.youtube.com/watch?v=5eFAfq_DSKQ&pp=ygUW7Jqw66as7J2YIOq_iCBvZmZpY2lhbA%3D%3D',
		},
		{
			id: 1000036,
			title: 'COUNTER',
			artist: 'DAY6',
			lyrics: `다시 난 몇 번이고 일어나
한계를 한번 더 넘어서 간다
일발 역전의 카운터`,
			timestamp: 140.0,
			link: 'https://www.youtube.com/watch?v=B9vB01PEnzE&pp=ygUHQ09VTlRFUg%3D%3D',
		},
		{
			id: 1000037,
			title: 'Shopper',
			artist: '아이유',
			lyrics: `필요 없는 건 없어
for my Victory, even your jealousy
나 이제껏 모르던 세상을 욕심 내볼래`,
			timestamp: 159.0,
			link: 'https://youtu.be/2dVlwcviCwQ?si=ZkvcMgu-J-1JtMWD',
		},
		{
			id: 1000038,
			title: '너와의 모든 지금',
			artist: '재쓰비',
			lyrics: `Stay in what you believin' 넌 너를 그냥 믿어
도무지 너를 모르겠다면 네 곁에 나를 믿어`,
			timestamp: 134.0,
			link: 'https://youtu.be/YLxEK0ZKx9A?si=hjkm9sHez7fxtngJ',
		},
		{
			id: 1000039,
			title: `내일에서 기다릴게 (I'll See You Tomorrow)`,
			artist: '투모로우바이투게더',
			lyrics: `나는 믿어 we are meant to be
늦어져도 돼 난 늘 여기`,
			timestamp: 30.0,
			link: 'https://www.youtube.com/watch?v=MtDeVpVzLhY',
		},
		{
			id: 1000041,
			title: 'Fadeaway',
			artist: 'BOYNEXTDOOR',
			lyrics: `바로 지금이 어쩌면 다시 없을 last chance
Fadeaway, 딱 한 순간, Fadeaway, 바로 이 순간`,
			timestamp: 146.0,
			link: 'https://www.youtube.com/watch?v=AL5SkIfr26A',
		},
		{
			id: 1000042,
			title: '관객이 될게 (I stan U)',
			artist: '아이유',
			lyrics: `그 모든 날들의 어느 열렬한 관객이 될게
난 나의 너를 믿어 You're stunning`,
			timestamp: 96.0,
			link: 'https://youtu.be/_ZfT3M6ZKEM?si=M1Ufy2d622DKWIh-',
		},
		{
			id: 1000043,
			title: 'Quarter Life',
			artist: '투모로우바이투게더',
			lyrics: `어른이란 건 어쩜 사실 정답이 꼭 없는 답지
헤매듯 헤쳐 나가 quarter life crisis`,
			timestamp: 150.0,
			link: 'https://youtu.be/twW2Qp3k6Ko?si=ERkZnw5ZON9op1k2',
		},
		{
			id: 1000044,
			title: 'Feel Special',
			artist: 'TWICE',
			lyrics: `초라한 nobody에서 다시 someby
특별한 나로 변해`,
			timestamp: 40.0,
			link: 'https://youtu.be/2zZxNpzqcAc?si=wKnFnsWCRFRXwCYN',
		},
		{
			id: 1000045,
			title: '질풍가도',
			artist: '유정석',
			lyrics: `한 번 더 나에게 질풍 같은 용기를
거친 파도에도 굴하지 않게`,
			timestamp: 3.0,
			link: 'https://youtu.be/BFguYNU4E8g?si=JhHKLdQStqK1XGgL',
		},
		{
			id: 1000046,
			title: '고민보다 GO',
			artist: '방탄소년단',
			lyrics: `걱정만 하기엔 우린 꽤 젊어
오늘만은 고민보단 go 해버려`,
			timestamp: 128.0,
			link: 'https://youtu.be/AEm5O3VnKi8?si=pBc-fA8kY0R8lj-t',
		},
		{
			id: 1000047,
			title: 'Girls Never Die',
			artist: '트리플에스',
			lyrics: `다시 해볼까? La La La La La La La
끝까지 가볼래 포기는 안 할래 난`,
			timestamp: 137.0,
			link: 'https://youtu.be/1m2JZf3F2JE?si=OKAGAtwQGlqMEDPv',
		},
		{
			id: 1000048,
			title: '오르트구름',
			artist: '윤하',
			lyrics: `Let's go 새로운 길의 탐험가
Beyond the road 껍질을 깨뜨려버리자`,
			timestamp: 37.0,
			link: 'https://youtu.be/58IEh6YkuzQ?si=nvaOw9BYpcNx3xdi',
		},
		{
			id: 1000049,
			title: 'Best Part',
			artist: 'DAY6',
			lyrics: `한 순간도 나에게 있어서는 의미가 없지 않아
언제가 끝일지 모르는 지금이 Best part`,
			timestamp: 72.0,
			link: 'https://youtu.be/a-UfQfufkgU?si=ckD8ZoagFzl9hTlE',
		},
		{
			id: 1000051,
			title: 'Wave',
			artist: '에이티즈',
			lyrics: `지금 이 순간이 우리의 파도라면
두려워 말고 더 힘껏 마주하길`,
			timestamp: 174.0,
			link: 'https://www.youtube.com/watch?v=FIInyEWWW-s',
		},
		{
			id: 1000052,
			title: `Don't fight the feeling`,
			artist: 'EXO',
			lyrics: `그럼 좀 어때
다 해도 돼 넌 Yeah`,
			timestamp: 32.0,
			link: 'https://youtu.be/IEhQpQR0PEU?si=JVgA8fv32JTrx178',
		},
		{
			id: 1000053,
			title: 'GET (Feat. Beenzino)',
			artist: '어반자카파',
			lyrics: `뭘 망설여 바보같이 답답해 너의 태도
그냥 좀 해도 돼 한 번쯤 미친 사람처럼`,
			timestamp: 45.0,
			link: 'https://youtu.be/JYVVx_6i_dc?si=m_6wQ_2lrYJ104KB',
		},
		{
			id: 1000054,
			title: 'Drive',
			artist: '미연',
			lyrics: `잿빛 세상을 등지고 이 도시를 달려봐
내 맘 가는 대로 가로질러 가볼래 날 위해`,
			timestamp: 158.0,
			link: 'https://youtu.be/F_mMkeYQOMs?si=YyiQDXVEtqLoxcsz',
		},
		{
			id: 1000055,
			title: 'JUSTICE',
			artist: '드림캐쳐',
			lyrics: `용기를 가득 머금고
내 갈 길을 활짝 열어`,
			timestamp: 96.0,
			link: 'https://www.youtube.com/watch?v=cTbSrtZTqgw',
		},
		{
			id: 1000056,
			title: 'Five Lines',
			artist: '로우행잉프루츠',
			lyrics: `우리에게는 이 밤하늘을 수놓아야 하는 이유가 많아
주인공은 네가 되었음 해`,
			timestamp: 54.0,
			link: 'https://www.youtube.com/watch?v=YGp6rI2fqow',
		},
		{
			id: 1000057,
			title: '별이 되어',
			artist: '노브레인',
			lyrics: `내가 너의 별이 되어
꿈을 찾는 너의 빛이 될게`,
			timestamp: 41.0,
			link: 'https://youtu.be/a6Oupuppfkg?feature=shared',
		},
		{
			id: 1000058,
			title: 'WE ARE YOUNG',
			artist: '트라이비',
			lyrics: `두 번 다시 오지 않아 여기 
지금 이 순간의 나`,
			timestamp: 142.0,
			link: 'https://youtu.be/1qdF-WL0vC8?si=OqROunev38ubTzWT',
		},
		{
			id: 1000059,
			title: '너와 함께',
			artist: '울랄라 세션',
			lyrics: `너는 나의 super star
누구보다 빛나는 너잖아`,
			timestamp: 63.0,
			link: 'https://youtu.be/si3ZqcrBb18?si=6Rkm2QVlAJ9qWo4X',
		},
		{
			id: 1000061,
			title: '꿈꾼 (Dreamer)',
			artist: 'Young K',
			lyrics: `But I'm not down, i'll never go down
아직은 난 안 끝났다`,
			timestamp: 13.0,
			link: 'https://youtu.be/ccKikk71rtM?feature=shared',
		},
		{
			id: 1000062,
			title: 'Start Line',
			artist: '아이린',
			lyrics: `내가 찾은 모든 길과 나를 채운 모든 말이
내 용기가 돼줄 거야`,
			timestamp: 83.0,
			link: 'https://youtu.be/S-fb0tMM7gc?feature=shared',
		},
	],
	escape: [
		{
			id: 3000028,
			title: 'New World',
			artist: 'RESCENE (리센느)',
			lyrics: `Let's go, 지금이야!
Switch my world, 바꿀 time`,
			timestamp: 38.0,
			link: 'https://youtu.be/QNXeGm-Wkms?si=Jq0ecIs0WGUY7Tpn',
		},
		{
			id: 1000183,
			title: '도시탈출',
			artist: '클론',
			lyrics: `복잡한 이 도시를 탈출해봐요
모두 잊어요 지난 일들은`,
			timestamp: 45.0,
			link: 'https://youtu.be/WelkK95sjeM?si=1fiMhxVzgbwy0dQN',
		},
		{
			id: 1000184,
			title: '난 너 없이 ',
			artist: 'WOODZ',
			lyrics: `난 너 없이 잘 살 수 있어
Oh 내가 하고 싶은 거 다 하면서
너 따위 없어도`,
			timestamp: 40.0,
			link: 'https://www.youtube.com/watch?v=VCHk9zoFIr8&pp=ygUP64KcIOuEiCDsl4bsnbQg',
		},
		{
			id: 1000185,
			title: 'Haven',
			artist: 'Stray Kids',
			lyrics: `Do whatever you want
같이 틀을 깨고
여기 아지트로 모여 Right now`,
			timestamp: 78.0,
			link: 'https://www.youtube.com/watch?v=Ng6XIskGipA&pp=ygUP7Iqk7YKk7KaIIEhhdmVu',
		},
		{
			id: 1000186,
			title: '털어버리자 (feat. 하현상)',
			artist: '유다빈밴드',
			lyrics: `숨 막히는 삶 우리의 전부를 다
쏟아 내버리는 밤 `,
			timestamp: 65.0,
			link: 'https://youtu.be/uCg126cixxM?si=g-emQu09C6GaCT4u',
		},
		{
			id: 1000187,
			title: 'Kick it',
			artist: 'BLACKPINK',
			lyrics: `답답한 너의 세상에서 벗어나
높이 날아갈 테니까`,
			timestamp: 149.0,
			link: 'https://www.youtube.com/watch?v=-gZC9hC1PDQ',
		},
		{
			id: 1000189,
			title: 'Prologue',
			artist: '에스파',
			lyrics: `누가 뭐라 해도 나답게 가고 싶어
오직 나만의 속도로 흐름대로 가`,
			timestamp: 158.0,
			link: 'https://www.youtube.com/watch?v=P8Zd56wknlk',
		},
		{
			id: 1000192,
			title: '신세계 (New World)',
			artist: '온앤오프',
			lyrics: `잃어버렸던 꿈을 다시 찾았어
우린 간다 신세계로 Higher`,
			timestamp: 128.0,
			link: 'https://youtu.be/JYqHZSjzt2w?si=8R50me7rgEle1jkh',
		},
		{
			id: 1000193,
			title: 'SHUT DOWN',
			artist: '클라씨',
			lyrics: `반짝거려 what I do 나답게 ah ya ya ya
빛이 날 거야 차원이 다르게 Class is over`,
			timestamp: 198.0,
			link: 'https://youtu.be/M7b1vCEJ-bk?si=BR4uUnUCrp3RdmX3',
		},
		{
			id: 2000195,
			title: 'Fadeaway',
			artist: 'BOYNEXTDOOR',
			lyrics: '모두의 걱정을 멋지게 부숴줘, 던져봐 fadeaway',
			timestamp: 74,
			link: 'https://www.youtube.com/watch?v=AL5SkIfr26A',
		},
		{
			id: 2000196,
			title: 'Supersonic',
			artist: '프로미스나인',
			lyrics: `달라진 온도 차오른 설렘 Overload
자 지금부터 뛰어들어 Ready set you go`,
			timestamp: 76,
			link: 'https://youtu.be/MR2ela9evnk?si=InIfJlpgmb2LPqkJ',
		},
		{
			id: 2000197,
			title: 'Better',
			artist: '보아',
			lyrics: `Oh, 선택은 너의 몫
도전을 해봤나? 해볼까?`,
			timestamp: 16,
			link: 'https://youtu.be/O0sA6Dml54I?si=1h8Oy1f2p5dqKBda',
		},
	],
	fandom: [
		{
			id: 1000021,
			title: 'Motivation',
			artist: '아웃사이더',
			lyrics: `그 누구보다 빠르게 난 남들과는 다르게
색다르게 리듬을 타는 비트 위의 나그네`,
			timestamp: 16.0,
			link: 'https://youtu.be/DSKgxrc5G64?si=9PtEdMN2sT61SPdW',
		},
		{
			id: 1000022,
			title: '포도알',
			artist: '안녕',
			lyrics: `탱탱 포도알이 탱탱
주렁주렁 달려 있네 `,
			timestamp: 39.0,
			link: 'https://www.youtube.com/watch?v=pA220Nhy6gw&pp=ygU-7Y-s64-E7JWMICjqt7nsnqXtjJAg7Zes66Gc7Lm067SHIOuLrOuCmOudvOulvCDqtaztlbTspJghIE9TVCk%3D',
		},
		{
			id: 1000023,
			title: '최고의 선물',
			artist: '꿈미',
			lyrics: `광클해서 구했어요 콘서트 표`,
			timestamp: 70.0,
			link: 'https://youtu.be/1nV5oaS9V-I?si=inwLJdTZ00lXyw1H',
		},

		{
			id: 1000025,
			title: '포도 형제들',
			artist: '핑크퐁',
			lyrics: `동그리 그리그리 동글동글
하나! 둘! 셋! 넷! 포도 형제들`,
			timestamp: 12.0,
			link: 'https://youtu.be/FVaIwsVAoAc?si=tvQ7Ueku4b6Lnyws',
		},
		{
			id: 1000029,
			title: '티켓 (TICKET)',
			artist: '나인뮤지스',
			lyrics: `Ticket One Way, Ticket One Way
One Way One Way One Way Ticket`,
			timestamp: 54.0,
			link: 'https://youtu.be/Hd1dMS3jybk?si=qKs2mT2vONLC01hP',
		},
	],
	freedom: [
		{
			id: 3000031,
			title: 'Sugarcoat (NATTY Solo)',
			artist: 'KISS OF LIFE',
			lyrics: `Sugarcoat 따윈 벗어 던진 날
니가 뭐라든지
Just move 내맘대로 날 위한 춤을 추지`,
			timestamp: 43.0,
			link: 'https://youtu.be/NaIRQ5v0914?si=QK1QTblqSLFG02TU',
		},
		{
			id: 2000210,
			title: '바람 (FREEDOM)',
			artist: 'iKON',
			lyrics: `울타리 벗어나서 자유를 걸어가지
꼰대들은 Don't touch me`,
			timestamp: 20,
			link: 'https://www.youtube.com/watch?v=A7nnGd7q0bA',
		},
		{
			id: 2000211,
			title: 'Child',
			artist: '마크',
			lyrics: `자유로울 때까지 뒤를 안 돌아봐
꼭 먼 남이 되고 싶었어 이 사회와`,
			timestamp: 122,
			link: 'https://youtu.be/xzG53u1Z3Z8?si=WAMeRxBegPt_F2C3',
		},
		{
			id: 1000135,
			title: '무한적아',
			artist: 'NCT 127',
			lyrics: `무거워진 세상을 다 바꿔
자유로운 우리를 봐 자유로워`,
			timestamp: 121.0,
			link: 'https://youtu.be/zmUn7V6uuZM?si=5hOTcdBk89Ov--6V',
		},
		{
			id: 1000136,
			title: '매직 카펫 라이드',
			artist: '자우림',
			lyrics: `신경 쓰지 마요 그렇고 그런 얘기들
골치 아픈일은 내일로 미뤄버려요 `,
			timestamp: 30.0,
			link: 'https://www.youtube.com/watch?v=cvpU-7BO0JE&pp=ygUX66ek7KeBIOy5tO2OqyDrnbzsnbTrk5w%3D',
		},
		{
			id: 1000137,
			title: 'New Hippie Generation',
			artist: '페퍼톤스',
			lyrics: `하루쯤 쉬어도 괜찮지?
오늘 당장 모든 게 변하진 않을 테니`,
			timestamp: 70.0,
			link: 'https://youtu.be/3iycK4F8iv4?si=KRRPPmZR3m07rp1z',
		},
		{
			id: 1000138,
			title: 'SHOUT OUT',
			artist: '엔하이픈',
			lyrics: `눈치 따위 볼 것 없이 그저 자유로운 이 순간
You and me`,
			timestamp: 108.0,
			link: 'https://youtu.be/U1VhxZYpZ0U?si=iclTr-FARaZ6303D',
		},
		{
			id: 1000139,
			title: 'Youth',
			artist: 'JUST B',
			lyrics: `자유롭게 fly away 다신 오지 않을 지금
So 다 같이 뛰어놀자 한바탕 미쳐보자`,
			timestamp: 120.0,
			link: 'https://youtu.be/l1wdZA7yDDU?si=g-Ou-ui71LSpvkli',
		},
		{
			id: 1000140,
			title: 'I WANT',
			artist: 'IVE',
			lyrics: `하고 싶은 건 다 해도 돼
더 실컷 소리쳐 fun, fun하게`,
			timestamp: 155.0,
			link: 'https://youtu.be/p3Bb33FlZAE?si=OjGX4A_mJPoeafMU',
		},
		{
			id: 1000141,
			title: '후라이의 꿈',
			artist: 'AKMU',
			lyrics: `틀에 갇힌 듯한 똑같은 꿈 Spread out, out
난 이 두꺼운 껍질을 깨고 나와 퍼지고 싶어`,
			timestamp: 144.0,
			link: 'https://www.youtube.com/watch?v=3kGAlp_PNUg',
		},
		{
			id: 1000142,
			title: 'Stay This Way',
			artist: '프로미스나인',
			lyrics: `매일이 난 Sunday
월요일은 사라져`,
			timestamp: 86.0,
			link: 'https://youtu.be/1UJCm2ZzrnE?si=q5CylNgjGm2HMaUR',
		},
		{
			id: 1000143,
			title: '청록',
			artist: '이츠',
			lyrics: `그대여 찬란하게 피어나
새파란 바람을 타고 날아`,
			timestamp: 22.0,
			link: 'https://youtu.be/FG1mYbVByMA?si=7-w6ThupX0psDv-8',
		},
		{
			id: 1000144,
			title: 'Sling Shot',
			artist: 'EPEX',
			lyrics: `이제라도 시작해 자유롭게 영원히
날 멀어지게 하면 할수록 갈망은 더 커질 뿐
(판단을 잘 하길 바래)`,
			timestamp: 150.0,
			link: 'https://youtu.be/oJ4KtjE7SFk?si=uIpkLeRgul-sBzmo',
		},
		{
			id: 1000145,
			title: 'HOLA!',
			artist: '자우림',
			lyrics: `홀라 홀라레이 자유로운 너를 믿어
단단한 마음 이미 네 안에 있잖아`,
			timestamp: 52.0,
			link: 'https://youtu.be/SIMBB0_jnEc?si=36HUDx-AmOqCk-z3',
		},
		{
			id: 1000146,
			title: 'NOT SORRY (Prod. by Slom) (feat. pH-1)',
			artist: '이영지',
			lyrics: `하나도 하나도 아무것도 미안하지 않아서
그저 나답게 살아가고픈 것뿐 oh`,
			timestamp: 141.0,
			link: 'https://youtu.be/mMrefw3xMEM?si=mdCNbnxJgMwjkzrZ',
		},
	],
	happiness: [
		{
			id: 3000021,
			title: '좋지 아니한가',
			artist: '유다빈밴드',
			lyrics: `그래도 우린 좋지 아니한가
바람에 흐를 세월 속에
우리 같이 있지 않나`,
			timestamp: 96.0,
			link: 'https://youtu.be/VgXDw7wQWa8?si=y-joalEXY2hho8XS',
		},
		{
			id: 3000013,
			title: '안녕',
			artist: '조이',
			lyrics: `외로운 날들이여 모두 다 안녕
내 마음속의 눈물들도 이제는 안녕`,
			timestamp: 5.0,
			link: 'https://youtu.be/ZzbNM2l-AAA?si=4jNmIk8fCkHLHPvG',
		},
		{
			id: 3000001,
			title: 'My Genesis (Übermensch)',
			artist: '온앤오프',
			lyrics: `난 사랑해 나의 모든 삶을
난 창조해 나의 모든 자유`,
			timestamp: 58.0,
			link: 'https://youtu.be/0gvHGxwHMFw?si=DraUGELUGdeFNjYd',
		},
		{
			id: 3000002,
			title: '너를 사랑해',
			artist: 'S.E.S.',
			lyrics: `나는 행복해 다른 누구도
난 부럽지 않아`,
			timestamp: 75.0,
			link: 'https://youtu.be/LKr3kSirJr4?si=AS-bb-6WS8Q8ooOm',
		},
		{
			id: 3000006,
			title: '꽃놀이',
			artist: '청요일',
			lyrics: `좋아하는 것이 가득하길
동그라미 치는 날짜마다
다음 날을 기다릴 수 있기를`,
			timestamp: 150,
			link: 'https://www.youtube.com/watch?v=28gjWEp2M34',
		},
		{
			id: 1000210,
			title: '행복',
			artist: '슈퍼주니어',
			lyrics: `영원한 행복 나 놓칠 수 없죠 
그대 나 보이나요 나를 불러줘요 언제라도`,
			timestamp: 144.0,
			link: 'https://youtu.be/L8Rsxy7Ch2M?si=4lKJOkuJNfj6O09o',
		},
		{
			id: 1000211,
			title: '휘이 (Prod. Young K (DAY6), 나상현)',
			artist: '휘인',
			lyrics: `손에 잡히는 건 행복뿐일 거야
넌 안 돼 넌 못해 포기해
이런 말들은 다 찍찍 그어 X`,
			timestamp: 74.0,
			link: 'https://youtu.be/PC7XTCEeIB8?si=-9JLr7fgcOWJs5T3',
		},
		{
			id: 1000212,
			title: '행복은 늘 가까이에 있어',
			artist: '볼빨간사춘기, 바닐라 어쿠스틱, 스웨덴세탁소, 스무살, 레터 플로우, 김지수, WH3N, 보라미유, 최유리',
			lyrics: `누구나 행복은 항상
가까이에 있다는 거`,
			timestamp: 114.0,
			link: 'https://www.youtube.com/watch?v=YafkWH9mujo&pp=ygUh7ZaJ67O17J2AIOuKmCDqsIDquYzsnbTsl5Ag7J6I7Ja0',
		},
		{
			id: 1000213,
			title: 'WISH (Korean Ver.)',
			artist: 'NCT WISH',
			lyrics: `늘 바라왔던 작은 소원
네가 행복했으면 좋겠어`,
			timestamp: 98.0,
			link: 'https://youtu.be/UrMOr7JCwbM?si=SJmhJMzgINKuV1uz',
		},
		{
			id: 1000214,
			title: '세가지 소원(Wish Tree)',
			artist: '레드벨벳',
			lyrics: `내 첫 번째 소원 너와 나 오늘처럼 행복하길
두 번째 소원은 몇 번의 겨울 지나도 꼭 함께이길`,
			timestamp: 126.0,
			link: 'https://www.youtube.com/watch?v=MkjjfI7eiV4',
		},
		{
			id: 1000215,
			title: 'Youth',
			artist: '기현',
			lyrics: `애쓰지 않더라도 행복하고 싶어
사랑한단 말을 더 쉽게 하고 싶어`,
			timestamp: 119.0,
			link: 'https://youtu.be/NxzawQKdqzM?si=zW6Wb4n9wMjbdq-b',
		},
		{
			id: 1000217,
			title: `Goin' High`,
			artist: 'The Poles',
			lyrics: `그냥 오늘을 다 즐기면 되는 것 같아
우리의 매일이 다 괜찮아질 것만 같아`,
			timestamp: 115.0,
			link: 'https://www.youtube.com/watch?v=QpanpnhgBro&pp=ygUKR29pbicgSGlnaA%3D%3D',
		},
		{
			id: 1000218,
			title: '이 지금',
			artist: '아이유',
			lyrics: `이 하루, 이 지금 우리 눈부셔 아름다워
이 불꽃놀이는 끝나지 않을 거야`,
			timestamp: 47.0,
			link: 'https://www.youtube.com/watch?v=8ykMyNHAdKk&pp=ygUR7J20IOyngOq4iCDsnYzsm5A%3D',
		},
		{
			id: 1000219,
			title: '행복',
			artist: '레드벨벳',
			lyrics: `어제 오늘 내일도 행복을 찾는 나의 모험일기
달라 달라 나는 좀 긍정의 힘을 나는 믿고 있지`,
			timestamp: 74.0,
			link: 'https://youtu.be/K0THWR1irk0?si=2hkmrEMNlUAIrBD6',
		},
		{
			id: 1000220,
			title: '개화 (Flowering)',
			artist: 'LUCY',
			lyrics: `바람아 내게 봄을 데려와 줘
(벚꽃잎이 흩날리듯이)
시간아 나의 봄에 스며들어 점점 더 더 더`,
			timestamp: 59.0,
			link: 'https://youtu.be/7jxlsVRylq8?si=CQbLNsvsqyXb6XoJ',
		},
		{
			id: 1000221,
			title: '등대',
			artist: '하현상',
			lyrics: `나를 좀 더 돌봐줘야겠어
외로움도 저 바다에 날려버리겠어`,
			timestamp: 184.0,
			link: 'https://youtu.be/r3osM4YzeEY?si=5FVGGNRbRnWuavY1',
		},
		{
			id: 1000222,
			title: 'SMILEY (Feat. BIBI)',
			artist: '최예나',
			lyrics: `I'm gonna make it Smile Smile Smile away
예쁘게 웃고 넘겨버릴래`,
			timestamp: 38.0,
			link: 'https://youtu.be/2KSWVz2tDEI?si=FZhN5In5YYuaDZRD',
		},
		{
			id: 1000223,
			title: 'Perfect Night',
			artist: '르세라핌',
			lyrics: `There’s no better feeling
in the whole wide world`,
			timestamp: 45.0,
			link: 'https://youtu.be/Gqfq_8jPw8Q?si=J0K-m8DQypaMJ2_y',
		},
		{
			id: 1000224,
			title: 'A Book of Love',
			artist: '하현상',
			lyrics: `이 모든 게 잠깐일 뿐인 거야
We'll be alright`,
			timestamp: 49.0,
			link: 'https://youtu.be/e6__mDnNP4g?si=wUu_byrTEIsDHB9b',
		},
		{
			id: 1000225,
			title: '언젠가 봄은 찾아올 거야',
			artist: '원필',
			lyrics: `행복해질 거야 아팠던 상처들 다
잊어버리고 모두 지워 버리고
언젠가 봄은 찾아올 거야`,
			timestamp: 99.0,
			link: 'https://youtu.be/RJyWFx1gjA4?si=WAkJM9o-tP-Vrg2r',
		},
		{
			id: 1000226,
			title: '행복해져라',
			artist: '커피소년',
			lyrics: `행복해져라 행복해져라
행복해져라 행복해져라`,
			timestamp: 35.0,
			link: 'https://youtu.be/wg2nMM2OxeA?si=e4RSX7CJ2kdyOvI0',
		},
	],
	health: [
		{
			id: 3000004,
			title: '무적 (ONE)',
			artist: 'DAY6',
			lyrics: '절대 부서지지 않는 무적',
			timestamp: 133.0,
			link: 'https://youtu.be/aoTdW4GLtIQ?si=W8nqAasywLO_7foX',
		},
		{
			id: 1000001,
			title: '건강이 최고',
			artist: '유애자',
			lyrics: `건강 건강 건강이 최고
남은 인생 건강하게 아프지 말고 `,
			timestamp: 68.0,
			link: 'https://youtu.be/xjXo6jx-R5w?si=fuo8dSmgfdnb-ftA',
		},
		{
			id: 1000002,
			title: '우주의 여름',
			artist: '라쿠나',
			lyrics: `너와 내가 다치지 않을 곳으로`,
			timestamp: 58.0,
			link: 'https://www.youtube.com/watch?v=SFVZlC19iYg&pp=ygUQ7Jqw7KO87J2YIOyXrOumhA%3D%3D',
		},
		{
			id: 1000003,
			title: 'Amino Acid',
			artist: 'NCT 127',
			lyrics: `온몸은 건강하지 에오 에오 에오
정신도 멀쩡해 에오 에오 에오`,
			timestamp: 55.0,
			link: 'https://youtu.be/RdtsDBZ6LLQ?si=W_-Lu-vURTDExP1s',
		},
		{
			id: 1000004,
			title: 'Healer',
			artist: 'DAY6',
			lyrics: `진짜 너만 있으면 괜찮아,
괜찮아지는 날 보면 나도 신기해 
아픈 게 사라져, 몸이 가벼워져`,
			timestamp: 54.0,
			link: 'https://youtu.be/HXEG0fqrViM?si=0ud-RE3jTDocesdu',
		},
		{
			id: 1000005,
			title: 'When This Rain Stops',
			artist: '웬디',
			lyrics: `마음에 비가 내려도
When this rain stops 그때 다시 웃으면 돼`,
			timestamp: 81.0,
			link: 'https://www.youtube.com/watch?v=tknKZe_TyqU',
		},
		{
			id: 1000006,
			title: 'NO PAIN',
			artist: '실리카겔',
			lyrics: `No pain, no fail`,
			timestamp: 75.0,
			link: 'https://youtu.be/U31mUH2DnWk?si=Q2fUOO68XHHR4ro7',
		},
		{
			id: 1000007,
			title: 'Back Door',
			artist: 'Stray Kids',
			lyrics: `고생했어 주인 잘못 만난 몸
호강 시켜 줄게 따라와라와라 back door`,
			timestamp: 66.0,
			link: 'https://youtu.be/PYq5hsjigdc?si=sRXTknr6C19OT3WW',
		},
		{
			id: 1000008,
			title: '우유송',
			artist: '꾸러기 동요',
			lyrics: `단백질 칼슘도 왕 비타민 가득
건강한 내 입맛에 우유가 딱이야
우유 좋아 우유 좋아 우유 주세요`,
			timestamp: 29.0,
			link: 'https://youtu.be/dB8NJ4Gccnk?si=_5tor58EQ5hCt7Xn',
		},
		{
			id: 1000009,
			title: '나는 아픈 건 딱 질색이니까',
			artist: '(여자)아이들',
			lyrics: `아냐 지나치는 게 나을 것 같아
나는 아픈 건 딱 질색이니까`,
			timestamp: 156.0,
			link: 'https://youtu.be/vBJVWOOsB4A?si=u5a2FNeksb_g6DW6',
		},
	],
	impeachment: [
		{
			id: 3000014,
			title: 'NO MERCY',
			artist: 'B.A.P',
			lyrics: '이제는 너그럽게 봐주지 않겠어',
			timestamp: 193.0,
			link: 'https://youtu.be/d5b1J0iSlfg?si=m5mJUxpyFezcMQMw',
		},
		{
			id: 2000212,
			title: 'JUSTICE',
			artist: '드림캐쳐',
			lyrics: `더 이상의 죄는 없어
반복될 순 없으니`,
			timestamp: 137,
			link: 'https://www.youtube.com/watch?v=cTbSrtZTqgw',
		},
		{
			id: 2000213,
			title: 'Next Level',
			artist: '에스파',
			lyrics: `저 너머의 문을 열어 Next level
널 결국엔 내가 부셔 Next level`,
			timestamp: 46,
			link: 'https://www.youtube.com/watch?v=tkzYyEp4zB4',
		},
		{
			id: 2000214,
			title: 'Step Back',
			artist: 'GOT the beat',
			lyrics: `넘지 말아 border line (step back, step back)
니가 비빌 곳이 아니야 (step back, step back)`,
			timestamp: 60,
			link: 'https://www.youtube.com/watch?v=zspA0I7xme4',
		},
		{
			id: 2000215,
			title: 'Break It',
			artist: '카라',
			lyrics: `두 번 다신 볼 수 없게 주저없이 날려
한번에 널 멋지게 차 버릴꺼야 break it`,
			timestamp: 57,
			link: 'https://youtu.be/ZM_4YQHOfXQ?si=GamAtzwQ-L-tDJg4',
		},
		{
			id: 1000147,
			title: 'Sucker Punch!',
			artist: 'Xdinary Heroes',
			lyrics: `Feels like sucker punch, 더 세게 한 방 또 날려
Sucker punch, 이 순간만을 기다린 듯이, pow`,
			timestamp: 56.0,
			link: 'https://www.youtube.com/watch?v=rdNLkQ5PlVQ',
		},
		{
			id: 1000148,
			title: 'How Sweet',
			artist: '뉴진스',
			lyrics: `거기 숨지 말고 빨리 나와
You, little demon in my storyline,
don't knock on my door`,
			timestamp: 202.0,
			link: 'https://www.youtube.com/watch?v=vrM2mrI83uk',
		},
		{
			id: 1000149,
			title: '소년만화',
			artist: 'Xdinary Heroes',
			lyrics: `최악의 상황에 주먹을 뻗는다
몇 번이든 상대가 나가떨어질 때까지`,
			timestamp: 46.0,
			link: 'https://www.youtube.com/watch?v=0HRVFXXPitY',
		},
		{
			id: 1000150,
			title: 'Future Perfect (Pass the MIC)',
			artist: '엔하이픈',
			lyrics: `Kill the past, 그냥 꺼져
그냥 꺼져, 자격을 논해?`,
			timestamp: 26.0,
			link: 'https://youtu.be/I4yPQGSgNxk?si=ahFjN3OFP7sosXzj',
		},
		{
			id: 1000151,
			title: 'Am I Wrong',
			artist: '방탄소년단',
			lyrics: `뉴스를 봐도 아무렇지 않다면
그 댓글이 아무렇지 않다면 그 증오가 아무렇지 않다면
넌 정상 아닌 게 비정상`,
			timestamp: 111.0,
			link: 'https://www.youtube.com/watch?v=4fgUV5fzuIE',
		},
		{
			id: 1000152,
			title: 'Am I Wrong',
			artist: '방탄소년단',
			lyrics: `자 소리질러 MAYDAY MAYDAY
온 세상이 다 미친 것 같아 끝인 것 같아`,
			timestamp: 56.0,
			link: 'https://www.youtube.com/watch?v=4fgUV5fzuIE',
		},

		{
			id: 1000154,
			title: 'JUSTICE',
			artist: '드림캐쳐',
			lyrics: `얼룩이 날 삼키지 못하게
간절한 외침으로 Fight for justice, Rise up`,
			timestamp: 40.0,
			link: 'https://www.youtube.com/watch?v=cTbSrtZTqgw',
		},

		{
			id: 1000156,
			title: 'Next Level',
			artist: '에스파',
			lyrics: `위협에 맞서서
제껴라 제껴라 제껴라`,
			timestamp: 23.0,
			link: 'https://www.youtube.com/watch?v=tkzYyEp4zB4',
		},

		{
			id: 1000158,
			title: 'Step Back',
			artist: 'GOT the beat',
			lyrics: `너 감히 누구라고 날 제껴
이쯤에서 물러나고 입 닫는 게 좋을걸`,
			timestamp: 15.0,
			link: 'https://www.youtube.com/watch?v=zspA0I7xme4',
		},
		{
			id: 1000159,
			title: '때려쳐',
			artist: 'DAY6',
			lyrics: `때려쳐
머릴 굴려보든 뭐를 더 하든
답 없어`,
			timestamp: 137.0,
			link: 'https://www.youtube.com/watch?v=I1nGGToyte8',
		},
		{
			id: 1000160,
			title: '바꿔',
			artist: '이정현',
			lyrics: `거짓은 다 바꿔 바꿔 바꿔
세상을 다 바꿔 `,
			timestamp: 89.0,
			link: 'https://www.youtube.com/watch?v=NY-U-0NHccs',
		},
		{
			id: 1000161,
			title: 'Fearless',
			artist: '세븐틴',
			lyrics: `영원한 건 절대 없단 걸
알 수 있기에 끝낼 수 있어`,
			timestamp: 148.0,
			link: 'https://www.youtube.com/watch?v=kpewpapC9r8',
		},
		{
			id: 1000162,
			title: '전야 (前夜) (The Eve)',
			artist: 'EXO',
			lyrics: `깨고 부딪쳐야 해 우릴 볼 수 있도록
크게 소리쳐야 해 멀리 번져가도록`,
			timestamp: 43.0,
			link: 'https://www.youtube.com/watch?v=gK8YC0nxNe0',
		},
		{
			id: 1000163,
			title: '전야 (前夜) (The Eve)',
			artist: 'EXO',
			lyrics: `여린 빛들이 번져가
긴 어둠을 다 몰아낸 순간
다시 깨어나야 해 새로워진 아침에`,
			timestamp: 57.0,
			link: 'https://www.youtube.com/watch?v=gK8YC0nxNe0',
		},
		{
			id: 1000164,
			title: '전야 (前夜) (The Eve)',
			artist: 'EXO',
			lyrics: `변화의 목소리 파도가 일어
전부 집어삼킬 바다를 만든 건 It's you`,
			timestamp: 133.0,
			link: 'https://www.youtube.com/watch?v=gK8YC0nxNe0',
		},
		{
			id: 1000165,
			title: 'NOT TODAY',
			artist: '방탄소년단',
			lyrics: `오늘은 절대 죽지 말아 빛은 어둠을 뚫고 나가
새 세상 너도 원해 Oh baby yes I want it`,
			timestamp: 43.0,
			link: 'https://youtu.be/mCtVrf2x5BQ?si=AbtRtgMamk7Digwa',
		},
		{
			id: 1000166,
			title: 'New World',
			artist: '에이티즈',
			lyrics: `천둥처럼 깨워 세상을 We are
폭풍처럼 막을 수 없어 We are`,
			timestamp: 66.0,
			link: 'https://youtu.be/9_xKGr2OPv0?si=dIchravqK-VzERvX',
		},
		{
			id: 1000167,
			title: 'New World',
			artist: '에이티즈',
			lyrics: `역사의 페이지를 바꾸지
일어나 망설이지 말고`,
			timestamp: 166.0,
			link: 'https://youtu.be/9_xKGr2OPv0?si=dIchravqK-VzERvX',
		},
		{
			id: 1000168,
			title: 'Answer',
			artist: '에이티즈',
			lyrics: `우리가 보이는가 타오르는 눈빛과
삼킬 듯한 함성이 온 세상을 울리는 걸`,
			timestamp: 177.0,
			link: 'https://youtu.be/2sqtwAIqllU?si=gvKl3gRzdmbzjZd8',
		},
		{
			id: 1000169,
			title: 'Lesson 2 (Sunset)',
			artist: '에픽하이',
			lyrics: `다신 지껄일 수 없게
깊게 널 묻고`,
			timestamp: 205.0,
			link: 'https://youtu.be/vhumd56d1S0?si=KaL3xrWMXo_uK8mR',
		},
		{
			id: 1000170,
			title: '시대유감 (時代遺憾)',
			artist: '서태지와 아이들',
			lyrics: `모두를 뒤집어
새로운 세상이 오길 바라네`,
			timestamp: 201.0,
			link: 'https://youtu.be/hxENwcFvL3w?si=S9oFYoE2r0FvbwRL',
		},
		{
			id: 1000171,
			title: '다시 만난 세계 (Into The New World)',
			artist: '소녀시대',
			lyrics: `수많은 알 수 없는 길 속에 희미한 빛을 난 쫓아가
언제까지라도 함께하는 거야 다시 만난 나의 세계`,
			timestamp: 98.0,
			link: 'https://youtu.be/mbg1Cn6Ua9U?si=vM200q1o0tWVg1Kn',
		},
		{
			id: 1000172,
			title: 'Run For Roses',
			artist: 'NMIXX',
			lyrics: `꿈꿔온 united Wanna get it
Wanna fight it Wanna stand up & salute`,
			timestamp: 44.0,
			link: 'https://youtu.be/h00DpJn_ldM?si=EvQ8NqkaaDH-3OVl',
		},
		{
			id: 1000173,
			title: 'MAMACITA (아야야)',
			artist: '슈퍼주니어',
			lyrics: `감투를 쓴 자 무게를 느껴!
You can't do that!`,
			timestamp: 62.0,
			link: 'https://youtu.be/-kiLkUIpe5M?si=5auE-32aHkSHF6Ro',
		},
		{
			id: 1000174,
			title: 'HIT',
			artist: '세븐틴',
			lyrics: `우리를 위해 이 노랠 부르자
한계를  넘어선 우리는 HIGHER`,
			timestamp: 155.0,
			link: 'https://youtu.be/qpbJcxKX_rI?si=P3P6Ybl8hS_jhfid',
		},
		{
			id: 1000175,
			title: '전사의 후예 (폭력시대)',
			artist: 'H.O.T.',
			lyrics: `그들은 나를 짓밟았어 하나 남은 꿈도 다 가져 갔어
길을 찾아 봤어 아무데도 없어
이제 내가 나를 벌하겠어`,
			timestamp: 30.0,
			link: 'https://youtu.be/RpGTUmISOyg?si=Rik6yYCDC8rbuKy3',
		},
		{
			id: 1000176,
			title: '우린',
			artist: 'DAY6 (Even of Day)',
			lyrics: `눈앞이 다 깜깜해도 어둠이 짙어 보여도
틀림없는 사실은 다시 빛은 돌아와`,
			timestamp: 183.0,
			link: 'https://youtu.be/tqyrl2V1kTM?si=td1bZUBW-m_aaxMe',
		},
		{
			id: 1000177,
			title: '촛불하나',
			artist: 'god',
			lyrics: `불을 밝히니 촛불이 두 개가 되고
그 불빛으로 다른 초를 또 찾고
세 개가 되고 네 개가 되고 어둠은 사라져가고`,
			timestamp: 107.0,
			link: 'https://youtu.be/IJRo4GJqTfE?si=PKsbWrDR8IkYhh5A',
		},
		{
			id: 1000178,
			title: '촛불하나',
			artist: 'god',
			lyrics: `작은 촛불하나 켜보면
달라지는게 너무나도 많아`,
			timestamp: 98.0,
			link: 'https://youtu.be/IJRo4GJqTfE?si=PKsbWrDR8IkYhh5A',
		},

		{
			id: 1000180,
			title: '꺼져',
			artist: '효린',
			lyrics: `꺼져 당장 내 눈 앞에서
더 이상 못 참겠어 내 인생에서 좀 꺼져`,
			timestamp: 59.0,
			link: 'https://youtu.be/_2ySEor8tCU?si=BHzJiCTfH44U0mk5',
		},
		{
			id: 1000181,
			title: 'Girls',
			artist: '에스파',
			lyrics: `혼돈 속에서 피어나 (We Them Girls)
두려움에 맞설 그런 용기 (Ah Yeah)
언제라도 우린 Together`,
			timestamp: 69.0,
			link: 'https://youtu.be/MBbqqWqLPlI?si=GrJCCeC0EEMMEk7S',
		},
		{
			id: 1000182,
			title: 'Girls',
			artist: '에스파',
			lyrics: `일어나라 그대여 더 치명적인 전쟁 속에
두발로 버텨 적의 Hook! Black Mamba
두렵지 않아 네가 Hoot! 부셔줄게`,
			timestamp: 11.0,
			link: 'https://youtu.be/MBbqqWqLPlI?si=GrJCCeC0EEMMEk7S',
		},
	],
	luck: [
		{
			id: 3000003,
			title: 'Lucky',
			artist: 'EXO',
			lyrics: `참 행운이야, 참 다행이야
세상에 당연한 건 없어`,
			timestamp: 24.0,
			link: 'https://youtu.be/lsrVF1J4emc?si=x1Kf8687jhOebhyu',
		},
		{
			id: 2000223,
			title: '행운을 빌어',
			artist: '우주소녀',
			lyrics: `너의 행운을 빌어 가져가
꽉 잡아, lucky chance`,
			timestamp: 76,
			link: 'https://youtu.be/KFkVUdb4w5o?si=-tDVxfbP63KNa6fn',
		},
		{
			id: 2000224,
			title: 'OMG',
			artist: '뉴진스',
			lyrics: `너만 생각나 24
난 행운아야 정말로 I know, I know`,
			timestamp: 61,
			link: 'https://youtu.be/2Kff0U8w-aU?si=VnYUDiuAXlRJYuxe',
		},
		{
			id: 1000227,
			title: '행운을 빌어 줘',
			artist: '원필',
			lyrics: `아무쪼록 행운을 빌어 줘
내 앞길에 행복을 빌어 줘`,
			timestamp: 55.0,
			link: 'https://www.youtube.com/watch?v=hrXCP0xeoA8&pp=ygUU7ZaJ7Jq07J2EIOu5jOyWtCDspJg%3D',
		},
		{
			id: 1000228,
			title: 'Lucky Girl Syndrome',
			artist: '아일릿',
			lyrics: `Finally finally finally
다 이뤄질 거야 매일 주문을 외워  `,
			timestamp: 29.0,
			link: 'https://youtu.be/8QFM8Ews68c?si=e8zKlDHuYf4CVgUX',
		},
		{
			id: 1000229,
			title: '좋은 예감',
			artist: '윤마치, 미미미누',
			lyrics: `지금까지 네가 바라왔던 모든 건
다 이뤄질 거야 이뤄져야만 해
그런 예감이 들어 `,
			timestamp: 54.0,
			link: 'https://www.youtube.com/watch?v=pB0s1cladVc&pp=ygUN7KKL7J2AIOyYiOqwkA%3D%3D',
		},
		{
			id: 1000230,
			title: '행운을 빌어요',
			artist: '페퍼톤스',
			lyrics: `긴 여행의 날들
끝없는 행운만이 그대와 함께이길`,
			timestamp: 247.0,
			link: 'https://www.youtube.com/watch?v=U6dTSMCqlp4',
		},
		{
			id: 1000232,
			title: 'Clover',
			artist: '더보이즈',
			lyrics: `마치 네잎클로버처럼
넌 나에게는 너무 기적 같은 행운이야`,
			timestamp: 146.0,
			link: 'https://www.youtube.com/watch?v=LNIfFytKhX0&pp=ygUTQ2xvdmVyIOuNlOuztOydtOymiA%3D%3D',
		},
		{
			id: 1000233,
			title: 'strawberry moon',
			artist: '아이유',
			lyrics: `다시 마주하기 어려운 행운이야
온몸에 심장이 뛰어`,
			timestamp: 85.0,
			link: 'https://youtu.be/Kevp2lFKSOg?si=EUCwIhXQcj9jAXQu',
		},
		{
			id: 1000235,
			title: '모 아니면 도 (Go Big or Go Home)',
			artist: '엔하이픈',
			lyrics: `I'm feeling lucky 예감이 좋지
두근거림에 feels alright
내 운명은 대박 이런 근자감`,
			timestamp: 46.0,
			link: 'https://youtu.be/n4erXpHxmcQ?si=Cmf3PdS0sIpVchgc',
		},
		{
			id: 1000236,
			title: '행운을 빌어요',
			artist: '잔나비',
			lyrics: `행운을 빌어줘요 웃음을 보여줘요
눈물은 흘리지 않을게, 굿바이`,
			timestamp: 67.0,
			link: 'https://youtu.be/K_8ITDLT4G8?si=6zwuNBP8_lH7Rj5p',
		},
	],
	marriage: [
		{
			id: 2000194,
			title: '감사',
			artist: '김동률',
			lyrics: `단 한순간에도 나의 사람이란 걸
후회하지 않도록 그댈 사랑할게요`,
			timestamp: 87,
			link: 'https://youtu.be/oDlLNTwInBM?si=Dq-JjJaspEk4JGaM',
		},
		{
			id: 1000010,
			title: '결혼해 줄래요?',
			artist: '임한별',
			lyrics: `나랑 결혼해 줄래요?
처음부터 말하고 싶었죠`,
			timestamp: 73.0,
			link: 'https://youtu.be/M7vQEiaSyQA?si=uVHe-TLSYOYgWFIY',
		},
		{
			id: 1000011,
			title: '우리 사랑 이대로',
			artist: '서인국, 정은지',
			lyrics: `내품에 안긴채 눈을 감는날
세상 끝까지 함께해`,
			timestamp: 78.0,
			link: 'https://youtu.be/d3Valz3Zq10?si=9UyF7xNBYCXp0KDf',
		},
		{
			id: 1000012,
			title: '청혼하지 않을 이유를 못 찾았어',
			artist: '이무진',
			lyrics: `너에게 청혼하지 않을 이유를 못 찾았어
내 일상, 내 모든 하루는 너라서`,
			timestamp: 72.0,
			link: 'https://www.youtube.com/watch?v=t37jMbfNTPk&pp=ygUr7LKt7Zi87ZWY7KeAIOyViuydhCDsnbTsnKDrpbwg66q7IOywvuyVmOyWtA%3D%3D',
		},
		{
			id: 1000013,
			title: 'Serenade',
			artist: 'BOYNEXTDOOR',
			lyrics: `난 차도 없고 면허도 없어 근데 하나 약속할게
I'll get along with your dad for you`,
			timestamp: 167.0,
			link: 'https://www.youtube.com/watch?v=ECgWPp8hvOs',
		},
		{
			id: 1000014,
			title: '결혼해줄래 (Feat. BIZNIZ)',
			artist: '이승기',
			lyrics: `나랑 결혼해줄래
나랑 평생을 함께 살래`,
			timestamp: 0.0,
			link: 'https://youtu.be/7MPHlqNhh4M?si=iON95t6oJ9qbTgLM',
		},

		{
			id: 1000016,
			title: 'ME= (나는)',
			artist: 'JUST B',
			lyrics: `긴 꿈을 꾸듯 함께 할 너와 나 (너와 나)
끝없는 어둠 속 내가 널 비출게`,
			timestamp: 194.0,
			link: 'https://youtu.be/5MO_BUNA6Es?si=jx59KJjWIz05WuxM',
		},
		{
			id: 1000017,
			title: 'You Wake Me Up',
			artist: '성진',
			lyrics: `너 없인 다시 일어설 자신이 없어
내 곁엔 늘 네가 스며들어 있단 생각에 난 또 나아가
You wake me up`,
			timestamp: 60.0,
			link: 'https://youtu.be/XCOlK4MS_9M?si=clZpgkQg7_wg-llw',
		},
		{
			id: 1000018,
			title: '사랑歌',
			artist: 'EPEX',
			lyrics: `창해같이 깊고도
달 밝은 밤처럼 환한 내 사랑`,
			timestamp: 55.0,
			link: 'https://youtu.be/0B8YtjCyJcs?si=tfSdAclJvtmHVLp7',
		},
		{
			id: 1000019,
			title: '작은 언약식',
			artist: 'EPEX',
			lyrics: `종일 널 위해 준비했어
내 맘 들어줄래?`,
			timestamp: 11.0,
			link: 'https://youtu.be/o-h9KIhYWPc?feature=shared',
		},
		{
			id: 1000020,
			title: '동거',
			artist: '선우정아',
			lyrics: `있잖아 난 너를 아직도 사랑해 시간이 낡았고 
모든 게 변했어도 있잖아 우리는 그냥 이대로 살자`,
			timestamp: 86.0,
			link: 'https://youtu.be/aXGcJNPwSRc?si=ZjLDAcew24_YsFGf',
		},
	],
	study: [
		{
			id: 3000008,
			title: 'unlucky',
			artist: '아이유',
			lyrics: `난 나의 보폭으로 갈게
불안해 돌아보면서도
별 큰일 없이 지나온 언제나처럼`,
			timestamp: 178.0,
			link: 'https://youtu.be/l5Rb1pNre40?si=y4vUfVS2-4P8vc8L',
		},
		{
			id: 2000216,
			title: '듣기만 해도 성공하는 노래',
			artist: '조빈',
			lyrics: `나는 최고를 향해 걸어가는 도전자이다
나는 나를 영원히 응원한다`,
			timestamp: 110,
			link: 'https://youtu.be/0wwUmY7RGXI?si=QLL1cfD9lXvQpXnp',
		},
		{
			id: 2000217,
			title: '너와의 모든 지금',
			artist: '재쓰비',
			lyrics: `Stay in what you believin' 넌 너를 그냥 믿어
도무지 너를 모르겠다면 네 곁에 나를 믿어`,
			timestamp: 134,
			link: 'https://youtu.be/YLxEK0ZKx9A?si=hjkm9sHez7fxtngJ',
		},
		{
			id: 2000218,
			title: '이루리',
			artist: '우주소녀',
			lyrics: `이루리, 이루리 la
이루리, 이루리 la
모두 다 이뤄질 거야`,
			timestamp: 60,
			link: 'https://youtu.be/Jz1Mqg_-SRk?si=ty72tBRIea9XYFGt',
		},
		{
			id: 2000219,
			title: 'Smart',
			artist: '르세라핌',
			lyrics: `계획대로 돼가지, 난 나비가 될 애송이,
I'm a smarter, baby`,
			timestamp: 74,
			link: 'https://youtu.be/VwJggqvxGUQ?si=jDe0s7L5lH7zDFd8',
		},
		{
			id: 2000220,
			title: '꿈꾸는 마음으로',
			artist: '우주소녀',
			lyrics: `꿈꾸는 대로 그려질 너와 나
꿈꾸는 대로 다 이뤄질 거야`,
			timestamp: 163,
			link: 'https://youtu.be/eHjNJXKy-sU?si=GsAU-FPqV7sHb6aH',
		},
		{
			id: 2000221,
			title: 'BYE BYE BYE',
			artist: '위아이',
			lyrics: 'So 나의 리즈는 be going on huh',
			timestamp: 28,
			link: 'https://youtu.be/E7Ff1p7plT8?si=BCdsg1gw2hVsZTSW',
		},
		{
			id: 1000195,
			title: 'My Pace',
			artist: 'Stray Kids',
			lyrics: `조급할 필요 없어 My Pace
비교 따윈 하지 마`,
			timestamp: 60.0,
			link: 'https://youtu.be/Pd370NHJ9nI?si=Ew9U396VqEBFElwE',
		},
		{
			id: 1000196,
			title: '우리의 꿈',
			artist: '코요태',
			lyrics: `세상은 꿈꾸는 자의 것이라고
용기를 내 넌 할 수 있어`,
			timestamp: 46.0,
			link: 'https://www.youtube.com/watch?v=5eFAfq_DSKQ&pp=ygUW7Jqw66as7J2YIOq_iCBvZmZpY2lhbA%3D%3D',
		},
		{
			id: 1000197,
			title: 'A+',
			artist: '위클리',
			lyrics: `뭘 해도 A+ 반짝임은 덤덤덤 빛이 나니까`,
			timestamp: 13.0,
			link: 'https://youtu.be/E9C8Y6wDcek?si=oUA-nn3FG96RBR8s',
		},
		{
			id: 1000198,
			title: '라이벌 (Rival)',
			artist: '이진혁',
			lyrics: `최후의 1인 울려 골든벨 친구들아 미안해
99kills 100명 중에 1명`,
			timestamp: 25.0,
			link: 'https://youtu.be/RcDKRwb6j3A?si=QBF20NoxK6apJ5Df',
		},
		{
			id: 1000199,
			title: '좋은 예감',
			artist: '윤마치, 미미미누',
			lyrics: `지금까지 네가 바라왔던 모든 건
다 이뤄질 거야 이뤄져야만 해
그런 예감이 들어 `,
			timestamp: 54.0,
			link: 'https://www.youtube.com/watch?v=pB0s1cladVc&pp=ygUN7KKL7J2AIOyYiOqwkA%3D%3D',
		},
		{
			id: 1000200,
			title: '꿈을 꾸는 소녀',
			artist: 'Xdinary Heroes',
			lyrics: `겁먹을 필요 없어요
Everything's gonna be alright`,
			timestamp: 141.0,
			link: 'https://www.youtube.com/watch?v=_FY2_jn6l_E',
		},
		{
			id: 1000201,
			title: 'No More Dream',
			artist: '방탄소년단',
			lyrics: `대학은 걱정 마, 멀리라도 갈 거니까`,
			timestamp: 37.0,
			link: 'https://youtu.be/q0MsfNFrYlQ?si=3C_gqV60YgTJyCe1',
		},
		{
			id: 1000202,
			title: 'Hello Future',
			artist: 'NCT DREAM',
			lyrics: `기다렸어 어서 와 어디든 we're coming together
아무 걱정 하지 마 잘 될 거야 hello future`,
			timestamp: 45.0,
			link: 'https://youtu.be/UpeUA9rtAJk?si=iA9PHXcIlHoDCm0R',
		},
		{
			id: 1000203,
			title: '같이 가요',
			artist: '세븐틴',
			lyrics: `내 뜻대로 안 되는 하루하루가 안개처럼 흐릿하지만
수많은 길이 내 앞에 있어`,
			timestamp: 61.0,
			link: 'https://www.youtube.com/watch?v=pa86DMlUpHg&pp=ygUN6rCZ7J20IOqwgOyalA%3D%3D',
		},
		{
			id: 1000204,
			title: 'HOME;RUN',
			artist: '세븐틴',
			lyrics: `평소처럼만 하면 돼 뭐가 그리 걱정돼
더 멀리멀리 날려보자 하늘 위로 yeh eh eh`,
			timestamp: 40.0,
			link: 'https://youtu.be/_fo7LW2Oj7o?si=-lPMHh62VFyRsmnV',
		},
		{
			id: 1000205,
			title: '길',
			artist: '나상현씨밴드',
			lyrics: `어두운 밤하늘의 어딘가 숨겨져 있는 빛들은
전부 널 위한 거야 널 감싸줄 거야`,
			timestamp: 79.0,
			link: 'https://www.youtube.com/watch?v=fqvo78Gpxtc&pp=ygUW64KY7IOB7ZiE7JSo67C065OcIOq4uA%3D%3D',
		},
		{
			id: 1000207,
			title: 'Ride Or Die',
			artist: '카이',
			lyrics: `긴장할 필요 없어
꿈꿔온 모든 건 현실이 돼`,
			timestamp: 74.0,
			link: 'https://youtu.be/lZe-YJT5MRs?si=FmVZQq9tIgep24i8',
		},
		{
			id: 1000208,
			title: `힘내! (DON'T GIVE UP)`,
			artist: 'TWICE',
			lyrics: `힘을 내 Baby don't give up
나 오늘 힘들었던 이유 다 내일을 향하는 과정`,
			timestamp: 101.0,
			link: 'https://youtu.be/97PCZFThkVM?si=-Pl7kBwx-IVir2XN',
		},
		{
			id: 1000209,
			title: '달리기',
			artist: 'S.E.S.',
			lyrics: `일등 아닌 보통들에겐 박수조차 남의 일인걸
단 한가지 약속은 틀림없이 끝이 있다는 것`,
			timestamp: 142.0,
			link: 'https://youtu.be/Uh-OoxxkMdM?si=YOfptvUl309KZT0k',
		},
	],
	success: [
		{
			id: 1000231,
			title: 'Miracle (기적은 너와 내가 함께하는 순간마다 일어나고 있어)',
			artist: '투모로우바이투게더',
			lyrics: `두 눈을 감아야 보이는 Tomorrow
One, two, three 셋 세면 펼쳐져`,
			timestamp: 85.0,
			link: 'https://www.youtube.com/watch?v=p24jpQrMh98',
		},
		{
			id: 3000025,
			title: '승전가',
			artist: 'Stray Kids',
			lyrics: '승자의 여유 얼굴에는 미소 씩',
			timestamp: 47.0,
			link: 'https://youtu.be/Fy3zu0WsTLM?si=2rL9ynxFl5BUSnft',
		},
		{
			id: 3000017,
			title: '작은별',
			artist: 'LUCY',
			lyrics: '지금 이 순간 누군가에겐\n내가 제일 빛나는 별이니까',
			timestamp: 55.0,
			link: 'https://youtu.be/bHhYNhIfTKg?si=sANBnBk6Z1gSCf8V',
		},
		{
			id: 3000015,
			title: 'Sexy, Free & Single',
			artist: '슈퍼주니어',
			lyrics: '가슴이 요동치는 승리를 맛 봐',
			timestamp: 153.0,
			link: 'https://youtu.be/ngOKfUi-jZg?si=pBncMpnv6cvpvzf8',
		},
		{
			id: 3000010,
			title: 'OFF ROAD',
			artist: '원위',
			lyrics: '우리가 가는 곳이 어디든 완벽해 we are',
			timestamp: 82.0,
			link: 'https://youtu.be/dxTFxO9YS20?si=rLefacFql8bzagjN',
		},
		{
			id: 1000102,
			title: 'Airplane',
			artist: '아이즈원',
			lyrics: `조금만 더 가면 포근한 구름 위에
바라고 바라던 꿈이 펼쳐질 거래`,
			timestamp: 30.0,
			link: 'https://youtu.be/mMDaXgDNeH0?si=hWwi6YJehgb0EXFN',
		},
		{
			id: 2000205,
			title: 'Shine',
			artist: '페퍼톤스',
			lyrics: `빛나라 너의 이름 너의 내일 너의 꿈꾸던 날
빛나라 너의 생각 너의 젊음 너의 사랑까지`,
			timestamp: 77,
			link: 'https://youtu.be/M2KYwaWjfx0?si=dfbl7r8oaM-YmVZP',
		},
		{
			id: 1000104,
			title: 'Best Part',
			artist: 'DAY6',
			lyrics: `나에게 쥐어지는 매일이
Gonna be my Best part`,
			timestamp: 49.0,
			link: 'https://youtu.be/a-UfQfufkgU?si=ckD8ZoagFzl9hTlE',
		},
		{
			id: 1000105,
			title: '촉 (CHOKE)',
			artist: '82MAJOR',
			lyrics: `이건 우리가 이길
촉 촉 촉 촉 촉 촉`,
			timestamp: 50.0,
			link: 'https://www.youtube.com/watch?v=OMEcEBYe3jw&pp=ygUL7LSJIChDSE9LRSk%3D',
		},
		{
			id: 1000106,
			title: '모 아니면 도 (Go Big or Go Home)',
			artist: '엔하이픈',
			lyrics: `모 아니면 도 아니면 모 아니면 도라고
I need a diamond ring 모만이 나의 길
난 루저가 아닌 위너가 돼 That's my way`,
			timestamp: 4.0,
			link: 'https://youtu.be/n4erXpHxmcQ?si=Cmf3PdS0sIpVchgc',
		},
		{
			id: 1000107,
			title: 'MONEYBALL',
			artist: 'Xdinary Heroes',
			lyrics: `I'll be making a new history
모두 열광할 My victory`,
			timestamp: 173.0,
			link: 'https://www.youtube.com/watch?v=2Sv5l5STlYM&pp=ygUJTU9ORVlCQUxM',
		},
		{
			id: 1000108,
			title: 'Break The Wall',
			artist: 'NMIXX',
			lyrics: `꿈꿔왔던 세상이 보여
멈춰 설 이유는 없어 with you`,
			timestamp: 196.0,
			link: 'https://www.youtube.com/watch?v=M8iMREaObhM&pp=ygUOQnJlYWsgVGhlIFdhbGw%3D',
		},
		{
			id: 1000109,
			title: '할 수 있어',
			artist: '더윈드',
			lyrics: `우리는 할 수 있어, 될 수 있어
투명한 마음으로, 빛을 담아 네게 줄게, 날개를 펴고`,
			timestamp: 148.0,
			link: 'https://www.youtube.com/watch?v=MRLViFfWZZk',
		},
		{
			id: 1000111,
			title: '오리 날다',
			artist: '체리필터',
			lyrics: `이제는 하늘로 날아갈래요
하늘 위 떠 있는 멋진 달 되고 싶어`,
			timestamp: 46.0,
			link: 'https://youtu.be/sgnjnNI5ktQ?si=R_5o9kyYNRq76gVm',
		},
		{
			id: 1000112,
			title: '이루리',
			artist: '우주소녀',
			lyrics: `이루리, 이루리 la
이루리, 이루리 la
모두 다 이뤄질 거야`,
			timestamp: 60.0,
			link: 'https://youtu.be/Jz1Mqg_-SRk?si=ty72tBRIea9XYFGt',
		},
		{
			id: 1000113,
			title: '시작',
			artist: '가호',
			lyrics: `원하는 대로 다 가질 거야
그게 바로 내 꿈일 테니까`,
			timestamp: 98.0,
			link: 'https://youtu.be/XbaSYBK5Nc0?si=1ubxFnEYGV5piRPm',
		},
		{
			id: 1000114,
			title: 'We Go Up',
			artist: 'NCT DREAM',
			lyrics: `We go up uh uh uh go up
We go up uh uh uh go up
We go up uh we go up`,
			timestamp: 52.0,
			link: 'https://youtu.be/LV1Es22E0RI?si=nE_dQGdS1Ej05isH',
		},
		{
			id: 1000116,
			title: 'Dunk Shot',
			artist: 'NCT WISH',
			lyrics: `자, 기다린 오늘이야, 활짝 열린 문
준비 끝난 두 발끝이 불타올라 ride`,
			timestamp: 11.0,
			link: 'https://youtu.be/qqWK1i9wnt4?si=eJHofG7JEaIaAijg',
		},
		{
			id: 1000117,
			title: '드림하이',
			artist: '택연, 장우영, 수지, 김수현, JOO',
			lyrics: `I can fly high 나는 믿어요
언젠가는 난 저 하늘위로`,
			timestamp: 67.0,
			link: 'https://youtu.be/5qMUzPH7Qik?si=uEC6Aoa-neEGYi5L',
		},
		{
			id: 1000118,
			title: 'ANTIFRAGILE',
			artist: '르세라핌',
			lyrics: `더 높이 가줄게 내가 바랐던 세계 젤 위에
떨어져도 돼 I'm antifragile antifragile`,
			timestamp: 46.0,
			link: 'https://youtu.be/SZiwpL62to8?si=1lWNaVGB1bRxRWd1',
		},
		{
			id: 1000119,
			title: '여섯 번째 여름',
			artist: 'PLAVE',
			lyrics: `마지막 땀방울의 결말은
헛된 길이 아닐 걸 잘 알아`,
			timestamp: 53.0,
			link: 'https://youtu.be/BG359B3WgK0?si=zBS3POylXeyFXrSQ',
		},
		{
			id: 1000120,
			title: 'Drama',
			artist: '에스파',
			lyrics: `깜짝 놀랄 다음 scene (What? What?)
키를 거머쥔 주인공은 나 (uh)`,
			timestamp: 90.0,
			link: 'https://youtu.be/S3Z6N7U7f6I?si=NeNyxWoodpbTOdC8',
		},
		{
			id: 1000121,
			title: 'I AM',
			artist: 'IVE',
			lyrics: `차라리 날아올라 그럼 네가
지나가는 대로 길이거든`,
			timestamp: 138.0,
			link: 'https://youtu.be/6ZUIwj3FgUY?si=dyfIj3PCJp1BLnTu',
		},
		{
			id: 1000122,
			title: '꿈꾸는 마음으로',
			artist: '우주소녀',
			lyrics: `꿈꾸는 대로 그려질 너와 나
꿈꾸는 대로 다 이뤄질 거야`,
			timestamp: 163.0,
			link: 'https://youtu.be/eHjNJXKy-sU?si=GsAU-FPqV7sHb6aH',
		},
		{
			id: 1000123,
			title: '간절히 바라면 이뤄질 거야 (Feat. 타이거 JK)',
			artist: '아이',
			lyrics: `말해줘 눈물이 날 만큼 행복해질 거라고
항상 네 곁에 있으니까`,
			timestamp: 146.0,
			link: 'https://youtu.be/_MYQSpbikIc?si=yWHeAeSRQ6mlLIgh',
		},
		{
			id: 1000124,
			title: 'Hello Future',
			artist: 'NCT DREAM',
			lyrics: `기다렸어 어서 와 어디든 we’re coming together
아무 걱정 하지 마 잘 될 거야 Hello Future`,
			timestamp: 49.0,
			link: 'https://youtu.be/UpeUA9rtAJk?si=T7yWwk-z0Pdu27NG',
		},
	],
	trip: [
		{
			id: 3000030,
			title: 'Vacation',
			artist: '여자친구',
			lyrics: `지구를 돌고 돌아 rotation
기다려 왔어 너와 나의 vacation`,
			timestamp: 65.0,
			link: 'https://youtu.be/qCDmhZFarO8?si=H0PU8S6WdfqJjEr_',
		},
		{
			id: 2000207,
			title: 'Dun Dun Dance',
			artist: '오마이걸',
			lyrics: '저 따분했던 하루와 일상에서 벗어나',
			timestamp: 51,
			link: 'https://youtu.be/EILeBK18Y2I?si=CHKyDIlzbauka2Pr',
		},
		{
			id: 2000208,
			title: 'My My',
			artist: '세븐틴',
			lyrics: `나의 여행의 시작은 나야
저 태양 위로 My my my my my way`,
			timestamp: 73,
			link: 'https://youtu.be/A_u0xEjJSh0?si=YT9F2iPTFPQe31Ld',
		},
		{
			id: 2000209,
			title: 'Drive',
			artist: '미연',
			lyrics: `두려움은 잊고 이 바람을 느껴
뒤돌아보지 말고 나의 길을 믿어봐`,
			timestamp: 143,
			link: 'https://youtu.be/F_mMkeYQOMs?si=YyiQDXVEtqLoxcsz',
		},
		{
			id: 1000125,
			title: '여행',
			artist: '볼빨간사춘기',
			lyrics: `저 오늘 떠나요 공항으로
핸드폰 꺼 놔요 제발 날 찾진 말아줘`,
			timestamp: 19.0,
			link: 'https://youtu.be/DMcRIihAq9Q?si=N6Fa2FEgaaStqyW4',
		},
		{
			id: 1000126,
			title: '라이더스',
			artist: '페퍼톤스',
			lyrics: `여전히 그대로 멈추지 않은 낡은 자동차
시원한 바람 속으로 멀리 달려가네`,
			timestamp: 18.0,
			link: 'https://www.youtube.com/watch?v=Xa5AeVWT2AY&pp=ygUM65287J20642U7Iqk',
		},
		{
			id: 1000127,
			title: '비행 (World Tour) (feat. MINO of WINNER)',
			artist: '이하이',
			lyrics: `New York, Paris
지구 몇 바퀴를 돌고서
새로운 사랑에 빠질지도 oh`,
			timestamp: 57.0,
			link: 'https://www.youtube.com/watch?v=0Rpzh1LNhV4&pp=ygUq67mE7ZaJIChXb3JsZCBUb3VyKSAoZmVhdC4gTUlOTyBvZiBXSU5ORVIp',
		},
		{
			id: 1000128,
			title: 'Weekend',
			artist: '태연',
			lyrics: `가장 가까운 바다, 혼자만의 영화관
그냥 이끌리는 대로 해도 괜찮으니까`,
			timestamp: 213.0,
			link: 'https://youtu.be/INLFlN-PZq4?si=LsLE0QzyczHLi9CN',
		},
		{
			id: 1000130,
			title: '출발',
			artist: '김동률',
			lyrics: `아주 멀리까지 가 보고 싶어
그곳에선 누구를 만날 수가 있을지`,
			timestamp: 22.0,
			link: 'https://youtu.be/LTudX-OM7AI?si=nyL6A5lKRa5WAxIV',
		},
		{
			id: 1000131,
			title: 'Road Trip',
			artist: 'NCT 127',
			lyrics: `떠나 Road Trip 우리만이 아는 곳으로
어디든지 가고 싶어 손을 꼭 잡고 yeah`,
			timestamp: 0.0,
			link: 'https://youtu.be/C7yRV4mhFGo?si=5m1xua7zxcTTCReO',
		},
		{
			id: 1000132,
			title: 'PARADISE',
			artist: '에이프릴',
			lyrics: `떠나자 PARADISE 너와 나 함께
저 넓은 바다로 날 데려가 줘`,
			timestamp: 61.0,
			link: 'https://youtu.be/MJan4MEjd8k?si=RSIDSRpzCuukhkQ9',
		},
		{
			id: 1000133,
			title: 'WAVE',
			artist: 'CIX',
			lyrics: `가장 높이 친 파도 위를 넘어
발을 맞춰 달려가다 보면 수평선 저 너머가 보여`,
			timestamp: 40.0,
			link: 'https://youtu.be/gzqjH8pu3l0?si=HtxKa661qWJ7-x8U',
		},
	],
	rich: [
		{
			id: 2000198,
			title: 'UN Village',
			artist: '백현',
			lyrics: `그래 우린 지금
한남동 UN Village hill`,
			timestamp: 68,
			link: 'https://youtu.be/Nwk3Wm4IiEs?si=dOKy5OetPg7QX_pu',
		},
		{
			id: 2000200,
			title: 'Underwater',
			artist: '권은비',
			lyrics: '원한대로 가질 테니 내게 맡겨',
			timestamp: 50,
			link: 'https://youtu.be/63Wt2GFXzjY?si=GVWbTG8ZlSX8IiAa',
		},
		{
			id: 1000063,
			title: '돈벼락',
			artist: '김필',
			lyrics: `지갑에도 두둑 통장에도 두둑
돈벼락 쏟아지네 돈벼락`,
			timestamp: 163.0,
			link: 'https://youtu.be/oH9r_40cMmY?si=iXrTanqAzoX4Burm',
		},
		{
			id: 1000064,
			title: '금금금',
			artist: '전소미',
			lyrics: `I got a lot a 금금금금 
많아 금은보 and 화화화화화`,
			timestamp: 33.0,
			link: 'https://www.youtube.com/watch?v=H0Ugx2a_-tw&pp=ygUJ6riI6riI6riI',
		},
		{
			id: 1000065,
			title: '게으른 부자',
			artist: 'SPACE ODDITY',
			lyrics: `어 즐길 거야 전부 누리면서
게으른 부자가 되고 싶어`,
			timestamp: 80.0,
			link: 'https://youtu.be/H2U-xuTO5XA?si=KqkxLcgrgLqwMMpo',
		},
		{
			id: 1000066,
			title: '1조',
			artist: '이찬혁',
			lyrics: `Cuz it will come true true true true
1조 will come true true true true`,
			timestamp: 55.0,
			link: 'https://youtu.be/HOj9ij0XVWU?si=G4VcGL4KVZTixEeG',
		},
		{
			id: 1000067,
			title: 'MONEY',
			artist: '리사',
			lyrics: `Dollar bills, dollar bills
Watch it falling for me,
I love the way that feels`,
			timestamp: 34.0,
			link: 'https://youtu.be/P01O1As5hLE?si=jilsPrTmBeX00Ae_',
		},
		{
			id: 1000068,
			title: 'Lotto',
			artist: 'EXO',
			lyrics: `어쩌나 I just hit the Lotto (la la la)
Oh, oh, oh lotto Oh, oh, oh lotto oh, oh, oh`,
			timestamp: 44.0,
			link: 'https://youtu.be/90USL2nsoDU?si=0xjAeRqPdPcwCCS8',
		},
		{
			id: 1000070,
			title: '듣기만 해도 부자 되는 음악',
			artist: '조빈',
			lyrics: `나에게 돈이 쌓인다
나는 너무 행복하다`,
			timestamp: 54.0,
			link: 'https://youtu.be/LisL5ze7u1g?si=YD5ZIzT94Wby87NF',
		},
		{
			id: 1000071,
			title: '돈 벌지마 (Feat. 찬열 of EXO)',
			artist: '헤이즈',
			lyrics: `baby 일하지마 다른 아이돌보다 몇십배로
baby 일하지마 돈벌어 돈벌어 돈벌어 돈벌어`,
			timestamp: 138.0,
			link: 'https://youtu.be/mFLipeAEdho?si=hAg0vLcUmPVgnkVC',
		},
	],
	love: [
		{
			id: 3000023,
			title: 'Pump Up The Volume!',
			artist: 'PLAVE',
			lyrics: `사랑해 말하지 못한 날 이젠 안녕,
이렇게 전할래 내 맘`,
			timestamp: 70.0,
			link: 'https://youtu.be/EYG4ROejmyI?si=Sls5Q3J7vEcjI98u',
		},
		{
			id: 1000026,
			title: 'One Kiss',
			artist: 'RIIZE',
			lyrics: `넌 내 세상에 유일한
늘 변치 않을 사랑인 걸`,
			timestamp: 159.0,
			link: 'https://youtu.be/46dquyaoe_c?si=FN9i-faM9CeFCxdC',
		},
		{
			id: 1000024,
			title: '기다릴게',
			artist: 'PLAVE',
			lyrics: `약속을 할게 두 번 다시 네 손
놓지 않을 거라고`,
			timestamp: 172.0,
			link: 'https://www.youtube.com/watch?v=cFm8fTRW_so',
		},
		{
			id: 2000201,
			title: 'Steady',
			artist: 'NCT WISH',
			lyrics: `소원을 말했어 넌 거기 있었고
그 날의 너와 날 기적이라 부르자`,
			timestamp: 8,
			link: 'https://youtu.be/mcFWD-sgi_Y?si=Jr7ILfc1LIB-N8Zh',
		},
		{
			id: 2000202,
			title: '언제나 여름',
			artist: '라쿠나',
			lyrics: `사랑은 그저 단어일 뿐이야
내 마음을 표현할 수 없어서`,
			timestamp: 61,
			link: 'https://youtu.be/V233H7H5qgI?si=YcqXFyMP8jI9oZoi',
		},
		{
			id: 2000203,
			title: 'sober',
			artist: '라쿠나',
			lyrics: `설명하지 않아도 느낄 수 있는 건
사랑과 지구의 종말밖엔 없다고`,
			timestamp: 56,
			link: 'https://youtu.be/6L9VT3eIMUs?si=YEZZ-kFX5TYQPCDP',
		},
		{
			id: 2000204,
			title: '너와의 모든 지금',
			artist: '재쓰비',
			lyrics: `내게 언제의 나를 사랑하냐고 물으면 바로 지금
날 알아보고 날 믿어주는 너와의 모든 지금`,
			timestamp: 35,
			link: 'https://youtu.be/YLxEK0ZKx9A?si=hjkm9sHez7fxtngJ',
		},
		{
			id: 1000027,
			title: 'Oh Little Girl',
			artist: '슬레이트',
			lyrics: `운명보다 더 운명같은 널
넌 내가 지킨다`,
			timestamp: 70.0,
			link: 'https://youtu.be/_8hRahdOZ5Y?si=Y4E3opHgtbI1mkHV',
		},
		{
			id: 1000030,
			title: '사랑쪽지 (Love Letter)',
			artist: '세븐틴',
			lyrics: `널 꽉 안아 놓지 않을게
늘 네 옆에 있어줄게`,
			timestamp: 50.0,
			link: 'https://youtu.be/fJquWD13T0I?si=KAA8MApqxpD8La90',
		},
		{
			id: 2000001,
			title: '행복',
			artist: '슈퍼주니어',
			lyrics: `있을거야 너를 사랑해
함께해요 그대와 영원히`,
			timestamp: 79.0,
			link: 'https://youtu.be/L8Rsxy7Ch2M?si=4lKJOkuJNfj6O09o',
		},
		{
			id: 2000002,
			title: '우리 사랑하게 됐어요',
			artist: '가인, 조권',
			lyrics: `사랑인가봐, 너와 나 시작됐나봐, 너와 나
우리 둘 사랑 하게 됐다고 말할 수 있어`,
			timestamp: 185.0,
			link: 'https://www.youtube.com/watch?v=QPKEsHeaUhg&pp=ygUk7Jqw66asIOyCrOueke2VmOqyjCDrkJDslrTsmpQg6rO17Iud',
		},
		{
			id: 2000004,
			title: '좋은 사람 있으면 소개시켜줘',
			artist: '조이',
			lyrics: `진심으로 나만을 사랑할 수 있는
성숙하고 성실한 사람이라면 좋겠어`,
			timestamp: 20.0,
			link: 'https://youtu.be/pqO_olKGJso?si=O5q2M7ouDSyw1rr1',
		},
		{
			id: 2000005,
			title: 'Rock U',
			artist: '카라',
			lyrics: `네가 너무 좋아 누구보다 좋아
언제까지나 변함없이 사랑할래요`,
			timestamp: 96.0,
			link: 'https://youtu.be/lVGgXJEOIhc?si=GoFV46tljPNV_MvP',
		},
		{
			id: 2000006,
			title: '나의 X에게',
			artist: '경서',
			lyrics: `너의 품에 안길래 이 밤이 새도록
네게 말할 거야 너를 좋아한다고`,
			timestamp: 11.0,
			link: 'https://youtu.be/VY_BU1Ja_TM?si=jJwKCKkGAersHtlP',
		},
		{
			id: 2000007,
			title: '서툴러',
			artist: '나상현씨밴드',
			lyrics: `우린 아직 많이 서툴러 상처도 많지만
서로의 사랑이 돼주자`,
			timestamp: 167.0,
			link: 'https://youtu.be/NImGyVCGKWs?si=5wcj0xbhTEVe9oP2',
		},
		{
			id: 2000008,
			title: '지금, 우리',
			artist: '러블리즈',
			lyrics: `네가 사랑한대 날
어떻게 진짠가 봐`,
			timestamp: 172.0,
			link: 'https://youtu.be/BW9Iuk4QErw?si=l7TBM1CBOdvti7ae',
		},
		{
			id: 2000009,
			title: 'CLOVER',
			artist: '나상현씨밴드',
			lyrics: `언젠가 모두 멀어져 희미해진대도
각자의 자리에서 빛날 수 있게
지금의 우리를 늘 잊지 않을게`,
			timestamp: 161.0,
			link: 'https://youtu.be/pUh3hvBuz4A?si=UQpiXTRKYsLLm5j4',
		},
		{
			id: 2000010,
			title: '사랑하게 될 거야',
			artist: '한로로',
			lyrics: `그럼에도 불구하고
나는 너를 용서하고 사랑하게 될 거야`,
			timestamp: 53.0,
			link: 'https://youtu.be/h0KIWaUEIgQ?si=EB4SWFm0FdpoFBkD',
		},
		{
			id: 2000011,
			title: 'DRAMARAMA',
			artist: '몬스타엑스',
			lyrics: `그게 되나 적당히 좋아하는 게
그게 되나 적당히 다가가는 게`,
			timestamp: 49.0,
			link: 'https://youtu.be/7eq5mR6rPhI?si=qyynxkEkMeEzcHBi',
		},
		{
			id: 2000012,
			title: 'Memories',
			artist: 'RIIZE',
			lyrics: `I gotta taste 이 바람을 난 놓치고 싶지 않아
반짝이는 우리인 거야`,
			timestamp: 95.0,
			link: 'https://youtu.be/03hmRv3BwNU?si=UkPdAZ5lxCll0Bqg',
		},
		{
			id: 2000013,
			title: 'Favorite',
			artist: 'POW',
			lyrics: `넌 내가 제일 좋아하는 것 중, 제일 좋아하는 거
눈빛을 맞출 때면 더는 바라는 게 없어`,
			timestamp: 51.0,
			link: 'https://youtu.be/E_PpRDSVsm4?si=37GSa-ne23TCpqQ5',
		},
		{
			id: 2000014,
			title: `Antifreeze`,
			artist: '백예린',
			lyrics: `우리 둘은 얼어붙지 않을 거야
바다 속의 모래까지 녹일 거야`,
			timestamp: 78.0,
			link: 'https://youtu.be/pERDk4KoW-s?si=oyan_tLAso07g3M_',
		},
		{
			id: 2000015,
			title: 'Happy Hour',
			artist: '카라',
			lyrics: `이 시간이 지나도 우린 영원히 함께 할 거야
It’s our dream sweet melody`,
			timestamp: 191.0,
			link: 'https://youtu.be/po_A593ynYE?si=7PdZxl8z9BQcNIyY',
		},
		{
			id: 2000016,
			title: '미래',
			artist: '레드벨벳',
			lyrics: `You are my future future All the time
힘든 시간들을 건너 너의 손을 잡고 싶어`,
			timestamp: 49.0,
			link: 'https://youtu.be/n551JUqfq9w?si=4y6YlK_YbvLQn1xg',
		},
		{
			id: 2000017,
			title: 'G.O.O.D Luv',
			artist: '엠블랙',
			lyrics: `하지만 나를 잊어도
내 맘은 항상 그대뿐인 걸`,
			timestamp: 91.0,
			link: 'https://youtu.be/Odq4gN2oeJU?si=04ojHktZULo4tDN6',
		},
		{
			id: 2000018,
			title: '당장 널 만나러 가지 않으면',
			artist: '이찬혁',
			lyrics: `당장 널 만나러 가지 않으면
오늘 하루가 손톱만큼도 의미 없어`,
			timestamp: 58.0,
			link: 'https://youtu.be/SlIUa7Kxr-I?si=Tk0Ge6KN1v2K3BEl',
		},
		{
			id: 2000019,
			title: '영원처럼 안아줘 (with 카더가든)',
			artist: '프롬',
			lyrics: `어지러운 슬픔이 가만히 잠들 때까지
영원처럼 안아줘`,
			timestamp: 59.0,
			link: 'https://www.youtube.com/watch?v=1C-y21sRN80',
		},
		{
			id: 2000020,
			title: 'yours',
			artist: '데이먼스 이어',
			lyrics: `내가 손을 잡을게, 너는 힘을 빼도 돼
그저 복사꽃 핀 거릴 걷자`,
			timestamp: 27.0,
			link: 'https://youtu.be/VHj6IYA-Dxs?feature=shared',
		},
		{
			id: 2000021,
			title: '말도 안돼',
			artist: '윤하',
			lyrics: `내 두 눈엔 너만 보여
말도 안 돼 나도 몰래 너만 바라보게 됐어`,
			timestamp: 64.0,
			link: 'https://youtu.be/lmQVD54OWjE?si=75vUGIpToUoNHMIX',
		},
		{
			id: 2000023,
			title: 'Valentine',
			artist: 'POW',
			lyrics: `Darling be my valentine
굳이 너여야만 하는 그 막연함을 말해줄게`,
			timestamp: 14.0,
			link: 'https://youtu.be/rP5dGwNb398?si=k1N2t0PwLds-jWTc',
		},
		{
			id: 2000026,
			title: '다섯 번째 계절 (SSFWL)',
			artist: '오마이걸',
			lyrics: `있잖아, 사랑이면 단번에 바로 알 수가 있대
헷갈리지 않고 반드시 알아볼 수가 있대`,
			timestamp: 61.0,
			link: 'https://youtu.be/SKDd7AJNsx4?si=spJ_n6-3b5K1HsKh',
		},
		{
			id: 2000027,
			title: '한 발짝 두 발짝',
			artist: '오마이걸',
			lyrics: `네가 한 발짝, 두 발짝 멀어지면 난 세 발짝 다가갈게
우리의 거리가 더 이상 멀어지지 않게`,
			timestamp: 57.0,
			link: 'https://youtu.be/s7rsXU1xCTQ?feature=shared',
		},
	],
	comfort: [
		{
			id: 3000034,
			title: 'Gonna Be Alright',
			artist: 'VIXX',
			lyrics: `Wherever you are, 위로가 되줄게
I'm gonna be alright
때론 슬픔이 우릴 덮쳐도 잊지 말아줘`,
			timestamp: 29.0,
			link: 'https://youtu.be/trvAP-TCZKw?si=cwrsgyhUvqHIVesW',
		},
		{
			id: 3000035,
			title: '걷고 있다',
			artist: 'VIXX',
			lyrics: `함께 걸어온 너에게 이야길 해주고 싶어
잘했어 수고했어 고마워
잘했어 수고했어 고마워라고`,
			timestamp: 62.0,
			link: 'https://youtu.be/0eSGW6xaWF4?si=D9xbZn3Wq2Nkhgjm',
		},
		{
			id: 3000029,
			title: '그런 날엔 (Someday)',
			artist: '여자친구',
			lyrics: `난 소중한 그댈 믿어요
어떤 날 슬퍼진 그런 날엔
그냥 한 번 웃어보는 거야`,
			timestamp: 64.0,
			link: 'https://youtu.be/BQitFgrYQZo?si=InCTahi2-k5qM2PN',
		},
		{
			id: 3000024,
			title: '괜찮아!',
			artist: '드림캐쳐',
			lyrics: `눈을 감고 나에게 말해줘
괜찮아 괜찮아 이렇게
So trust me`,
			timestamp: 63.0,
			link: 'https://youtu.be/aXFPbEdbe9M?si=JuzDOt9ybfx71Dqw',
		},
		{
			id: 3000011,
			title: '수고했어, 오늘도',
			artist: '옥상달빛',
			lyrics: `수고했어 오늘도 (수고했어)
아무도 너의 슬픔에 관심없대도
난 늘 응원해, 수고했어 오늘도`,
			timestamp: 65.0,
			link: 'https://www.youtube.com/watch?v=U3e4AOd-DzE',
		},
		{
			id: 3000012,
			title: '괜찮아도 괜찮아',
			artist: '도경수',
			lyrics: `늘 같은 속도로 흘러가는 시간이
언제나 그랬듯이 씻어내 줄 테니
흐르듯 살아도 그냥 괜찮아 괜찮아도`,
			timestamp: 207.0,
			link: 'https://youtube.com/watch?v=fl80JQQv0pU&si=gUa1tE5VzGLIisiN',
		},
	],
};

// 모든 곡을 하나의 배열로 병합
const allSongs = Object.values(categories).flat();

// id를 키로 하는 맵 생성
const songById = allSongs.reduce(
	(map, song) => {
		map[song.id] = song;
		return map;
	},
	{} as Record<number, Song>,
);

export { categories, songById, allSongs };
