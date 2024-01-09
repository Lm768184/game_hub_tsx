import { HStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/LegoImage.png';

const NavBar = () => {
    return (
        // ...
        <HStack>
            <Image src={logo} boxSize='60px'></Image>
            <Text>NavBar</Text>
        </HStack>
    )
}

export default NavBar