import { Box, Button, Flex, Heading, Image, Input, InputGroup, InputLeftAddon, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from '@chakra-ui/react';
import React from 'react'
import starOnHand from '../assets/emi/starOnhand.svg';
import ellipse from '../assets/emi/Ellipse.svg';

const EMICalculator = () => {
    return (
        <div style={{
            width: "83%",
            margin: "0 auto",
            textAlign: "start",
            marginBottom: "40px",
            marginTop: "50px"
        }}>
            <Flex mb={'30px'} className='heading-flex' gap={'5px'}>
                <Image w={'42px'} src={starOnHand} />
                <Text fontSize={"135%"} fontWeight={600}>EMI Calculator</Text>
            </Flex>
            <Flex justifyContent={'space-between'} flexDirection={{ base: "column", sm: "column", md: "row" }}>
                <Box w={{ base: "100%", md: "80%", lg: "30%" }} p={'15px 15px 0 15px'} borderRadius={'10px'} boxShadow={'md'} color={'gray.500'}>
                    <Box mb={'20px'}>
                        <Text mb={'5px'}>Loan Amount</Text>
                        <InputGroup>
                            <InputLeftAddon children='₹' />
                            <Input readOnly type='text' value={'300000'} placeholder='Enter Loan Amount' />
                        </InputGroup>
                        <Slider mt={'10px'} aria-label='slider-ex-2' color={'#FF0096'} colorScheme='pink' defaultValue={30}>
                            <SliderTrack >
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </Box>
                    <Box mb={'20px'}>
                        <Text mb={'5px'}>Interest Rates(%)</Text>
                        <InputGroup>
                            <InputLeftAddon children='%' />
                            <Input readOnly type='text' value={'10.5'} placeholder='Enter Loan Amount' />
                        </InputGroup>
                        <Slider mt={'10px'} aria-label='slider-ex-2' color={'#FF0096'} colorScheme='pink' defaultValue={30}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </Box>
                    <Box mb={'20px'}>
                        <Text mb={'5px'}>Loan Tenure(In Months)</Text>
                        <InputGroup>
                            <InputLeftAddon children='Months' />
                            <Input readonly type='text' value={'24'} placeholder='Enter Loan Amount' />
                        </InputGroup>
                        <Slider mt={'10px'} aria-label='slider-ex-2' color={'#FF0096'} colorScheme='pink' defaultValue={30}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </Box>
                </Box>
                <Flex w={{ base: "100%", md: "65%" }}
                    flexDirection={{ base: "column", lg: "row" }} shadow={'md'} p={'30px'} justifyContent={'space-between'} borderRadius={'10px'}>
                    <Box w={{ base: "100%", lg: '48%' }} fontWeight={'500'}>
                        <Image src={ellipse} />
                        <Flex mt={'40px'} justifyContent={'space-between'}>
                            <Flex gap={'10px'} alignItems={'center'}>
                                <Box borderRadius={'1px'} w={'10px'} h={'10px'} bg={'#FF0096'}></Box>
                                <Text>Pricipal Amount</Text>
                            </Flex>
                            <Text color={'#8800EC'} fontWeight={'500'}>₹3,00,000</Text>
                        </Flex>
                        <Flex mt={'40px'} justifyContent={'space-between'}>
                            <Flex gap={'10px'} alignItems={'center'}>
                                <Box borderRadius={'1px'} w={'10px'} h={'10px'} bg={'#BFBFBF'}></Box>
                                <Text>Pricipal Amount</Text>
                            </Flex>
                            <Text color={'#8800EC'} fontWeight={'500'}>₹59,454</Text>
                        </Flex>
                        <Flex mt={'40px'} justifyContent={'space-between'}>
                            <Text>Total Amount Payable</Text>
                            <Text color={'#8800EC'} fontWeight={'500'}>₹3,59,454</Text>
                        </Flex>
                    </Box>
                    <Flex w={{ base: "100%", lg: '40%' }} position={'relative'} flexDirection={"column"}  >
                        <Box bg={'#FCF8FF'} p={'40px 20px'} textAlign={'center'}>
                            <Text fontWeight={'bold'} mb={'25px'} fontSize={'20px'}>Equated Monthly Installments (EMI)</Text>
                            <Heading fontSize={"200%"}>₹14,977</Heading>
                        </Box>

                        <Flex justifyContent={"center"} w={"95%"} mb={"20px"}>
                            <Button color={"white"} background={"var(--1, #8800EC)"} fontSize={"85%"} padding={"0px 35px 0px 35px"}>APPLY NOW</Button>

                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </div >
    )
}

export default EMICalculator
