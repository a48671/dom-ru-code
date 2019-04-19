import styled from 'styled-components';
import { colors } from './variables/colors';

export const Wrapper = styled.div.attrs({ className: 'wrapper' })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${colors.gray};
`;

export const Container = styled.div.attrs({ className: 'container' })`
  display: block;
  width: 100%;
  max-width: 500px;
  max-height: 100vh;
  background-color: ${colors.white};
`;
