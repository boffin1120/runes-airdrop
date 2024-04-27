import React from "react";
import WalletConnect from "../components/WalletConnectButton";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="header d-flex align-items-center">
        <div className="container container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <div className="logo"> <img src="assets/images/rune-stone.png" alt="" /> Rune•Boffin</div>
          </a>
          <nav className="navbar">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="collection.html">Mint</a></li>
              <li><a href="roadmap.html">Etch</a></li>
              <li><a href="blogs.html">Bridge</a></li>
              <li><a href="blogs.html">Airdrop</a></li>
              <li><a href="index.html#"><img src="assets/images/icons/wallet.png" alt="icon" /> Wallet Connect</a></li>
            </ul>
          </nav>
        </div>
      </header>
  );
}
