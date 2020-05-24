import React from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { RNCamera } from 'react-native-camera'
import styles from './CameraScreenStyle'
import { withNavigationFocus } from 'react-navigation'
import { Header, HeaderBackButton } from 'react-navigation'
import { Helpers, Metrics, Images } from 'App/Theme'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker'
import { utils } from '@react-native-firebase/app'
import vision from '@react-native-firebase/ml-vision'


export default class CameraScreen extends React.Component {
  state = {
    zoomValue: 0,
    flashMode: RNCamera.Constants.FlashMode.off,
    avatarSource: null,
    imageProcessedText: null,
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    const { isFocused } = this.props
    const { hasCameraPermission } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={this._openCamera}>
            {/*<Image style={{width: 300, height: 400}} source={this.state.avatarSource} resizeMode={'contain'}/>*/}
            {!this.state.avatarSource &&
            <Image style={{ width: 300, height: 400 }} source={Images.launchCamera} resizeMode={'contain'}/>}
            {this.state.avatarSource &&
            <Image style={{ width: 300, height: 400 }} source={this.state.avatarSource} resizeMode={'contain'}/>}
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.result}>{this.state.imageProcessedText}</Text>
        </View>
      </View>
    )
  }

  _openCamera = () => {
    ImagePicker.launchCamera({
      storageOptions: {
        path: 'scanappimgs',
      },
    }, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.warn('User cancelled image picker')
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.warn('User tapped custom button: ', response.customButton)
      } else {
        const source = { uri: response.uri }

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        })
        this._processImageForText(response.path)
      }
    })
  }

  _processImageForText = async (localPath) => {
    const processed = await vision().textRecognizerProcessImage(localPath)

    console.log('Found text in document: ', processed.text, processed.blocks.length)
    console.log(localPath, 'Localpath')

    this.setState({
      imageProcessedText: `Processed text: ${processed.text} ${processed.blocks.length}`,
    })

    processed.blocks.forEach(block => {
      console.log('Found block with text: ', block.text)
      console.log('Confidence in block: ', block.confidence)
      console.log('Languages found in block: ', block.recognizedLanguages)
    })
  }
}