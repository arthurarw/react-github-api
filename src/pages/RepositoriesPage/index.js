import React from 'react';
import Profile from './Profile';
import { Container, Main, Sidebar } from './styles';

const RepositoriesPage = () => (
  <Container>
    <Sidebar>
      <Profile />
    </Sidebar>
    <Main>Main</Main>
  </Container>
);

export default RepositoriesPage;
