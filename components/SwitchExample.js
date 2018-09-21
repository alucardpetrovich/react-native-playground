import React from 'react';
import { Switch } from 'react-native';

export default class SwitchExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { switchValue: true};
    this.switchRef = React.createRef();
  }
  
  render() {
    return (
      <Switch 
        disabled={false}
        onTintColor='green'
        onValueChange={(newValue) => this.setState({switchValue: newValue})}
        value={this.state.switchValue}
        />
    );
  }
}
