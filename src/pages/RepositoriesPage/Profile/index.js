import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/8689325?v=4" />
      <Login>arthurarw</Login>
      <Name>Arthur Warmling</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
      </Data>
      <Data>
        <MdWork size={20} /> Eduzz
      </Data>
      <Data>
        <MdLocationCity size={20} /> Turvo - SC
      </Data>
      <Data>
        <MdLink size={20} />
        <a href="https://devsamurai.com.br">devsamurai.com.br</a>
      </Data>
    </Inner>
  </Container>
);

export default Profile;
