import { Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import styles from "../stylesheet/NotClear.module.css"

const NotClear = () => {
    return (
        <Box className={styles.mainContainer}>
            <Text className={styles.text1}>Anything not clear?</Text>
            <Box className={styles.container}>
                <Text className={styles.text2}>You can see our detailed F&Q sessions if you have more quiries. Also we are always a single call away for all your<br /> special asks...</Text>
                <Button className={styles.contactUs} background={"var(--1, #8800EC)"}
                    color={"white"}>CONTACT US</Button>
            </Box>
        </Box >
    )
}

export default NotClear