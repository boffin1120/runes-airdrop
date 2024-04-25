import "@rainbow-me/rainbowkit/styles.css";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { RainbowKitProvider, getDefaultConfig  } from '@rainbow-me/rainbowkit'

import { ALCHEMY_ID } from "./config"; // Ensure the path is correct as per your project structure

// Defining the type for props that `Providers` component will accept
interface ProvidersProps {
  children: ReactNode; // More specific type for children
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {

  // const { chains, provider } = configureChains(
  //   [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  //   [alchemyProvider({ alchemyId: ALCHEMY_ID }), publicProvider()]
  // );

  // const { connectors } = getDefaultWallets({
  //   appName: "Runes Airdropping Tool",
  //   chains
  // });

  // const wagmiClient = createClient({
  //   autoConnect: true,
  //   connectors,
  //   provider
  // });

  const config = getDefaultConfig({
    appName: 'Runes Airdropping Tool',
    projectId: '85ea32d265dfc865d0672c8b6b5c53d2',
    chains: [mainnet],
    transports: {
      [mainnet.id]: http(),
    },
  })

  const queryClient = new QueryClient()

  return (
    <WagmiProvider config={config}>
       <QueryClientProvider client={queryClient}>
         <RainbowKitProvider>
            {children}
          </RainbowKitProvider>
       </QueryClientProvider>
     </WagmiProvider>
  );
};

export default Providers;
