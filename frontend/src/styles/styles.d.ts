import { ColorTypes, FontTypes } from '@/theme';
import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: ColorTypes;
		fonts: FontTypes;
	}
}
