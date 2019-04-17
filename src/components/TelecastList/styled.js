import styled from 'styled-components';

export const Wrapper = styled.div.attrs({className: 'telecast-list'})`
	overflow-y: auto;
	overflow-x: hidden;
	max-height: calc(100vh - 90px);
`;