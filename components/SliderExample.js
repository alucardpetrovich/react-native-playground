import React from 'react';
import { Slider } from 'react-native';

export default class SliderExample extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    return (
      <Slider 
        //disabled={true}
        style={{width: '80%'}}
        maximumValue={46}
        minimumValue={2}
        minimumTrackTintColor='red'
        onSlidingComplete={(currValue) => console.log('current slider value after sliding completion', currValue)}
        step={2}
        maximumTrackTintColor='blue'
        value={22}
        />
    );
  }
}
