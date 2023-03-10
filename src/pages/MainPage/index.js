import React, { useState } from 'react';

import GithubLogo from 'assets/images/github-logo.svg';
import { MdSearch } from 'react-icons/md';
import { Button, Container, Input, Logo, Title, Form } from './styles';

const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={GithubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="Usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;
