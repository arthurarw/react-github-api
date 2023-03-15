import React from 'react';
import Filter from './Filter';
import Profile from './Profile';
import { Container, Main, Sidebar } from './styles';

const RepositoriesPage = () => (
  <Container>
    <Sidebar>
      <Profile />
      <Filter />
    </Sidebar>
    <Main>Main</Main>
  </Container>
);

export default RepositoriesPage;
