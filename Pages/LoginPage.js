import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { idTextSave, phoneTextSave } from "../actions/index";

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idText: "",
            phoneText: "",
            value: "",
        }
    }

    _Login = () =>{
        // var idRule = /^$|\d{13}$/;
        var idRule = /^[0-9]{13}$/;
        var phoneRule = /^0[0-9]{9}$/;
        var resultId = idRule.test(this.state.idText);
        var resultPhone = phoneRule.test(this.state.phoneText);
        // alert(resultId + " " + resultPhone);
        // alert(resultId);
        if(resultId && resultPhone ){
            this.props.idTextSave(this.state.idText);
            this.props.phoneTextSave(this.state.phoneText);
            this.props.navigation.navigate("MainNav");
            // alert("Login");
        }else{
            alert("Input Unmatched");
        }      
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "yellow", justifyContent: "space-evenly", alignItems: "center" }}>
                <Text>Login</Text>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text>ID : </Text>
                        <TextInput
                            placeholder="id"
                            style={{ backgroundColor: "white", width: 300 }}
                            onChangeText={(text) => this.setState({ idText: text })}
                            />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text>Phone : </Text>
                        <TextInput
                            placeholder="phone"
                            style={{ backgroundColor: "white", width: 300 }}
                            onChangeText={(text) => this.setState({ phoneText: text })} />
                    </View>
                </View>
                <TouchableOpacity onPress={this._Login} style={{ backgroundColor: "white", padding: 20 }}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { idText, phoneText } = state
    return { idText, phoneText }
};

export default connect(mapStateToProps,{idTextSave, phoneTextSave})(LoginPage);