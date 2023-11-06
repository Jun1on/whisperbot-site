import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer-area">
      <div className="container">
        <div className="footer-content">
          <div className="item">
            <h6>Join us:</h6>
            <Link target="blank" to="https://twitter.com/WhisperTrading">
              Twitter
            </Link>
            <Link target="blank" to="https://t.me/whisper_trading_community">
              Telegram
            </Link>
          </div>
          <div className="item">
            <h6>Contact us:</h6>
            <Link to="/">hello@whisperbot.io</Link>
          </div>
          <div className="item copyright-text">
            <p>All rights reserved. ©2023 WhisperBot.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
