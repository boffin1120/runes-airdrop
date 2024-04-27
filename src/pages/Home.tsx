import React from "react";

type Props = {};

export default function Home({}: Props) {
  return <div>
      <section id="hero" className="hero d-flex">
        <div className="image-main-wrapper">
          <img className="hero-main-image" src="assets/images/hero-bg.jpg" alt="image" />
        </div>
        <div className="image-overlay"></div>
        <div className="container position-relative d-flex align-items-center justify-content-center">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12 order-lg-1 d-flex flex-column align-items-center justify-content-center text-center caption">
              <h2>Rune's Service <br />Tools</h2>
              <h3>Crypto Club is a collection of 10,000 unique Bored Ape NFTs</h3>
                <a href="index.html#call-to-action" className="btn-get-started" >View On Opensea</a>
              </div>
            </div>
          </div>
          <img className="ape-fixed" src="/assets/images/rune-stone.png" alt="" />
      </section>
  </div>;
}
