import styled from 'styled-components';

export const Logotype = styled.p`
  pointer-events: none;
  justify-content: center;
  text-transform: uppercase;
  color: ${p => p.theme.colors.text};
  outline: 2px solid ${p => p.theme.colors.border};
  box-shadow: ${p => p.theme.shadow.box};

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-family: ${p => p.theme.fonts.heading};
`;
