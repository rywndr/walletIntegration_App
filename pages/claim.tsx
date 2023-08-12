import {
  ContractMetadata,
  MediaRenderer,
  Web3Button,
  useAddress,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react"
import {
  CLAIM_TOKEN_CONTRACT_ADDRESS,
  GET_TOKEN_IMAGE,
} from "../const/addresses"
import {
  Box,
  Text,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  useToast,
} from "@chakra-ui/react"
import CheckConnectButton from "../components/checkConnectedButton"

export default function ClaimPage() {
  const { contract } = useContract(CLAIM_TOKEN_CONTRACT_ADDRESS, "token-drop")

  const { data: contractMetadata } = useContractMetadata(contract)

  const address = useAddress()
  const claimAmount = 10
  const toast = useToast()

  return (
    <Container maxW={"1080px"} h={"80vh"}>
      {address ? (
        <SimpleGrid columns={2} spacing={10} h={"100%"}>
          <Flex>
            <MediaRenderer src={GET_TOKEN_IMAGE} height="100%" width="100%" />
          </Flex>
          <Flex flexDirection={"column"} justifyContent={"center"}>
            <Stack spacing={4}>
              <Heading fontSize={"5xl"}>Get {contractMetadata?.symbol}</Heading>

              <Text>
                GET {claimAmount} {contractMetadata?.symbol} Tokens
              </Text>
              <Box>
                <Web3Button
                  contractAddress={CLAIM_TOKEN_CONTRACT_ADDRESS}
                  action={contract => contract.erc20.claim(claimAmount)}
                  onSuccess={() =>
                    toast({
                      title: "Get Token Success!",
                      description: "You now have 10 tokens! 😎",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  Claim Token
                </Web3Button>
              </Box>
            </Stack>
          </Flex>
        </SimpleGrid>
      ) : (
        <CheckConnectButton />
      )}
    </Container>
  )
}
