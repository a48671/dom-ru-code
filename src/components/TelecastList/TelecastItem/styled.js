import styled from 'styled-components';
import {colors} from '../../../variables/colors';

export const Wrapper = styled.div.attrs({className: 'telecast-item'})`
	display: flex;
	padding: 10px 20px;
	align-items: flex-start;
	border-bottom: 1px solid ${colors.gray};
	background-color: ${
		props => {
			if(props.type === 'isNow') return colors.blue;
			if(props.type === 'isOver') return colors.pink;
			else return 'initial';
		}
	};
`;

export const Time = styled.div.attrs({className: 'telecast-time'})`
	width: 70px;
	font-size: 22px;
`;

export const Title = styled.h1.attrs({className: 'head__title'})`
	width: calc(100% - 70px);
	font-size: 20px;
	font-weight: 600;
	color: ${colors.dark};
	padding-left: 30px;
	overflow: hidden;
`;