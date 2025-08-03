//galio
import { Block, Text, theme } from "galio-framework";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
//argon
import { articles } from "../constants/";

import { Card, Button, Icon, Input, Select } from "../components/";
import { Images, argonTheme } from "../constants";
import React from "react";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

import ModalDropdown from 'react-native-modal-dropdown';

class BecomeRider extends React.Component {

  constructor() {
    super();
    this.state = {
      regNum: '',
      vehicleType: 'Bike',
      isFormValid: false,
      message: ''
    };
  }

  onPressRegister() {

    alert("Rider Registered Successfully!")

  }

  render() {

    const modalStyles = [
      styles.qty,
    ];

    const textStyles = [
      styles.text
    ];

    const options = ['Auto', 'Bike', 'Car', 'Rikshaw'];

    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex middle style={{ marginTop: 16 }}>
            <StatusBar hidden />

            <Block safe flex middle>
              <Block>
                {/* <Block flex={0.25} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={12}>
                  Sign up with
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <Button style={{ ...styles.socialButtons, marginRight: 30 }}>
                    <Block row>
                      <Icon
                        name="logo-github"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>GITHUB</Text>
                    </Block>
                  </Button>
                  <Button style={styles.socialButtons}>
                    <Block row>
                      <Icon
                        name="logo-google"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>GOOGLE</Text>
                    </Block>
                  </Button>
                </Block>
              </Block> */}

                <Block flex>
                  <Block flex={0.17} middle>

                    {this.state.message ? <Text
                      p
                      style={{ marginLeft: 2 }}
                      color={argonTheme.COLORS.ERROR}
                    >
                      {this.state.message}
                    </Text> : null}
                  </Block>
                  <Block flex center>
                    <KeyboardAvoidingView
                      style={{ flex: 1 }}
                      behavior="padding"
                      enabled
                    >
                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        <Input
                          value={this.state.regNum}
                          onChangeText={text => this.setState({
                            regNum: text
                          })}
                          borderless
                          placeholder="Vehicle Registration Number"
                          iconContent={
                            null
                          }
                        />
                      </Block>

                      <Block left width={width * 0.8} style={{ marginBottom: 15 }}>

                        <ModalDropdown
                          isFullWidth={true}
                          options={options}
                          defaultValue={this.state.vehicleType}
                          style={modalStyles}
                          onSelect={(index, value) => this.setState({
                            ...this.state,
                            vehicleType: value
                          })}
                        >
                          <Block flex row middle space="between">
                            <Text size={12} style={textStyles}>{this.state.vehicleType}</Text>
                            <Icon name={"nav-down"} family={"ArgonExtra"} size={10} color={argonTheme.COLORS.WHITE} />
                          </Block>
                        </ModalDropdown>

                       

                      </Block>

                      {/* <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          password strength:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          strong
                        </Text>
                      </Block>
                    </Block> */}
                      {/* <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button>
                    </Block> */}
                      <Block middle>
                        <Button color="primary" style={styles.createButton} onPress={
                          () => this.onPressRegister()
                        }>
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            SUBMIT
                          </Text>
                        </Button>
                      </Block>
                    </KeyboardAvoidingView>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER,
  },
  group: {
    paddingTop: theme.SIZES.BASE,
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4,
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3,
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE,
    // paddingBottom: theme.SIZES.BASE * 2,
  },
  qty: {
    width: 100,
    backgroundColor: argonTheme.COLORS.DEFAULT,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 9.5,
    borderRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  text: {
    color: argonTheme.COLORS.WHITE,
    fontWeight: '600'
  },
  dropdown: {
    marginTop: 8,
    marginLeft: -16,
    width: 100,
  },
  text: {
    color: argonTheme.COLORS.WHITE,
    fontWeight: '600'
  },
});

export default BecomeRider;
