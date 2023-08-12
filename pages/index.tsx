import { NextPage } from "next"
import { Container, Flex, Text, Box } from "@chakra-ui/react"
import TransferCard from "../components/TransferCard"
import CheckConnectButton from "../components/checkConnectedButton"
import { useAddress } from "@thirdweb-dev/react"
import Events from "../components/Events"

const Home: NextPage = () => {
  const address = useAddress()

  return (
    <Container maxW={"1080px"} py={4}>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {address ? (
          <>
            <TransferCard />
            <Events />
          </>
        ) : (
          <CheckConnectButton />
        )}
      </Flex>
    </Container>
  )
}

export default Home
