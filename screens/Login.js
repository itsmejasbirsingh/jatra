import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";
import { Header, Icon, Input, Select, Switch } from "../components/";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      mobileNumber: '',
      isFormValid: false,
      message: ''
    };
  }

  onPressLogin() {

    if (this.state.mobileNumber.length === 10) {
      this.props.navigation.navigate("Otp")
      this.setState({
        isFormValid: true,
        message: ''
      })
    } else {
      this.setState({
        isFormValid: false,
        message: 'Invalid Mobile Number'
      })
    }

  }

  render() {
    const { navigation } = this.props;



    return (
      <Block flex style={styles.container}>

        <Block flex center>
          <ImageBackground
            source={Images.Onboarding}
            style={{ height, width }}
          />
        </Block>
        <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        <Block center flex>
          <Block>
            <Text color="white" size={20}>
              Mobile Number
            </Text>
          </Block>
          <Block flex width={width * 0.8}>
            <Input
              onChangeText={(val) => {
                this.setState({
                  mobileNumber: val
                })
              }
              }
              placeholder="Enter Your Mobile Number"
              fullWidth
              type="number"
              iconContent={
                <Icon
                  size={12}
                  style={{ marginRight: 10 }}
                  color={argonTheme.COLORS.ICON}
                  //name="g-check"
                  family="ArgonExtra"

                />
              }
            />
            <Text
              p
              style={{ marginLeft: 2 }}
              color={argonTheme.COLORS.ERROR}
            >
              {this.state.message}
            </Text>
          </Block>
        </Block>

        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>

            <Block center>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={
                  () => this.onPressLogin()
                }
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                Login
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    //paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 200,
    height: 150,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop: '-5%'
  },
  subTitle: {
    marginTop: 20
  }
});

export default Login;
