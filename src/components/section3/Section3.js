import React from "react";
import "./Section3.scss";
import { Link } from "react-router-dom";

export default function Section3() {
  return (
    <section id="section3-area">
      <div className="container">
        <div className="content-wrapper">
          <div className="left-side">
            <div>
              <h2 className="light-blue">Low-latency notifications</h2>
              <h2>and on-chain execution</h2>
            </div>
            <p>
              <span className="light-blue">WhisperBot</span> collects{" "}
              <span className="light-blue">market relevant</span> news from
              top-tier sources and relays them to users directly through
              Telegram. <span className="light-blue"> Instantly </span>
              execute on-chain trades based on notifications thanks to the{" "}
              <span className="light-blue">deep liquidity</span> of Synthetix.
              <span className="light-blue"> Never miss</span> another
              news-driven candle - even when you’re on the go!
            </p>

            <Link target="blank" to="https://t.me/whisper_trading_bot/">
              {" "}
              <button className="start-trading-btn">
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
                </svg>
                Start trading
              </button>
            </Link>
          </div>
          <div className="right-side">
            <div className="btn-group">
              <button>coin listings</button>
              <button>exclusive reports</button>
              <button>curated news</button>
              <button className="light">exploits</button>
              <button className="light">influencer tweets</button>
              <button className="light">court filings</button>
              <button className="light"> SEC releases</button>
              <button>regulatory approvals</button>
              <button>project announcements</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
