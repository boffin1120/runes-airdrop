import React, { ReactNode } from "react";
// import "@rainbow-me/rainbowkit/styles.css";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { WagmiProvider, http } from 'wagmi'
// import { mainnet } from 'wagmi/chains'
// import { RainbowKitProvider, getDefaultConfig  } from '@rainbow-me/rainbowkit'

// import { ALCHEMY_ID } from "./config"; 

interface ProvidersProps {
  children: ReactNode; 
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {

//   const config = getDefaultConfig({
//     appName: 'Runes Airdropping Tool',
//     projectId: '85ea32d265dfc865d0672c8b6b5c53d2',
//     chains: [mainnet],
//     transports: {
//       [mainnet.id]: http(),
//     },
//   })

//   const queryClient = new QueryClient()

  // return (
    // <WagmiProvider config={config}>
    //    <QueryClientProvider client={queryClient}>
    //      <RainbowKitProvider>
    //         {children}
    //       </RainbowKitProvider>
    //    </QueryClientProvider>
    //  </WagmiProvider>
  // );
  return<></>
};

export default Providers;
