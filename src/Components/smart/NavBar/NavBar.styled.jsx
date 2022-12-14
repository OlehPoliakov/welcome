import styled from 'styled-components';
import { ReactComponent as IcHome } from '../../../Assets/icons/svg/ichome.svg';
import { ReactComponent as IcChat } from '../../../Assets/icons/svg/icchat.svg';

export const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 8px;
  gap: 20px;
  margin-right: 14px;
`;

export const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  cursor: pointer;
  transition: ${p => p.theme.transition};
  color: ${p => p.theme.colors.icon};
  fill: ${p => p.theme.colors.icon};

  &:hover,
  &:focus {
    color: black;
    fill: black;
  }
`;

export const Paragraph = styled.p`
  pointer-events: none;
  font-weight: 400;
  font-style: 20px;
  font-family: ${p => p.theme.fonts.heading};
`;

export const IconHome = styled(IcHome)`
  padding: 4px;
  width: 24px;
  height: 20px;
`;

export const IconChat = styled(IcChat)`
  padding: 4px;
  width: 24px;
  height: 20px;
`;
