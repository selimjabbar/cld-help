import {Component} from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement
} from "@chakra-ui/react";
import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from "react-icons/fa";

const CustomInput = ({
                         error,
                         label,
                         value,
                         setValue,
                         borderColor,
                         placeholder,
                         placeholderColor,
                         inputType,
                         textColor,
                         top,
                         bottom,
                         showIcon,
                         direction,
                         clickHandle, ref, invisible
                     }) => (
    <>
        {!invisible && (<FormControl mt={bottom && -2} mb={top && -2} isInvalid={error}>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                <Input
                    onKeyDown={(e) => {
                        if (e.key === "Enter")
                            clickHandle()
                    }}
                    ref={ref}
                    // dir={direction === "right" ? "ltr" : "rtl"}
                    height={50} value={value} onChange={(event) => setValue(event.target.value)}
                    borderBottomRadius={top && 0}
                    borderTopRadius={bottom && 0}
                    type={inputType}
                    textColor={textColor}
                    placeholder={placeholder}
                    _placeholder={{color: placeholderColor}}
                    borderColor={borderColor}
                    _hover={{borderColor: borderColor, borderWidth: 2}}
                    _focusVisible={{borderColor: borderColor, borderWidth: 3}}/>
                {showIcon && (
                    direction === "right" ?
                        <InputRightElement mt={2}>
                            <IconButton
                                onClick={clickHandle}
                                isRound={true}
                                borderWidth={0}
                                variant='outline'
                                colorScheme={textColor==="black"?'blackAlpha':'whiteAlpha'}
                                aria-label='Done'
                                fontSize='20px'
                                icon={<FaRegArrowAltCircleRight/>}
                            />
                        </InputRightElement> :
                        <InputLeftElement mt={2}>
                            <IconButton
                                onClick={clickHandle}
                                isRound={true}
                                borderWidth={0}
                                variant='outline'
                                colorScheme={textColor==="black"?'blackAlpha':'whiteAlpha'}
                                aria-label='Done'
                                fontSize='20px'
                                icon={<FaRegArrowAltCircleLeft/>}
                            />
                        </InputLeftElement>
                )
                }
            </InputGroup>

        </FormControl>)}
    </>

)
export default CustomInput;
