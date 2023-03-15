import React from 'react';
import { Container, Name, Description, Footer, Lang, Link } from './styles';

const Repository = () => (
  <Container color="#f37272">
    <Name>Repository Name</Name>
    <Description>Repository Description</Description>
    <Footer color="#f37272">
      <Lang>Repository Lang</Lang>
      <Link href="https://google.com" target="_blank">
        VER
      </Link>
    </Footer>
  </Container>
);

export default Repository;