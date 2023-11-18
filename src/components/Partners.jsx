import { Box, Text, Flex, Image, Grid } from '@chakra-ui/react'
import React from 'react'

import bob from "../assets/bob.svg"
import hdfc from "../assets/hdfc.svg"
const Partners = () => {
    let partners = [{ logo: hdfc, name: "HDFC Bank" }, { logo: bob, name: "Bank of Baroda" },
    { logo: hdfc, name: "HDFC Bank" }, { logo: bob, name: "Bank of Baroda" }
    ]

    return (
        <Flex backgroundColor={"rgb(248, 249, 250)"} w={"100%"} justifyContent={"space-around"} padding={{ base: "30px 10px 20px 10px", lg: "40px 80px 40px 80px" }} alignItems={"center"}>
            <Box w={{ base: "80px", lg: "150px" }} marginRight={"6%"}>
                <Text fontSize={{ base: "20px", lg: "22px" }} fontWeight={600}>Our Partners</Text>
            </Box>
            <Box>

                <Grid backgroundColor={"rgb(248, 249, 250)"}
                    templateColumns={{ base: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
                    gap={{ base: "40px", lg: "100px" }}
                    w={{ base: '100%', lg: '100%' }}
                >
                    {partners?.map((partner, index) => (
                        <Box key={index} w={{ base: "100%", lg: "80%" }}>
                            <Image src={partner.logo} mb="15px" w="72%" />
                            <Text fontSize="17px" fontWeight={600} textAlign="left" mb="25px">
                                {partner.name}
                            </Text>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Flex>
    )
}

export default Partners