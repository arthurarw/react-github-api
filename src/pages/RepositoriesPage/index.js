/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { getLangsFromRepositories } from 'services/utils';
import Filter from './Filter';
import Profile from './Profile';
import Repositories from './Repositories';
import { Container, Main, Sidebar } from './styles';

const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState();

  const user = {
    login: 'arthurarw',
    name: 'Arthur Warmling',
    avatar_url: 'https://avatars.githubusercontent.com/u/55540536?v=4',
    followers: 10,
    following: 10,
    company: null,
    blog: null,
    location: 'Turvo - SC',
  };

  const repositories = [
    {
      id: 1,
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://github.com/arthurarw',
      language: 'PHP',
    },
    {
      id: 2,
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://github.com/arthurarw',
      language: 'PHP',
    },
    {
      id: 3,
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://github.com/arthurarw',
      language: 'JavaScript',
    },
    {
      id: 4,
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://github.com/arthurarw',
      language: 'JavaScript',
    },
    {
      id: 5,
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://github.com/arthurarw',
      language: 'PHP',
    },
    {
      id: 6,
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://github.com/arthurarw',
      language: 'PHP',
    },
  ];

  const languages = getLangsFromRepositories(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
