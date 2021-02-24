import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import { idTextSave, phoneTextSave } from "../actions/index";

class EditPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idTextt: "",
            phoneTextt: "",
        }
    }

    componentDidMount() {
        this.setState({ idTextt: this.props.idText })
        this.setState({ phoneTextt: this.props.phoneText })
    }


    _Submit = () => {
        var idRule = /[0-9]{13}$/;
        var phoneRule = /^0[0-9]{9}$/;
        var resultId = idRule.test(this.state.idTextt);
        var resultPhone = phoneRule.test(this.state.phoneTextt);
        if (resultId && resultPhone) {
            this.props.idTextSave(this.state.idTextt);
            this.props.phoneTextSave(this.state.phoneTextt);
            this.props.navigation.navigate("MainNav");
        } else {
            alert("Input Unmatched");
        }


    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "yellow", justifyContent: "space-evenly", alignItems: "center" }}>
                <Text>Edit</Text>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text>ID : </Text>
                        <TextInput
                            placeholder="id"
                            style={{ backgroundColor: "white", width: 300 }}
                            value={this.state.idTextt}
                            onChangeText={(text) => this.setState({ idTextt: text })} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text>Phone : </Text>
                        <TextInput
                            placeholder="phone"
                            style={{ backgroundColor: "white", width: 300 }}
                            value={this.state.phoneTextt}
                            onChangeText={(text) => this.setState({ phoneTextt: text })} />
                    </View>
                </View>
                <TouchableOpacity onPress={this._Submit} style={{ backgroundColor: "white", padding: 20 }}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { idText, phoneText } = state
    return { idText, phoneText }
};

export default connect(mapStateToProps, { idTextSave, phoneTextSave })(EditPage);
// export default connect(mapStateToProps)(EditPage);