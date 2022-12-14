import React from 'react';
import { Container } from '../../../Common/Container.styled';
import { Wrapper, FormBox, TextBox } from './Login.styled';

const Login: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <FormBox></FormBox>
        <TextBox>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          maiores commodi expedita quidem beatae tempore, veritatis provident
          modi dolor, amet porro eos, voluptatum totam fugiat ut quibusdam illum
          similique optio.
        </TextBox>
      </Wrapper>
    </Container>
  );
};

export default Login;
