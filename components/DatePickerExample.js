import React from 'react';
import { Button, DatePickerAndroid } from 'react-native';

export default class DatePickerExample extends React.Component {
  constructor(props) {
    super(props);

    this.handleDatePicking = this.handleDatePicking.bind(this);
  }

  async handleDatePicking() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date(2020, 4, 25),
        minDate: new Date(2020, 1, 23),
        maxDate: new Date(2020, 5, 3),
        mode: 'default'//calendar, spinner or default
      });
  
      if (action === DatePickerAndroid.dateSetAction) {
        console.log('year - %d, month - %d, day - %d', year, month, day);
      }
    } catch (err) {
      console.warn('Cannot open date picker', err);
    }
  }

  render() {
    return (
      <Button 
        onPress={async () => await this.handleDatePicking()}
        title='Open Android Date Picker'
        />
    )
  }
}
