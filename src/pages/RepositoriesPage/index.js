import React from 'react';
import Filter from './Filter';
import Profile from './Profile';
import Repositories from './Repositories';
import { Container, Main, Sidebar } from './styles';

const RepositoriesPage = () => (
  <Container>
    <Sidebar>
      <Profile />
      <Filter />
    </Sidebar>
    <Main>
      <Repositories />
    </Main>
  </Container>
);

export default RepositoriesPage;
