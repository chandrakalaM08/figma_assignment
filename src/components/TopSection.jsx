import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import family from "../assets/family.svg"
import wallet from "../assets/wallet.svg"
import light from "../assets/light.svg"
import document from "../assets/document.svg"
import hand from "../assets/hand.svg"
const TopSection = () => {
    return (
        <Flex w={"90%"} margin={"auto"} justifyContent={"space-between"}>
            <Box w={"80%"} textAlign={"left"}>
                <Box w={{ base: "120%", md: "80%" }}>
                    <Text fontWeight={700} fontSize={"37px"} >Turn Dreams into Reality</Text>
                    <Text fontWeight={700} fontSize={"37px"}>With <span style={{
                        color: " #FF0096"
                    }}>Personal Loans</span></Text>
                </Box>

                <Flex w={{ base: "120%", md: "80%" }} paddingTop={"20px"} paddingBottom={"25px"}
                    justifyContent={"flex-start"} gap={"100px"}>
                    <Flex>
                        <Box>
                            <Image src={wallet} w={"85%"} />
                        </Box>
                        <Box>
                            <Text fontWeight={600}
                                marginLeft={"10px"}
                                fontSize={"90%"}
                                lineHeight={"20px"}>Avail Zero</Text>
                            <Text fontWeight={400}
                                marginLeft={"10px"}
                                fontSize={"85%"}
                                lineHeight={"20px"}>Processing fee</Text>
                        </Box>
                    </Flex>

                    <Flex>
                        <Box>
                            <Image src={light} w={"85%"} />
                        </Box>
                        <Box>
                            <Text fontWeight={600}
                                marginLeft={"10px"}
                                fontSize={"90%"}
                                lineHeight={"20px"}>Quick</Text>
                            <Text fontWeight={400}
                                marginLeft={"10px"}
                                fontSize={"85%"}
                                lineHeight={"20px"}>Personal Loan</Text>
                        </Box>
                    </Flex>

                </Flex>
                <Flex w={{ base: "120%", md: "80%" }} paddingBottom={"25px"}
                    justifyContent={"flex-start"} gap={"100px"}>
                    <Flex>
                        <Box>
                            <Image src={hand} w={"85%"} />
                        </Box>
                        <Box>
                            <Text fontWeight={600}
                                marginLeft={"10px"}
                                fontSize={"90%"}
                                lineHeight={"20px"}>Lowest</Text>
                            <Text fontWeight={400}
                                marginLeft={"10px"}
                                fontSize={"85%"}
                                lineHeight={"20px"}>Interest Rates</Text>
                        </Box>
                    </Flex>

                    <Flex>
                        <Box>
                            <Image src={document} w={"85%"} />
                        </Box>
                        <Box>
                            <Text fontWeight={600}
                                marginLeft={"10px"}
                                fontSize={"90%"}
                                lineHeight={"20px"}>Minimal</Text>
                            <Text fontWeight={400}
                                marginLeft={"10px"}
                                fontSize={"85%"}
                                lineHeight={"20px"}>Documentation</Text>
                        </Box>
                    </Flex>

                </Flex>
                <Flex mb={"20px"}>
                    <Button color={"white"} background={"var(--1, #8800EC)"} fontSize={"85%"}>APPLY NOW</Button>
                </Flex>
            </Box>
            <Box >
                <Image src={family} w={"80%"} display={{ base: "none", lg: "unset" }} />
            </Box>
        </Flex>
    )
}

export default TopSection