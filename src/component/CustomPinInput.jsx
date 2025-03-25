import {Component, useEffect, useRef, useState} from "react";
import {Box, FormControl, FormLabel, HStack, Input, PinInput, PinInputField} from "@chakra-ui/react";

const CustomPinInput = ({handleAuth,error,borderColor,textColor,lang}) => {


    const currentPinNumber = useRef(lang==="en"?0:5);

    const pin1 = useRef();
    const pin2 = useRef();
    const pin3 = useRef();
    const pin4 = useRef();
    const pin5 = useRef();
    const pin6 = useRef();

    // const [pins, setPins] = useState([])
    //
    // useEffect(() => {
    //     const pinList=[pin1,pin2,pin3,pin4,pin5,pin6]
    //     // console.log(pinList[0])
    //     setPins(pinList)
    // }, []);

    const goPin = (pin) => {
        pin.current.focus();
    }

    return(
        <HStack>
            <PinInput manageFocus={false} onComplete={(code)=>handleAuth(code)} focusBorderColor={borderColor}  size={"lg"} placeholder={""}>
                <PinInputField onInput={()=>goPin(lang==="en"?pin2:pin6)} ref={pin1} borderColor={error?"red":borderColor} textColor={textColor} />
                <PinInputField onInput={()=>goPin(lang==="en"?pin3:pin1)} ref={pin2} borderColor={error?"red":borderColor} textColor={textColor} />
                <PinInputField onInput={()=>goPin(lang==="en"?pin4:pin2)} ref={pin3} borderColor={error?"red":borderColor} textColor={textColor} />
                <PinInputField onInput={()=>goPin(lang==="en"?pin5:pin3)} ref={pin4} borderColor={error?"red":borderColor} textColor={textColor} />
                <PinInputField onInput={()=>goPin(lang==="en"?pin6:pin4)} ref={pin5} borderColor={error?"red":borderColor} textColor={textColor} />
                <PinInputField onInput={()=>goPin(lang==="en"?pin1:pin5)} ref={pin6} borderColor={error?"red":borderColor} textColor={textColor} />
            </PinInput>
        </HStack>
    )

}
export default CustomPinInput;
