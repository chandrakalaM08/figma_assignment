import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    VisuallyHidden,
    Image,
    useColorModeValue,
    HStack, // Import HStack
} from '@chakra-ui/react';

import logo from '../assets/Logo.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import youtube from '../assets/youtube.svg';
import facebook from '../assets/facebook.svg';

import styles from '../stylesheet/Footer.module.css';

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            fontSize={"12px"}
            cursor={'pointer'}
            fontWeight={400}

            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'600'} fontSize={'16px'} mb={2} width={"200px"} align={"left"}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box className={styles.container}>
            <Container maxW={'7xl'}>
                <Stack
                    className={styles.innerContainer1}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 6, md: 12, lg: "500px" }}
                    margin={'auto'}
                >
                    <Stack spacing={6} align={'flex-start'} >
                        <Image src={logo} className={styles.logo} />
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Facebook'} href={'#'}>
                                <Image src={facebook} className={styles.social} />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'#'}>
                                <Image src={instagram} className={styles.social} />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'#'}>
                                <Image src={youtube} className={styles.social} />
                            </SocialButton>
                            <SocialButton label={'Linkedin'} href={'#'}>
                                <Image src={linkedin} className={styles.social} />
                            </SocialButton>
                        </Stack>
                    </Stack>

                    {/* Use HStack for Help & Support and Customer Care sections */}
                    <HStack align={'flex-start'} gap={"10%"}>
                        <Stack align={'flex-start'} >
                            <ListHeader>Help & Support</ListHeader>
                            <Box as="a" href={'#'} fontSize={"14px"}>
                                Terms & service
                            </Box>
                            <Box as="a" href={'#'} fontSize={"14px"}>
                                Privacy Policy
                            </Box>
                            <Box as="a" href={'#'} fontSize={"14px"}>
                                FAQ
                            </Box>
                        </Stack>
                        <Stack align={'flex-start'} >
                            <ListHeader>Customer care</ListHeader>
                            <Box as="a" href={'#'} fontSize={"14px"}>
                                2972 Westheimer Rd. Santa Ana, Illinois 85486
                            </Box>
                            <Box as="a" href={'#'} fontSize={"14px"}>
                                987654321
                            </Box>
                            <Box as="a" href={'#'} fontSize={"14px"}>
                                Tataneu Email ID
                            </Box>
                        </Stack>
                    </HStack>
                </Stack>
            </Container>
        </Box>
    );
}
