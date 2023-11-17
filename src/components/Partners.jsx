import { Box, Text, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import icici from "../assets/icici.svg"
import bob from "../assets/bob.svg"
import hdfc from "../assets/hdfc.svg"
const Partners = () => {
    let partners = [{ logo: hdfc, name: "HDFC Bank" },
    { logo: icici, name: "ICICI Bank" },
    { logo: icici, name: "ICICI Bank" },
    { logo: bob, name: "Bank of Baroda" }]

    return (
        <Flex w={"55%"} justifyContent={"space-around"} padding={"40px 80px 40px 80px"} alignItems={"center"}>
            <Box w={"150px"} marginRight={"28px"}>
                <Text fontSize={"22px"} fontWeight={600}>Our Partners</Text>
            </Box>
            <Box>
                <Flex justifyContent={"space-evenly"} w={{ base: "300%", sm: "250%", md: "220%", lg: "180%" }} >
                    {partners?.map((partner) =>
                        <Box>
                            <Image src={partner.logo} mb={"15px"} w={"80%"} />
                            <Text fontSize={"17px"} fontWeight={600} textAlign={"left"}>{partner.name}</Text>
                        </Box>
                    )}
                </Flex>
            </Box>
        </Flex>
    )
}

export default Partners