import React from 'react';
import { Main } from './AppMain.styled';

interface Props {
  children: any;
}

const AppMain: React.FC<Props> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default AppMain;
