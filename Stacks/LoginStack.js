import { createStackNavigator } from "react-navigation-stack";
import LoginPage from "../Pages/LoginPage";

const LoginStack = createStackNavigator({
    LoginNav: {
        screen: LoginPage
    }
},{
    initialRouteParams: "LoginNav",
    headerMode: "none",
})

export default LoginStack;