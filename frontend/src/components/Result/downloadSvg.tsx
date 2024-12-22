import React from 'react';

interface DownloadSvgProps {
	// 필요에 따라 props 추가
	width?: string;
	height?: string;
}

const DownloadSvg: React.FC<DownloadSvgProps> = ({  }) => {
	return (
		<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.28729 7.55031L7.66428 7.39937L6.62741 4.25786L6 1.07862L9.82058 0L9.78756 3.63208L9.26252 7.45283L12 7.27358L8.7639 12L6.28729 7.55031Z"
				fill="#FFFDE6"
			/>
			<path
				d="M18 10L17.4744 15.6263L0.788462 16L0 10.1085L2.58654 10.1657L2.6891 13.8574L15.6186 14.4962L15.2532 10.2351L18 10Z"
				fill="#FFFDE6"
			/>
		</svg>
	);
};

export default DownloadSvg;
