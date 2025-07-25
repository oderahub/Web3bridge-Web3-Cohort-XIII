import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import dotenv from 'dotenv'

dotenv.config()

const { LISK_RPC_URL, PRIVATE_KEY } = process.env

const config: HardhatUserConfig = {
  solidity: '0.8.30',
  networks: {
    sepolia: {
      url: LISK_RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
}

export default config
