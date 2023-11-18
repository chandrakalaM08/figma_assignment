import { Box, Text, Image, Flex } from '@chakra-ui/react'
import React from 'react'
import handsheart from "../assets/handsheart.svg"
import businessman from "../assets/businessman.svg"
import comma from "../assets/comma.svg"
const Testimonial = () => {
    return (
        <Box mb={"4%"}>
            <Flex justifyContent={"center"} mb={"4%"}>
                <Image src={handsheart} w={'30px'} h={'30px'} />  <Text fontSize={"135%"} fontWeight={600}>What our customer says</Text>
            </Flex>
            <Flex w={"70%"} margin={'auto'}>
                <Image src={businessman} w={'30%'} h={'336px'} />
                <Image src={comma} w={'5%'} h={'5%'} />
                <Box textAlign={"left"} marginLeft={"20px"} w={"62.5%"}>
                    <Text fontSize={"20px"} fontWeight={600}>SUNIL GUPTA</Text>
                    <Text fontSize={"16px"} fontWeight={600}>Chartered accountant</Text>
                    <Text fontSize={"13px"} fontWeight={400}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia tortL orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia tortor, et convallis libero vehicula ut. or, et convallis libero vehicula ut.</Text>
                    <Text fontSize={"40px"} fontWeight={600}>.....</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default Testimonial