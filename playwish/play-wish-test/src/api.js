import axios from 'axios';

const API_URL = 'http://localhost:5050/api/getSong'; // 서버 API URL

// 카테고리에서 랜덤 곡을 서버로 요청하는 함수
export const getRandomSong = async (category) => {
  try {
    const response = await axios.post(API_URL, { category });
    return response.data.song; // 서버로부터 받은 곡 데이터
  } catch (error) {
    console.error('Error fetching song:', error);
    return null;
  }
};
