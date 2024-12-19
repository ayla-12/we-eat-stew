import dayjs from 'dayjs';

// dayjs를 사용해 시간 계산

const TimerMessage = ({ timestamp }: { timestamp: number }) => {
	const calculatePlayTime = () => {
		// 2025년 1월 1일 00:00:00
		const startOf2025 = dayjs('2025-01-01T00:00:00');

		// `timestamp` 초 전의 시각 계산
		const playTime = startOf2025.subtract(timestamp, 'seconds');

		// 12월 31일, @시 @분 형식 반환
		return playTime.format('12월 31일 HH시 mm분 ss초');
	};

	return (
		<p>
			{calculatePlayTime()}에 이 곡을 재생하면 <br />
			2025년이 시작될 때 이 가사를 들을 수 있어요!
		</p>
	);
};

export default TimerMessage;
