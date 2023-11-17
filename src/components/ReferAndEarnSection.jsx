import { Box, Button, Flex, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import phone from "../assets/phone.svg";
import friends from "../assets/friends.svg";

const ReferAndEarnSection = () => {
    const imageSize = useBreakpointValue({ base: "275px", md: "300px", lg: "350px" });
    const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

    return (
        <Flex direction={{ base: "column", md: "row" }} w={'85%'} justifyContent={'center'} mb={"50px"}>
            <Box textAlign={{ base: 'center', md: 'left' }} mb={{ base: 4, md: 0 }} marginLeft={{ md: "120px" }}>
                <Text fontSize="24px" fontWeight={600}>Refer & Earn Now</Text>
                <Text fontSize="sm" mt={"24px"} fontWeight={500}>Get a ₹500 Big Basket gift card</Text>
                <Button size={buttonSize} borderRadius={"4px"}
                    mt={'20px'} mb={'20px'}
                    background={"var(--1, #8800EC)"}>
                    <Text fontSize={'16px'} color={'white'}>REFER AND EARN</Text>
                </Button>
                <Text fontSize="xs" textDecoration={'underline'}>Terms and Conditions apply</Text>
            </Box>
            <Box mt={{ base: 4, md: 0 }} marginLeft={{ base: "auto", md: "auto" }} marginRight={{ base: "auto", md: "159px" }}>
                <Box position="relative" width={imageSize} height={imageSize}>
                    <Box position="absolute" top="0" left="0">
                        <Image src={friends} alt="Image 1" width={imageSize} height={imageSize} />
                    </Box>
                    <Box position="absolute" top="20px" left="20px">
                        <Image src={phone} alt="Image 2" width={imageSize} height={imageSize} />
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default ReferAndEarnSection;
