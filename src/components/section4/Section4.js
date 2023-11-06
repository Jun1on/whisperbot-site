import React from "react";
import "./Section4.scss";
import { Link } from "react-router-dom";

export default function Section4() {
  return (
    <section id="section4-area">
      <div className="container">
        <h2>Powered by the $WSP token</h2>
        <div className="btn-group">
          <button>100% circulating supply</button>
          <div className="double-btn">
            <button>Revenue share with holders</button>
            <button className="btn-md-show">No presale & token unlocks</button>
            <Link
              target="blank"
              to="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xFbA5aa703939238c4d03CAcbbD126Fd7107B2082"
            >
              <button className="buy-uniswap-btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M15 10.5L20 15.5L15 20.5"
                    stroke="#06050F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 4.5V11.5C4 12.5609 4.42143 13.5783 5.17157 14.3284C5.92172 15.0786 6.93913 15.5 8 15.5H20"
                    stroke="#06050F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Buy on Uniswap
              </button>
            </Link>
          </div>

          <button className="last-btn-md-none">
            No presale & token unlocks
          </button>
        </div>
      </div>
    </section>
  );
}
