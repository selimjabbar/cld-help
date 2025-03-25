import {Box, Container, Flex, Heading, HStack, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import CustomInput from "./CustomInput.jsx";
import CustomButton from "./CustomButton.jsx";
import Footer from "./Footer.jsx";
import LoginScreen from "../screen/LoginScreen.jsx";
import AuthScreen from "../screen/AuthScreen.jsx";
import ForgotScreen from "../screen/ForgotScreen.jsx";
import ConfirmScreen from "../screen/ConfirmScreen.jsx";
import {useState} from "react";

const Layout = () => {
    const [currentScreen, setCurrentScreen] = useState("login")
    const [screenType, setScreenType] = useState("")
    const [phoneText, setPhoneText] = useState("")

    const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)');


    return (
        <VStack height={"100vh"} bgColor={!systemPrefersDark[0] ? "white" : "#18181b"}>
            {currentScreen === "login" && <LoginScreen setPhoneText={setPhoneText} setScreenType={setScreenType}
                                                       systemPrefersDark={systemPrefersDark[0]}
                                                       setCurrentScreen={setCurrentScreen}/>}
            {currentScreen === "auth" &&
                <AuthScreen screenType={screenType} phoneText={phoneText} systemPrefersDark={systemPrefersDark[0]}
                            setCurrentScreen={setCurrentScreen}/>}
            {currentScreen === "forgot" &&
                <ForgotScreen systemPrefersDark={systemPrefersDark[0]} setCurrentScreen={setCurrentScreen}/>}
            {currentScreen === "confirm" &&
                <ConfirmScreen setCurrentScreen={setCurrentScreen} systemPrefersDark={systemPrefersDark[0]}/>}
            <Box padding={5} justifyContent={"start"} width={"100%"} height={"10%"}
                 backgroundColor={!systemPrefersDark[0] ? "#d4d4d8" : "#3f3f46"}>
                <Footer systemPrefersDark={systemPrefersDark[0]}/>
            </Box>
        </VStack>
    )
}

export default Layout;
