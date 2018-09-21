import React from 'react';
import { Text, View, Picker } from 'react-native';

export default class PickerExample extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
        enabled={true}
        mode='dropdown'
        prompt='Programming Language selector'>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    );
  }
}
