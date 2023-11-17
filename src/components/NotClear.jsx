import { Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import styles from "../stylesheet/NotClear.module.css"
const NotClear = () => {
    return (
        <Box className={styles.mainContainer}>
            <Text className={styles.text1}>
                Anything not clear?
            </Text>
            <Box display="flex" width="95%" margin="auto" flexWrap={['wrap', 'nowrap']} alignItems={['flex-start', 'center']}>
                <Text flex={['0 0 100%', '1']} className={styles.text2} marginBottom={['1em', '0']}>
                    You can see our detailed F&Q sessions if you have more queries. Also, we are always a single call away for all your
                    <br />special asks...
                </Text>
                <Button width={['100%', 'auto']} marginTop={['1em', '0']} background="var(--1, #8800EC)" color="white">
                    CONTACT US
                </Button>
            </Box>
        </Box>
    )
}

export default NotClear
