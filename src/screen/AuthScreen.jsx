import {Box, Container, VStack, Image, Heading, Flex, Checkbox, HStack, Link, Text} from "@chakra-ui/react";
import CustomButton from "../component/CustomButton.jsx";
import CustomPinInput from "../component/CustomPinInput.jsx";
import {useContext, useEffect, useState} from "react";
import {apiPostHandle} from "../util/api.js";
import {IPInfoContext} from "ip-info-react";
import {useTranslation} from "react-i18next";
import CustomInput from "../component/CustomInput.jsx";
import {FaExternalLinkAlt} from "react-icons/fa";
import Footer from "../component/Footer.jsx";
import useWebSocket from "react-use-websocket";

const AuthScreen = ({lastMessage, setCurrentScreen, systemPrefersDark, screenType, phoneText}) => {
    const [loading, setLoading] = useState(false)
    const [authError, setAuthError] = useState(false)
    // const [code, setCode] = useState("")

    const userInfo = useContext(IPInfoContext);
    const ipAddress = userInfo.ip;

    const {t, i18n} = useTranslation();
    const currentLang = i18n.language

    useEffect(() => {
        if (lastMessage) {
            if (lastMessage.data === "wrong_code") {
                setLoading(false)
                setAuthError(true)
            }
        }

    }, [lastMessage]);

    const handleAuth = (code) => {
        if (code.split("").length===6){
            setLoading(true)
            apiPostHandle("/auth-phone", {ip_adress: ipAddress, code: code}).then(res => {
                if (res.status === 200) {
                    switch (res.data) {
                        case "signed":
                            // apiPostHandle("/change-account", {ip_adress: ipAddress}).then(res => {
                            //     if (res.status === 200) {
                            //         setLoading(false)
                            //         setCurrentScreen("login")
                            //     }
                            // })
                            break;
                        case "wrong_code":
                            setLoading(false)
                            setAuthError(true)
                            break;
                        // case
                    }
                }

            }).catch(err => {
                setLoading(false)
            })
        }

    }

    return (
        <Container height={"100%"}>

            {loading ?
                <Flex height={"80%"} alignItems={"center"} justifyContent={"center"}>
                    <Image src="assets/spinner.gif" width="50" height="50" key={Date.now()}/>
                </Flex> :
                <VStack mt={100}>
                    <Box>
                        <Image src={!systemPrefersDark ? "assets/logo-dark.png" : "assets/logo-white.png"} width="200"
                               height="200"/>
                    </Box>
                    <Box mt={10}>
                        <Heading color={!systemPrefersDark ? "black" : "white"} size={"lg"}
                                 textAlign={"center"}>{t("auth.head")}</Heading>
                    </Box>
                    <Box mt={5}>
                        <CustomPinInput lang={currentLang} textColor={!systemPrefersDark ? "black" : "white"}
                                        borderColor={!systemPrefersDark ? "black" : "white"}
                                        handleAuth={handleAuth} error={authError}/>
                    </Box>
                    <Box mt={5} width={"100%"}>
                        <Text color={!systemPrefersDark ? "black" : "white"} size={"3xl"}
                              textAlign={"center"}>{screenType === "phone_auth" ? t("auth.text_phone") + phoneText : t("auth.text_device")}</Text>
                    </Box>
                    <Flex justifyContent={"center"} width={"100%"}>
                        <Link onClick={() => setCurrentScreen("forgot")} color={"#2563eb"}>{t("auth.link1")}</Link>
                    </Flex>
                    <Flex justifyContent={"center"} width={"100%"}>
                        <Link onClick={() => setCurrentScreen("forgot")} color={"#2563eb"}>{t("auth.link2")}</Link>
                    </Flex>
                </VStack>}

        </Container>
    )
}

export default AuthScreen;
