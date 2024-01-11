import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa'
import { HStack, Icon } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import { MdPhoneIphone } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'

interface Props {
  platforms: Platform[]
}

const PlatformIconList = ({platforms} : Props) => {
    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        iOS: FaApple,
        macos: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        nintendo: FaAndroid,
        ios:  MdPhoneIphone,
        web: BsGlobe
    }

    return  (
        <HStack marginY={1}>
          {platforms.map((platform) => (
              <Icon as={iconMap[platform.slug]} key={platform.id} color={'black.500'} />
          ))}
        </HStack>
      )

}

export default PlatformIconList
