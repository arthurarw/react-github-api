import React from 'react';

import { Container, Selector, Cleaner } from './styles';

const Filter = () => {
  const langs = [
    { name: 'JavaScript', count: 5, color: '#f1c40f' },
    { name: 'PHP', count: 2, color: '#2980b9' },
    { name: 'Shell', count: 5, color: '#c0392b' },
    { name: 'CSS', count: 5, color: '#34495e' },
  ];

  const selectors = langs.map((lang) => (
    <Selector key={lang.name.toLocaleLowerCase()} color={lang.color}>
      <span>{lang.name}</span>
      <span>{lang.count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>Limpar Filtro</Cleaner>
    </Container>
  );
};

export default Filter;
