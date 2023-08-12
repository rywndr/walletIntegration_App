import { Container, Flex, Text } from "@chakra-ui/react"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react"
import Link from "next/link"

export default function Navbar() {
  const address = useAddress()

  return (
    <Container maxW={"1080px"} py={4}>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link href={"/"}>
          <Text fontWeight={"bold"}>Wallet Integration</Text>
        </Link>
        {address && (
          <Flex flexDirection={"row"}>
            <Link href={"/"}>
              <Text mr={"8"}>Transfer</Text>
            </Link>
            <Link href={"/claim"}>
              <Text mr={"8"}>Get Token</Text>
            </Link>
            <Link href={`/accounts/${address}`}>
              <Text>Account</Text>
            </Link>
          </Flex>
        )}
        <ConnectWallet />
      </Flex>
    </Container>
  )
}
