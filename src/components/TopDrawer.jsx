import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    Flex,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function TopDrawer({ isOpen, onClose }) {
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>

                    <DrawerHeader>Tata Neu</DrawerHeader>
                    <DrawerBody>
                        <Flex lineHeight={'40px'} flexDir={'column'} textAlign={'center'} fontWeight={"600"}>
                            <Link to={'#'}>Offers</Link>
                            <Link to={'#'}>Stories</Link>
                            <Link to={'#'}>Tata Pay</Link>
                            <Link to={'#'}>NeuPass</Link>
                            <Link to={'#'} >Orders</Link>
                            <Link to={'#'} >Discounts</Link>
                            <Link to={'#'} >Sale</Link>
                        </Flex>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default TopDrawer;