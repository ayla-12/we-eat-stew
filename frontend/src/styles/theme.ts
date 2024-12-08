import { DefaultTheme, css } from 'styled-components';

const colors = {
	sky: '#70BBEF',
	lightgreen: '#118C4B',
	pink: '#FC8BCF',
	yellow: '#FFD348',
	green: '#09491B',
	red: 'EF3030',
	lightyellow: '#FFFDE6',
	deepgreen: '#002803',
	burgundy: '#A00008',
};

const fonts = {
	Header: css`
		font-size: 2.5rem;
		font-family: BMkkubulimTTF-Regular;
		line-height: 3rem;
	`,
	Header2: css`
		font-size: 1.2rem;
		font-family: BMkkubulimTTF-Regular;
		line-height: 3rem;
	`,
	Header3: css`
		font-size: 1.4rem;
		font-family: BMkkubulimTTF-Regular;
		line-height: 2rem;
	`,
	Body: css`
		font-size: 2rem;
		font-family: LeeSeoyun;
		line-height: 2.5rem;
	`,
	Body2: css`
		font-size: 1.4rem;
		font-family: LeeSeoyun;
		line-height: 1.8rem;
	`,
};

export type ColorTypes = typeof colors;
export type FontTypes = typeof fonts;

export const theme: DefaultTheme = {
	colors,
	fonts,
};

export default theme;
