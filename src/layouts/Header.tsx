import React from "react";
import WalletConnect from "../components/WalletConnectButton";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex justify-between align-middle px-10 py-4">
      <a href="/">
        <h2 className="uppercase text-white text-2xl font-bold">arcus btc</h2>
      </a>
      <WalletConnect />
    </div>
  );
}
