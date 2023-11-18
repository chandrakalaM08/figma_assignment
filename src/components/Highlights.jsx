import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import star from "../assets/Star.svg"
import shoutingMan from "../assets/shoutingman.svg"
import yellowStar from "../assets/yellowstar.svg"
const Highlights = () => {

    return (
        <div style={{ width: "90%", border: "3px solid black", margin: "auto" }}>
            <Flex textAlign={"flex-start"} >
                <Image src={star} w={"4%"} h={"30px"} />
                <Text fontWeight={600} fontSize={"22px"}>Personal Loan Highlights</Text>
            </Flex>
            <Box w={"80%"} margin={"auto"}>
                <Flex justifyContent={"center"} gap={"10%"}>
                    <Image src={shoutingMan}
                        width={"30%"} display={{ base: "none", md: "unset" }} />
                    <Flex flexDirection={"column"} width={"100%"} textAlign={"left"}
                        paddingBottom={{ base: "0px", md: "50px" }} paddingTop={"20px"}>
                        <Box mb={"20px"}>
                            <Flex>
                                <Image src={yellowStar} w={"5%"} marginRight={"6px"} />
                                <Text
                                    fontWeight={600}
                                    fontSize={"100%"}>Interest Rate</Text>
                            </Flex>
                            <Text fontWeight={400}
                                marginLeft={"20px"}
                                fontSize={"85%"}
                                lineHeight={"20px"}>Usually <span style={{ fontWeight: 600, color: '#8800EC' }}>10.49% p.a.</span> onwards: some PSUs may offer lower rates</Text>
                        </Box>
                        <Box mb={"20px"}>
                            <Flex>
                                <Image src={yellowStar} w={"5%"} marginRight={"6px"} />
                                <Text
                                    fontWeight={600}
                                    fontSize={"100%"}>Loan Amount</Text>
                            </Flex>
                            <Text fontWeight={400}
                                marginLeft={"20px"}
                                fontSize={"85%"}
                                lineHeight={"20px"}>Can go up to <span style={{ fontWeight: 600, color: '#8800EC' }}>RS 40 lakh:</span> some lenders may offer higher loan amount</Text>
                        </Box>
                        <Box mb={"20px"}>
                            <Flex>
                                <Image src={yellowStar} w={"5%"} marginRight={"6px"} />
                                <Text
                                    fontWeight={600}
                                    fontSize={"100%"}>Processing Fees</Text>
                            </Flex>
                            <Text fontWeight={400}
                                marginLeft={"20px"}
                                fontSize={"85%"}
                                lineHeight={"20px"}><span style={{ fontWeight: 600, color: '#8800EC' }}>0.5% to 4%</span> of loan amount (may vary across lenders)</Text>
                        </Box>
                        <Box mb={"20px"}>
                            <Flex>
                                <Image src={yellowStar} w={"5%"} marginRight={"6px"} />
                                <Text
                                    fontWeight={600}
                                    fontSize={"100%"}>Tenure</Text>
                            </Flex>
                            <Text fontWeight={400}
                                marginLeft={"20px"}
                                fontSize={"85%"}
                                lineHeight={"20px"}>Up to <span style={{ fontWeight: 600, color: '#8800EC' }}>5 years</span> (some lenders offer repayment period till 8 year)</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

        </div>
    )
}

export default Highlights