import { StyleSheet, Platform } from 'react-native'
import { Colors, Fonts } from 'App/Theme'

export default StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.toolbar,
    elevation: 0,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
    borderBottomWidth: 0,
  },
  headerTitle: {
    fontFamily: 'Rubik-Medium',
    fontWeight: 'normal',
    fontSize: Fonts.size.headerTitleSize,
    color: Colors.toolbarText,
    ...Platform.select({
      android: {
        marginHorizontal: 4,
        textAlign: 'left',
      },
      ios: {
        textAlign: 'center',
      },
    }),
  },
})
