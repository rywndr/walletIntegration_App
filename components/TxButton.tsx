import { Web3Button, useContract } from "@thirdweb-dev/react"
import { TRANSFER_CONTRACT_ADDRESS } from "../const/addresses"
import { ethers } from "ethers"
import { useToast } from "@chakra-ui/react"

type Props = {
  tokenAddress: string
  receiver: string
  amount: string
  message: string
}

const TxButton: React.FC<Props> = ({
  tokenAddress,
  receiver,
  amount,
  message,
}) => {
  const { contract: tokenContract } = useContract(tokenAddress, "token")

  const { contract: transferContract } = useContract(TRANSFER_CONTRACT_ADDRESS)

  const toast = useToast()

  return (
    <Web3Button
      contractAddress={TRANSFER_CONTRACT_ADDRESS}
      action={async contract => {
        await tokenContract?.setAllowance(
          TRANSFER_CONTRACT_ADDRESS,
          ethers.utils.parseEther(amount).toString()
        )

        await transferContract?.call("transfer", [
          tokenAddress,
          receiver,
          ethers.utils.parseEther(amount),
          message,
        ])
      }}
      onSuccess={() =>
        toast({
          title: "Transfer Success!",
          description: "You have successfully transferred tokens! 😎",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Transfer
    </Web3Button>
  )
}

export default TxButton
