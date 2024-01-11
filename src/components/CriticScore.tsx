import { Badge } from '@chakra-ui/react';
import { getCroppedImageUrl } from '../services/image-url';

interface Props {
    score: number;
    background_image: string;
    }

const CriticScore = ({score, background_image} : Props) => {
    const  color = score >= 90 ? 'grey' : score >= 75 ? 'yellow' : 'red'

  return (
    <>
    <Badge borderRadius={"4"} fontSize={15} paddingX={2} color={color} >{score} </Badge>
    </>
  )
}

export default CriticScore