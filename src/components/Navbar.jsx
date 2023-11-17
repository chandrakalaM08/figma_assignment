import {
    Box, Flex, Image, Input, Text, useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

import styles from "../stylesheet/Navbar.module.css"
import notificationIcon from '../assets/notificationIcon.svg';
import userIcon from '../assets/userIcon.svg';
import searchIcon from '../assets/searchIcon.svg';
import locationIcon from '../assets/locationIcon.svg';
import cartIcon from '../assets/cartIcon.svg';
import TopDrawer from './TopDrawer';
import { HamburgerIcon } from '@chakra-ui/icons';



const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()

    useEffect(() => {
        console.log(onOpen)
    }, [])
    return (
        <div>
            <Flex boxShadow={'base'} p={'24px'} alignItems={'center'} justifyContent={'space-between'}>
                <TopDrawer onOpen={onOpen} btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
                <Flex className={styles.container1}>
                    <Box fontSize={'20px'} display={{ base: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none', '2xl': 'none' }}>
                        <HamburgerIcon ref={btnRef} onClick={() => {
                            onOpen();
                        }} />
                    </Box>
                    <Image src={logo} />
                    <Flex gap={'24px'} display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex', '2xl': 'flex' }}>
                        <Link to={'#'} className={styles.link} >Offers</Link>
                        <Link to={'#'} className={styles.link}>Stories</Link>
                        <Link to={'#'} className={styles.link}>Tata Pay</Link>
                        <Link to={'#'} className={styles.link}>NeuPass</Link>

                    </Flex>
                </Flex>
                <Flex className={styles.container2}>
                    <Flex className={`${styles.container2} ${styles.container2Input}`} display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}>
                        <Image src={searchIcon} />
                        <Input _focusVisible={'none'} placeholder='Search Tata Neu' _placeholder={{
                            color: 'black', fontSize: "14px"
                        }} />

                    </Flex>
                    <Flex alignItems={'center'} gap={'3px'}>
                        <Text display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex', '2xl': 'flex' }} fontWeight={'500'}>122018</Text>
                        <Image src={locationIcon} />
                    </Flex>
                    <Flex>
                        <Image src={cartIcon} />
                    </Flex>
                    <Flex>
                        <Image src={notificationIcon} />
                    </Flex>
                    <Flex>
                        <Image src={userIcon} />
                    </Flex>
                </Flex>
            </Flex>
        </div>
    )
}

export default Navbar;