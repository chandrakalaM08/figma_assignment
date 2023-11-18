import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import eligibility from "../assets/eligibility.png"
import step1 from "../assets/process/step1.svg"
import step2 from "../assets/process/step2.svg"
import step3 from "../assets/process/step3.svg"
import step4 from "../assets/process/step4.svg"
const EligibilitySection = () => {
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
        <Flex justifyContent={{ base: "space-evenly", md: "flex-start" }} gap={{ base: "0px", lg: "200px" }} >

            <Box marginLeft={{ base: "0", lg: "100px" }} w={{ base: "130%" }}>
                <Tabs variant="enclosed">
                    <TabList>
                        {tabsData.map((tab, index) => (

                            <Tab key={index} style={{ fontWeight: "600" }}><Image src={tab.img} w={"30px"} />{tab.title}</Tab>


                        ))}
                    </TabList>
                    <TabPanels>
                        {tabsData.map((tab, index) => (
                            <TabPanel key={index} w={"100%"}>
                                {tab.content.map((item, itemIndex) => (
                                    <div key={itemIndex} style={{ textAlign: "left", marginBottom: "35px" }}>
                                        <p style={{ fontWeight: "600" }}>⭐ {item.heading}</p>
                                        <p style={{ fontWeight: "400", marginLeft: "20px" }}>   {item.text}</p>
                                    </div>
                                ))}
                            </TabPanel>
                        ))}
                    </TabPanels>

                </Tabs>


            </Box>

            <Box >
                <Image src={eligibility} w={{ base: "none", lg: "700px" }} h={"350px"} display={{ base: "none", lg: "unset" }} />
            </Box>

        </Flex>
    )
}

export default EligibilitySection
