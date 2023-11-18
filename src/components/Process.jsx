import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import confety from '../assets/process/confety.svg';
import logo from '../assets/Logo.svg';
// import interest from '../Assets/Section4/interests.svg';
// import rates from '../Assets/Section4/rates.jpg';
import hammer from '../assets/process/Sledgehammer.png';
import shopping from '../assets/process/BagHeart.svg';
import building from '../assets/process/Buildings.svg';
import lightning from '../assets/light.svg';
import hospital from '../assets/process/Hospital.svg';
import suitcase from '../assets/process/Suitcase.svg';
import iphoneX from '../assets/process/iphoneX.svg';
import rangeBar from '../assets/process/rangeBar.svg';
import styles from "../stylesheet/Process.module.css"

const Process = () => {
    return (
        <div className={styles.mainBox}>
            <Flex minH={'70vh'} className={styles.main} flexDir={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }}>
                <Box className={styles.box1} backgroundImage={`url(${confety})`} w={{ base: '100%', sm: '100%', md: '100%', lg: '50%', xl: '50%', '2xl': '50%' }}>
                    <Box position={'relative'} className={styles.innerbox1}>
                        <Image src={iphoneX} w={"95%"} />
                        <Image className={styles.box1Img2} src={logo} />
                        <VStack
                            backgroundColor={"#f4e9fc"}
                            borderRadius={"8px"}
                            padding={"10px 20px"}
                            width={"80%"}
                            position={"absolute"}
                            top={"30%"}
                            left={"8%"}>
                            <Image src={shopping} w={"30px"} />
                            <Text color={'gray.600'} fontSize={"14px"}>Personal Loan</Text>
                            <Text color={'#8800ec'} fontWeight={'600'} fontSize={"14px"}>upto Rs 10 Lacs</Text>
                        </VStack>
                        <VStack backgroundColor={"#f4e9fc"}
                            borderRadius={"8px"}
                            padding={"10px 20px"}
                            width={"80%"}
                            position={"absolute"}
                            bottom={"15%"}
                            left={"8%"}>
                            <Image src={building} w={"30px"} />
                            <Text color={'gray.600'} fontSize={"14px"}>Flexible Repayment</Text>
                            <Text color={'#8800ec'} fontWeight={'600'} fontSize={"14px"}>at interest rate 10.49% p.a.</Text>
                        </VStack>
                    </Box>
                    <Flex className={styles.outsideBox} top={'15%'} left={'12%'} bg={'#FFE0B3'}>
                        <Image src={hospital} />
                        <Text>Medical</Text>
                    </Flex>
                    <Flex className={styles.outsideBox} top={'9%'} right={'4%'} bg={'#B3E0FF'}>
                        <Image src={hammer} />
                        <Text>Rennovations</Text>
                    </Flex>
                    <Flex className={styles.outsideBox} top={'46%'} right={'4%'} bg={'#FFB3E0'}>
                        <Image src={building} />
                        <Text>School Loans</Text>
                    </Flex>
                    <Flex className={styles.outsideBox} bottom={'12%'} right={'9.5%'} bg={'#D0FFB3'}>
                        <Image src={suitcase} />
                        <Text>Travel</Text>
                    </Flex>
                    <Flex className={styles.outsideBox} bottom={'38%'} left={'6%'} bg={'#DFB3FF'}>
                        <Image src={shopping} />
                        <Text>Shopping</Text>
                    </Flex>
                </Box>
                <Box className={styles.box2} w={{ base: '100%', sm: '100%', md: '100%', lg: '50%', xl: '50%', '2xl': '50%' }}>
                    <Flex marginLeft={'4%'}>
                        <Image src={lightning} className={styles.box2Img} />
                        <Text fontSize={'28px'} fontWeight={'600'}>Lightning Fast Process</Text>
                    </Flex>
                    <Box marginTop={'9%'}>
                        <Image w={"75%"} src={rangeBar} />
                    </Box>
                    <Flex justifyContent={"center"} w={"80%"} mb={"20px"}>
                        <Button color={"white"} background={"var(--1, #8800EC)"} fontSize={"85%"}>APPLY NOW</Button>

                    </Flex>

                </Box>
            </Flex>
        </div>
    )
}

export default Process;

