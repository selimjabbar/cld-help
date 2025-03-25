import {Box, Center, Divider, Flex, Grid, HStack, Link, SimpleGrid, Stack, Text, VStack, Wrap} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";

const Footer = ({systemPrefersDark}) => {
    const {t, i18n} = useTranslation();


    return (<Box width={"100%"}>
        <VStack align={"start"}>
            {/*<HStack>*/}
            {/*    <Text overflow={"clip"} fontSize={"xs"}>{t("footer.text1.1")}<Link*/}
            {/*        color={"#2563eb"}>{t("footer.link1.1")}</Link> {t("footer.text1.2")} <Link*/}
            {/*        color={"#2563eb"}>{t("footer.link1.2")}</Link> {t("footer.text1.3")}</Text>*/}
            {/*</HStack>*/}
            <Wrap>
                <Text color={!systemPrefersDark?"black":"white"} fontSize={"xs"}>{t("footer.link2.1")}</Text>
                <Center height={"5"}>
                    <Divider orientation="vertical" borderColor={!systemPrefersDark?"black":"white"} />
                </Center>
                <Text color={!systemPrefersDark?"black":"white"} fontSize={"xs"}>{t("footer.link2.2")}</Text>
                <Center height={"5"} width={1}>
                    <Divider orientation="vertical" borderColor={!systemPrefersDark?"black":"white"} />
                </Center>
                <Text color={!systemPrefersDark?"black":"white"} fontSize={"xs"}>{t("footer.link2.3")}</Text>
                {/*<Center height={"5"}>*/}
                {/*    <Divider orientation="vertical" borderColor={"black"} />*/}
                {/*</Center>*/}
                {/*<Text fontSize={"xs"}>{t("footer.link2.4")}</Text>*/}
                {/*<Center height={"5"}>*/}
                {/*    <Divider orientation="vertical" borderColor={"black"} />*/}
                {/*</Center>*/}
                {/*<Text fontSize={"xs"}>{t("footer.link2.5")}</Text>*/}
            </Wrap>
            <Box >
                <Text color={!systemPrefersDark?"black":"white"}  align={"center"} fontSize={"xs"}>{t("footer.text2")}</Text>
            </Box>
        </VStack>
    </Box>)
}
export default Footer;