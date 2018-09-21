//need to be learned deeper

import React from 'react';
import { FlatList, Text } from 'react-native';

export default class FlatListExample extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    return (
      <FlatList 
        style={{marginTop: '50%'}}
        data={[{key: 'z'}, {key: 'b'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
        />
    );
  }
}
