/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Animated, Easing, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RepositoryActions from '~/store/ducks/repository';

import {
  Container,
  Header,
  SearchContainer,
  Search,
  SearchIcon,
  SearchButton,
  HeaderIcon,
  Loading,
  Repositories,
  Repository,
  ProtertyContainer,
  Property,
  LanguageIcon,
  RepositoryIcon,
  IconContainer,
  StarIcon,
} from './styles';

export default function Index() {
  const { repos, loading } = useSelector(state => ({
    repos: state.repository.data,
    loading: state.repository.loading,
  }));

  const dispach = useDispatch();

  const [termToSearch, setTermToSearch] = useState('');
  const [rotate] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
      })
    ).start();
  }, []);

  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
    easing: Easing.linear,
  });

  function handleRepoSearch() {
    const [repoTerm, orgTerm] = termToSearch.split('/');

    dispach(RepositoryActions.loadRepositoryRequest(repoTerm, orgTerm));
  }

  function renderItem(item) {
    return (
      <Repository>
        <ProtertyContainer>
          <IconContainer>
            <LanguageIcon />
          </IconContainer>
          <Property>{item.language}</Property>
        </ProtertyContainer>
        <ProtertyContainer>
          <IconContainer>
            <RepositoryIcon />
          </IconContainer>
          <Property>{item.full_name}</Property>
        </ProtertyContainer>
        <ProtertyContainer>
          <IconContainer>
            <StarIcon />
          </IconContainer>
          <Property>{item.stargazers_count}</Property>
        </ProtertyContainer>
      </Repository>
    );
  }

  function renderRepositories() {
    return loading ? (
      <Loading>
        <ActivityIndicator size="large" color="#0000ff" />
      </Loading>
    ) : (
      <Repositories
        keyExtractor={(item, index) => item.full_name}
        data={repos}
        renderItem={({ item }) => renderItem(item)}
      />
    );
  }

  return (
    <Container>
      <Header>
        <HeaderIcon style={[{ transform: [{ rotate: spin }] }]} />
      </Header>
      <SearchContainer>
        <Search onChangeText={text => setTermToSearch(text)} />
        <SearchButton onPress={() => handleRepoSearch()}>
          <SearchIcon />
        </SearchButton>
      </SearchContainer>
      {renderRepositories()}
    </Container>
  );
}
