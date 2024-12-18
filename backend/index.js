const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3000;

// .env 파일 사용 설정
require("dotenv").config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());

// API 엔드포인트: 소원 텍스트를 받아 카테고리 매칭
app.post("/api/match-category", async (req, res) => {
  const { wish } = req.body;

  if (!wish) {
    return res.status(400).json({ error: "Wish text is required" });
  }

  try {
    // OpenAI API 요청
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are an assistant trained to categorize user wishes into predefined categories. Your task is to analyze the user's wish and return the most relevant category name as a single word. Do not provide any explanation, only return the category name.

            The available categories and their associated keywords are:

            - love: 사랑, 설렘, 낭만, 연애, 애인, 연인, 남자친구, 여자친구, 좋아, 영원히, 인연, 이해, 로맨스
            - marriage: 결혼, 청혼, 고백, 프로포즈, 최애랑 결혼, 동반자, 가정, 부부, 축복
            - success: 성공, 성취, 도전, 발전, 미래, 꿈, 취업, 경험, 대기업, 취뽀, 회사, 커리어, 이루, 사업, 합격, 고시, 면접, 취준, 성과, 비전, 리더, 전문성
            - challenge: 도전, 자신감, 자신, 자존감, 긍정, 시도, 용기, 걱정, 포기, 새로, 목표, 의지, 극복, 성장, 한계, 동기부여, 혁신, 희망, 도약
            - freedom: 자유, 휴식, 눈치, 하고 싶은, 평등, 억압, 선택
            - rich: 돈, 부자, 절약, 주식, 투자, 코인, 한탕, 펀드, 연봉, 빚, 저축, 재산, 부동산, 아파트, 재테크
            - escape: 탈출, 퇴사, 자퇴, 독립, 도망, 회피, 탈조선, 독립, 탈덕, 탈빠, 탈케
            - trip: 여행, 해외, 배낭여행, 모험, 탐험, 유럽, 일본, 멀리, 바다, 휴양, 관광, 경치, 추억
            - study: 공부, 대학, 성적, 시험, 학업, 학교, 논문, A+, 학점, 힘내, 집중, 학습, 과제, 수업, 교육, 강의, 졸업
            - fandom: 티켓팅, 콘서트, 단콘, 단공, 팬콘, 팬미팅, 공연, 최애, 굿즈
            - health: 건강, 체력, 스트레스, 운동, 워라밸, 병원, 정신병, 정신, 아프지, 면역력, 식단, 영양, 마음건강, 건강검진, 비타민, 영양제, 다이어트
            - luck: 행운, 기회, 우연, 소원, 노력, 운명, 복, 기적, 영감
            - happiness: 행복, 즐거움, 소확행, 힐링, 감사, 외로움, 만족, 기쁨, 웃음
            - impeachment: 탄핵, 반란, 내란, 내란수괴, 내란범, 물러나라, 윤석열, 대통령, 쿠데타, 하야, 처벌, 계엄, 부역자, 퇴진, 사퇴

            For example, if the user says "I want to achieve my dreams and grow as a person," you should respond with "success".
            you should only reply the category in this set - "love, marriage, success, challenge, freedom, rich, escape, trip, study, fandom, health, luck, happiness, impeachment"

            Please provide the category name for the following wish:
              `,
          },
          { role: "user", content: `Categorize this wish: "${wish}"` },
        ],
        max_tokens: 50,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const category = response.data.choices[0].message.content.trim();

    // 클라이언트에 카테고리명(string) 응답
    res.json({ category });
  } catch (error) {
    console.error("Error with OpenAI API:", error.message);
    res.status(500).json({ error: "Failed to categorize the wish" });
  }
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
