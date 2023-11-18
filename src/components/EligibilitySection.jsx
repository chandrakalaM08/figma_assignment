import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import step1 from "../assets/process/step1.svg"
import step2 from "../assets/process/step2.svg"
import step3 from "../assets/process/step3.svg"
import step4 from "../assets/process/step4.svg"
import elegibility from "../assets/eligibility.png"
const EligibilitySection = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const tabsData = [{
        img: step1,
        title: "Eligibility",
        content: [
            { heading: "Citizenship proof", text: "Indian citizen with valid ID proof" },
            { heading: "Age", text: "23 to 58 years of age" },
            { heading: "Lorem", text: "Lorem ipsum" },
            { heading: "Ipsum", text: "Ipsum lorem" }
        ]
    },
        {
            img: step2,
            title: "How to apply",
            content: [
                { heading: "Step 1", text: "Lorem ipsum dolor sit amet" },
                { heading: "Step 2", text: "Consectetur adipiscing elit" },
                { heading: "Step 3", text: "Sed do eiusmod tempor incididunt" }
            ]
        },
        {
            img: step3,
            title: "Documentation",
            content: [
                { heading: "Document 1", text: "Ut enim ad minim veniam" },
                { heading: "Document 2", text: "Quis nostrud exercitation ullamco" },
                { heading: "Document 3", text: "Duis aute irure dolor in reprehenderit" }
            ]
        },
        {
            img: step4,
            title: "Fees & Charges",
            content: [
                { heading: "Fee 1", text: "Excepteur sint occaecat cupidatat" },
                { heading: "Fee 2", text: "Non proident, sunt in culpa qui" },
                { heading: "Fee 3", text: "Officia deserunt mollit anim id est laborum" }
            ]
        }]


    return (
        <div style={{
            width: "83%",
            margin: "40px auto"
        }}>
            <Tabs variant='enclosed'
                display={{ base: "flex", lg: "block" }}
                width={{ base: "120%", lg: "100%" }}
                justifyContent={{ base: "flex-start" }}
                borderLeft={"1px solid #CBD5E0"}
                borderRight={"1px solid #CBD5E0"}
                borderBottom={"1px solid #CBD5E0"}
                borderRadius={"6px"}>
                <TabList display={{ base: "flex" }} flexDirection={{ base: "column", lg: "row" }}
                >
                    {tabsData.map((tab, index) => {
                        return <Tab w={{ base: "90%", lg: "60%" }} paddingTop={"10px"}
                            fontWeight={"500"}
                            textDecoration={{
                                base: selectedTab === index ? 'underline' : 'none',
                                lg: "none"
                            }}
                            color={selectedTab === index ? 'var(--1, #8800EC)' : 'gray.500'} // Change color here
                            onClick={() => setSelectedTab(index)}>
                            <Image w={'30px'} src={tab.img} />
                            <Text>{tab.title}</Text>
                        </Tab>
                    })}
                </TabList>
                <TabPanels >
                    {tabsData.map((tab) => {
                        return <TabPanel display={"flex"}
                            justifyContent={"space-around"}>
                            <Box w={'50%'} textAlign={'start'}>
                                {tab?.content?.map(item => {
                                    return <Box key={item} mb={'40px'} w={{ base: "180%", lg: "" }}>
                                        <Flex alignItems={'center'} gap={'8px'}>
                                            <Text fontWeight={'600'}>⭐ {item.heading}</Text>
                                        </Flex>
                                        <Text ml={'2.9%'} color={'gray.500'} fontSize={"14px"}>{item.text}</Text>
                                    </Box>
                                })}
                            </Box>
                            <Box w={'30%'} >
                                <Image src={elegibility} height={{ base: "0", md: "105%" }} />
                            </Box>
                        </TabPanel>
                    })}

                </TabPanels>
            </Tabs>
        </div >
    )
}

export default EligibilitySection
