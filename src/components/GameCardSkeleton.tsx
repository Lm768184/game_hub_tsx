import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow={'hidden'} m={2} width="470px">
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton