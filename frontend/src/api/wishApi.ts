// api/wishApi.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // 백엔드 API 주소

/**
 * 소원을 서버로 전송하여 카테고리 매칭 요청
 * @param wish 사용자가 입력한 소원 텍스트
 * @returns 매칭된 카테고리명(string)
 */
export const matchCategory = async (wish: string): Promise<string> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/match-category`, { wish });
    return response.data.category; // 서버에서 반환된 카테고리명
  } catch (error) {
    console.error('Error while matching category:', error);
    throw new Error('Failed to match category');
  }
};
