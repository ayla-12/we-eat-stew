// server/server.js
const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 5050; // 프론트엔드와 다른 포트를 사용

// 각 카테고리별 곡 리스트 (예시)
const categories = {
  love: [
    { title: '밤편지', artist: '아이유', keyLyrics: '가라데이터', timestamp: '00:10' },
    { title: '그건 아마 우리의 잘못은 아닐 거야', artist: '백예린', keyLyrics: '가라데이터', timestamp: '01:20' },
    { title: 'LOVE ME RIGHT', artist: '엑소', keyLyrics: '가라데이터', timestamp: '02:30' },
    { title: '봄날', artist: '방탄소년단', keyLyrics: '가라데이터', timestamp: '03:40' },
    { title: '어쩌나', artist: '세븐틴', keyLyrics: '가라데이터', timestamp: '04:50' },
    { title: 'Memories', artist: '라이즈', keyLyrics: '가라데이터', timestamp: '05:10' },
    { title: 'Impurities', artist: 'LE SSERAFIM', keyLyrics: '가라데이터', timestamp: '06:20' },
    { title: 'Bad News', artist: 'TEMPEST', keyLyrics: '가라데이터', timestamp: '07:30' },
    { title: 'Super Shy', artist: 'NewJeans', keyLyrics: '가라데이터', timestamp: '08:40' },
    { title: 'Monochrome', artist: 'ATBO', keyLyrics: '가라데이터', timestamp: '09:50' },
    { title: '사계', artist: '태연', keyLyrics: '가라데이터', timestamp: '10:00' }
  ],
  success: [
    { title: 'Not Today', artist: '방탄소년단', keyLyrics: '가라데이터', timestamp: '00:05' },
    { title: 'My Pace', artist: '스트레이키즈', keyLyrics: '가라데이터', timestamp: '01:15' },
    { title: 'Answer', artist: '에이티즈', keyLyrics: '가라데이터', timestamp: '02:25' },
    { title: 'Go', artist: '엔시티 드림', keyLyrics: '가라데이터', timestamp: '03:35' },
    { title: 'Run Away', artist: '투바투', keyLyrics: '가라데이터', timestamp: '04:45' },
    { title: 'I am the Best', artist: '투애니원', keyLyrics: '가라데이터', timestamp: '05:55' },
    { title: 'Young Blood', artist: '드리핀', keyLyrics: '가라데이터', timestamp: '06:05' },
    { title: 'LION', artist: '(여자)아이들', keyLyrics: '가라데이터', timestamp: '07:15' },
    { title: 'FIESTA', artist: '아이즈원', keyLyrics: '가라데이터', timestamp: '08:25' },
    { title: 'We Go', artist: '프로미스나인', keyLyrics: '가라데이터', timestamp: '09:35' },
    { title: '이루리', artist: '우주소녀', keyLyrics: '가라데이터', timestamp: '10:45' }
  ]
  // 다른 카테고리들도 이와 같은 방식으로 추가될 수 있습니다.
};

// JSON 파싱 설정
app.use(cors()); // 모든 요청에 대해 CORS 허용
app.use(express.json());

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Node server is running!');
});

// 랜덤 곡 반환 API
app.post('/api/getSong', (req, res) => {
  const { category } = req.body; // 클라이언트에서 받은 카테고리 정보

  if (!categories[category]) {
    return res.status(400).json({ message: 'Invalid category' });
  }

  // 카테고리에서 랜덤으로 곡 하나 선택
  const songs = categories[category];
  const randomSong = songs[Math.floor(Math.random() * songs.length)];

  res.status(200).json({ song: randomSong });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
