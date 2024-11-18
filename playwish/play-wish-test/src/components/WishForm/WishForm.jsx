// src/components/WishForm.jsx
import { useState } from 'react';
import { getCategoryForWish, getRandomSong } from '../../api'; // 곡 요청 함수
import styles from './WishForm.module.css'; // CSS 모듈 import

const WishForm = () => {
  const [wishText, setWishText] = useState(''); // wish 텍스트 상태 관리
  const [song, setSong] = useState(null); // 랜덤으로 선택된 곡 상태 관리
  const [matchedCategory, setMatchedCategory] = useState(''); // 매칭된 카테고리 상태 관리
  // const [category, setCategory] = useState('love'); // 기본 카테고리 설정

  const handleChange = (e) => {
    setWishText(e.target.value);
  };

  // const handleCategoryChange = (e) => {
  //   setCategory(e.target.value); // 카테고리 변경
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();


    // OpenAI API로 소원을 전송하여 카테고리 매칭
    const category = await getCategoryForWish(wishText);
    if (category) {
      setMatchedCategory(category); // 매칭된 카테고리 상태 업데이트
      const song = await getRandomSong(category);
      setSong(song); // 서버로부터 받은 곡 정보로 상태 업데이트
    } else {
      alert('카테고리를 찾을 수 없습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className={styles.wishFormContainer}>
      <h2>Wish your dream!</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={wishText}
          onChange={handleChange}
          placeholder="소원을 입력해보세요."
          className={styles.wishTextarea}
        />
        {/* <div>
          <label htmlFor="category">내 소원 카테고리는? </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className={styles.categorySelect}
          >
            <option value="love">사랑</option>
            <option value="success">성공</option>
          </select>
        </div> */}
        <button type="submit" className={styles.submitBtn}>Submit Wish</button>
      </form>

      {song && (
        <div className={styles.songInfo}>
          <h3>Selected Song:</h3>
          <p><strong>Category:</strong> {matchedCategory}</p> {/* 매칭된 카테고리 표시 */}
          <p><strong>Title:</strong> {song.title}</p>
          <p><strong>Artist:</strong> {song.artist}</p>
          <p><strong>Key Lyrics:</strong> {song.keyLyrics}</p>
          <p><strong>Timestamp:</strong> {song.timestamp}</p>
        </div>
      )}
    </div>
  );
};

export default WishForm;
