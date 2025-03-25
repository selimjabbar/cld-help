import {Component} from "react";
import {Button} from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'

const CustomButton = ({clickHandle,focusColor,backgroundColor,isLoading,text,icon}) => (
    <Button onClick={clickHandle} w={"100%"} h={"100%"} _hover={{backgroundColor:focusColor}} backgroundColor={backgroundColor} isLoading={isLoading} rightIcon={icon}
            color={"white"}> <Text fontSize={"medium"}>{text}</Text> </Button>
)

export default CustomButton;
