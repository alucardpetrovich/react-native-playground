//Also something strange here

import React from 'react';
import { Text, View, PermissionsAndroid, Button } from 'react-native';

export default class PermissionsAndroidExample extends React.Component {
  constructor(props) {
    super(props);

    this.requestPermission = this.requestPermission.bind(this);
  }

  async requestPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Cool Photo App Camera Permission',
          'message': 'Cool Photo App needs access to your camera ' +
                     'so you can take awesome pictures.'
        }
      );
      console.log('granted', granted);
      console.log('permission in Android', PermissionsAndroid.RESULTS.GRANTED);
      if(granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use camera');
      } else {
        console.log('Camera permission does not granted');
      };
    } catch (err) {
      console.warn(err);
    }
  }
  
  render() {
    return (
      <Button 
        onPress={async () => await this.requestPermission()}
        title='Open Android Permissions'
        />
    )
  }
}
