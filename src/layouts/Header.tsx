import React from "react";
import WalletConnect from "../components/WalletConnectButton";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="header d-flex align-items-center">
        <div className="container container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <div className="logo">Rune•Boffin</div>
          </a>
          <nav className="navbar">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="collection.html">Collection</a></li>
              <li><a href="roadmap.html">Roadmap</a></li>
              <li><a href="blogs.html">Blogs</a></li>
              <li className="dropdown"><a href="index.html#"><span>Pages</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="blogs.html">Blogs</a></li>
                  <li><a href="blog-details.html">Blog Details</a></li>
                  <li><a href="faqs.html">FAQs</a></li>
                  <li><a href="team.html">Team</a></li>
                  <li><a href="nft-single.html">NFT Single</a></li>
                  <li><a href="404.html">404</a></li>
                  <li><a href="coming-soon.html">Comming Soon!</a></li>
                </ul>
              </li>
              <li><a href="index.html#"><img src="assets/images/icons/wallet.png" alt="icon" /> Wallet Connect</a></li>
            </ul>
          </nav>
        </div>
      </header>
  );
}
