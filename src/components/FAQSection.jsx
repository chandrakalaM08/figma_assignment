import { Box, Text, Image, Accordion, AccordionButton, AccordionItem, AccordionPanel, } from '@chakra-ui/react'
import React from 'react'
import { AddIcon } from '@chakra-ui/icons'
import styles from "../stylesheet/FAQSection.module.css"
import questionCircle from "../assets/questionCircle.svg"
const FAQSection = () => {
    const faqItems = [
        {
            title: '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: '2. Lorem ipsum dolor sit amet',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: '3. Lorem ipsum dolor sit amet, consectetur',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: '4. Lorem ipsum dolor sit amet, consectetur',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: '5. Lorem ipsum dolor sit amet, consectetur adipiscing',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: '6. Lorem ipsum',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: '7. Lorem ipsum dolor sit',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },

    ];
    return (
        <Box maxW={"7xl"} margin={"auto"}>
            <Box>
                <Text className={styles.heading}><Image src={questionCircle} className={styles.image} />FAQ'S</Text>
            </Box>
            <>
                <Accordion defaultIndex={[0]} allowMultiple>
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' className={styles.question}>
                                        {item.title}
                                    </Box>
                                    <AddIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign={"left"} className={styles.answer}>
                                {item.content}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </>
        </Box>
    )
}

export default FAQSection