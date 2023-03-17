import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser, getRepositories } from 'services/api';
import { getLangsFromRepositories } from 'services/utils';
import Filter from './Filter';
import Profile from './Profile';
import Repositories from './Repositories';
import { Container, Main, Sidebar, Loading } from './styles';

const RepositoriesPage = () => {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepositories(login),
      ]);

      if (!userResponse.data) {
        setLoading(false);
        setError('Nenhum usuário encontrado.');
        return;
      }

      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setLanguages(getLangsFromRepositories(repositoriesResponse.data));
      setLoading(false);
    };

    loadData();
  }, [login]);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading && !error) {
    return <Loading>Carregando...</Loading>;
  }

  if (!loading && error) {
    return <Loading>{error}</Loading>;
  }

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
