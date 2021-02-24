import { createStackNavigator } from "react-navigation-stack";
import MainPage from "../Pages/MainPage";
import EditPage from "../Pages/EditPage";

const MainStack = createStackNavigator({
    MainNav: {
        screen: MainPage
    },
    EditNav: {
        screen: EditPage
    }
},{
    initialRouteParams: "MainNav",
    headerMode: "none",
})

export default MainStack;