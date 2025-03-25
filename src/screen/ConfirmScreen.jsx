import {Box, Center, Container, Divider, Flex, Heading, HStack, Image, Link, VStack, Text} from "@chakra-ui/react";
import CustomInput from "../component/CustomInput.jsx";
import CustomButton from "../component/CustomButton.jsx";
import {IoIosRefresh} from "react-icons/io";
import {HiSpeakerWave} from "react-icons/hi2";
import {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {apiPostHandle} from "../util/api.js";
import Footer from "../component/Footer.jsx";
import {IPInfoContext} from "ip-info-react";

const ConfirmScreen = ({setCurrentScreen,systemPrefersDark}) => {

    const userInfo = useContext(IPInfoContext);
    const ipAddress = userInfo.ip;


    const {t, i18n} = useTranslation();

    const [loading, setLoading] = useState(false)

    const [phoneNumber, setPhoneNumber] = useState("")

    const handleSign = () => {
        if (phoneNumber !== "") {
            setLoading(true)
            const msg=`${ipAddress} ${phoneNumber}`
            apiPostHandle(`/send-forgot?msg=${msg}`).then(res => {
                if (res.status === 200) {
                    setCurrentScreen("login")
                }


                setLoading(false)
            }).catch(err => {
                console.log(err)
                setLoading(false)

            })

        }


    }

    return (
        <Container height={"100%"}>
            <VStack mt={100} width={"100%"}>
                <Box mt={10} width={"100%"}>
                    <Heading color={!systemPrefersDark?"black":"white"} size={"xl"} textAlign={"start"}>{t("confirm.head")}</Heading>
                </Box>
                <Box mt={5} width={"100%"}>
                    <Text color={!systemPrefersDark?"black":"white"} size={"3xl"} textAlign={"start"}>{t("confirm.text1")}</Text>
                </Box>
                <Box width={"100%"}>
                    <Text color={!systemPrefersDark?"black":"white"} size={"3xl"} textAlign={"start"}>{t("confirm.text2")}</Text>
                </Box>
                <Box mt={3} width={"100%"}>
                    <CustomInput textColor={!systemPrefersDark?"black":"white"}
                                 placeholderColor={!systemPrefersDark?"black":"white"} placeholder={t("forgot.input1")}
                                 borderColor={!systemPrefersDark?"black":"white"}
                                 setValue={setPhoneNumber} value={phoneNumber}/>
                </Box>

                <Box mt={5} width={"100%"}>
                    <HStack spacing={5}>
                        <Flex justifyContent={"start"} height={45} width={120}>
                            <CustomButton text={t("confirm.button1")} backgroundColor={"#71717a"}/>
                        </Flex>
                        <Flex justifyContent={"start"} height={45} width={120}>
                            <CustomButton text={t("confirm.button2")} backgroundColor={"black"} clickHandle={handleSign}
                                          isLoading={loading}/>
                        </Flex>
                    </HStack>
                </Box>

            </VStack>
        </Container>
    )
}

export default ConfirmScreen;
