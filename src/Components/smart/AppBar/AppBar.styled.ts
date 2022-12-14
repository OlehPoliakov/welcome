import styled from 'styled-components';

export const Bar = styled.div`
  padding: 8px 0px;
  background-color: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.shadow.box};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
