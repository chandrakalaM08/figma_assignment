import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react'
import React from 'react'

const EligibilitySection = () => {
    const tabsData = [{
        title: "Eligibility",
        content: [{ heading: "Citizenship proof", text: "Indian citizen with valid ID proof" },
        { heading: "Age", text: "23 to 58 years of age" }]
    },
    { title: "How to apply", content: [] },
    { title: "Documentation", content: [] },
    { title: "Fees & Charges", content: [] }]
    return (
        <>
            <Flex maxW={"90%"} justifyContent={'space-between'} margin={'auto'}>
                <Tabs variant="enclosed">
                    <TabList>
                        {tabsData.map((tab, index) => (
                            <Tab key={index}>{tab.title}</Tab>
                        ))}
                    </TabList>
                    <TabPanels>
                        {tabsData.map((tab, index) => (
                            <TabPanel key={index}>
                                <p>{tab.content.heading}</p>
                                <p>{tab.content.text}</p>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </Flex>
        </>

    )
}

export default EligibilitySection