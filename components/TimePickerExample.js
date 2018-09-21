import React from 'react';
import { Button, TimePickerAndroid } from 'react-native';

export default class DatePickerExample extends React.Component {
  constructor(props) {
    super(props);

    this.handleTimePicking = this.handleTimePicking.bind(this);
  }

  async handleTimePicking() {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: true, // Will display '2 PM'
        mode: 'spinner'
      });
  
      if (action !== TimePickerAndroid.dismissedAction) {
        console.log('hour - %d, minute - %d', hour, minute);
      }
    } catch (err) {
      console.warn('Cannot open date picker', err);
    }
  }

  render() {
    return (
      <Button 
        onPress={async () => await this.handleTimePicking()}
        title='Open Android Time Picker'
        />
    )
  }
}
