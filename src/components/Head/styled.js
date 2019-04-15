import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const Wrapper = styled.div.attrs({className: 'head'})`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 10px 20px;
`;

export const Logo = styled.div.attrs({className: 'head__logo'})`
	width: 70px;
	img {
		width: 100%;
	}
`;

export const Title = styled.h1.attrs({className: 'head__title'})`
	width: calc(100% - 70px);
	font-size: 24px;
	color: ${colors.dark};
	padding-left: 30px;
`;
