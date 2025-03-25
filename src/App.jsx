import {ChakraProvider} from "@chakra-ui/react";
import LoginScreen from "./screen/LoginScreen.jsx";
import AuthScreen from "./screen/AuthScreen.jsx";
import {useState} from "react";
import IPInfo from "ip-info-react";
import ForgotScreen from "./screen/ForgotScreen.jsx";
import ConfirmScreen from "./screen/ConfirmScreen.jsx";
import Layout from "./component/Layout.jsx";

function App() {


    return (
        <IPInfo>

            <ChakraProvider>
                <Layout/>
            </ChakraProvider>
        </IPInfo>
    )
}

export default App
