import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Animated } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  background-color: #4c4499;
`;

export const Header = styled.View.attrs({
  elevation: 2,
  borderBottomColor: '#4c4499',
})`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`;

export const HeaderIcon = styled(
  Animated.createAnimatedComponent(FontAwesome5)
).attrs({
  name: 'react',
  size: 45,
})`
  color: #fff;
`;

export const SearchContainer = styled.View.attrs({})`
  flex-direction: row;
  height: 44px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 30px 0 30px 0;
`;

export const Search = styled.TextInput.attrs({
  placeholder: 'repo/organization',
  paddingHorizontal: 10,
})`
  height: 44px;
  width: 80%;
  background-color: #f5f5f5;
`;

export const SearchButton = styled.TouchableOpacity`
  margin-left: 5px;
  height: 44px;
  width: 10%;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled(FontAwesome5).attrs({
  name: 'search',
  size: 35,
})`
  color: #d3d3d3;
`;

export const Loading = styled.View`
  height: 30px;
  width: 30px;
  position: absolute;
  top: ${Dimensions.get('window').height / 2 - 15};
  left: ${Dimensions.get('window').width / 2 - 15};
`;

export const Repositories = styled.FlatList.attrs({
  width: '100%',
})``;

export const Repository = styled.View.attrs({})`
  border: 1px;
  border-color: rgba(50, 115, 220, 0.3);
  padding: 10px;
  font-size: 20px;
  margin: 15px 10px 15px 10px;
`;

export const ProtertyContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const Property = styled.Text`
  color: #f5f5f5;
  font-family: 'Segoe UI';
  font-size: 15px;
`;

export const IconContainer = styled.View`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const LanguageIcon = styled(FontAwesome5).attrs({
  name: 'file-code',
  size: 25,
})`
  color: #a0a0a0;
`;

export const RepositoryIcon = styled(MaterialCommunityIcons).attrs({
  name: 'source-repository',
  size: 25,
})`
  color: #a0a0a0;
`;

export const StarIcon = styled(MaterialCommunityIcons).attrs({
  name: 'star',
  size: 24,
})`
  color: #a0a0a0;
`;
