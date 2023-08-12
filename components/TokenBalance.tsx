import { Box, Text } from "@chakra-ui/react"
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react"

type Props = {
  tokenAddress: string
}

const TokenBalance: React.FC<Props> = ({ tokenAddress }) => {
  const address = useAddress()

  const { contract } = useContract(tokenAddress)
  const { data: balance, isLoading: isbalanceLoading } = useTokenBalance(
    contract,
    address
  )

  return (
    <Box mt={4}>
      {!isbalanceLoading && <Text>Balance: {balance?.displayValue}</Text>}
    </Box>
  )
}

export default TokenBalance
