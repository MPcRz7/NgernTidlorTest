import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, TextInput } from "react-native"

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idText: "",
            phoneText: "",
        }
    }

    _Edit = () => {
        this.props.navigation.navigate("EditNav");

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "yellow", justifyContent: "space-evenly", alignItems: "center" }}>
                <Text>Main</Text>
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <Text>ID : </Text>
                        <Text>{this.props.idText}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text>Phone : </Text>
                        <Text>{this.props.phoneText}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={this._Edit} style={{ backgroundColor: "white", padding: 20 }}>
                    <Text>Edit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { idText, phoneText } = state
    return { idText, phoneText }
  };

export default connect(mapStateToProps)(MainPage);