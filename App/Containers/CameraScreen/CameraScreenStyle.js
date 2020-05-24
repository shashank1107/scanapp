import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  // cameraContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   // height: '100%',
  // },
  // container: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   backgroundColor: 'black',
  // },
  container: {
    flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden'
  },
  captureButton: {
    // flex: 0,
    // backgroundColor: '#ffffff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
    width: '100%',
    height: 300,
    justifyContent: 'center'
  },
  // error: {
  //   ...Fonts.normal,
  //   color: Colors.error,
  //   marginBottom: Metrics.tiny,
  //   textAlign: 'center',
  // },
  // instructions: {
  //   ...Fonts.normal,
  //   fontStyle: 'italic',
  //   marginBottom: Metrics.tiny,
  //   textAlign: 'center',
  // },
  // logoContainer: {
  //   ...Helpers.fullWidth,
  //   height: 300,
  //   marginBottom: 25,
  // },
  result: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  // text: {
  //   ...Fonts.normal,
  //   marginBottom: Metrics.tiny,
  //   textAlign: 'center',
  // },
})
