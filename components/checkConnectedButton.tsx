import { Flex, Box, Text } from "@chakra-ui/react"

export default function CheckConnectButton() {
  return (
    <Flex minH="70vh" align="center" justify="center">
      <Box
        p="1rem"
        boxShadow="7px 7px 3px rgba(0, 0, 0, 0.6)" // Increased shadow effect
        borderRadius="10px"
        bg="#edcdc0"
        color="black"
        fontWeight="semibold"
        fontSize="medium"
        border="1px solid black"
      >
        <Text>Connect your wallet to continue.</Text>
      </Box>
    </Flex>
  )
}
