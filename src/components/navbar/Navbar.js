import React, { useState } from "react";
import "./Navbar.scss";
import { Offcanvas } from "react-bootstrap";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="navbar">
      <div className="container">
        <div className="content-wrapper">
          <Link to="/">
            {" "}
            <div className="logo">
              <img src="assets/logo.png" alt="" />
              <span>
                Whisper<span className="light-blue">Bot</span>
              </span>
            </div>
          </Link>

          <nav className="nav-items">
            <ul>
              <li>
                <Link target="blank" to="https://t.me/whisper_trading_bot/">
                  Start trading
                </Link>
              </li>
              <li>
                <Link
                  className="gd-color"
                  target="blank"
                  to="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xFbA5aa703939238c4d03CAcbbD126Fd7107B2082
"
                >
                  Buy $WSP
                </Link>
              </li>
              <li>
                <Link target="blank" to="https://docs.whispertrading.io">
                  Docs
                </Link>
              </li>
              <li>
                <Link to="/">Rewards (Coming Soon)</Link>
              </li>
            </ul>
          </nav>

          {/* small device  */}
          <div className="small-device">
            <HiMenuAlt3 size={28} color="white" onClick={handleShow} />
            <>
              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                  <AiOutlineCloseCircle
                    size={28}
                    color="white"
                    onClick={handleClose}
                  />
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <nav>
                    <ul className="m-0 p-0">
                      <li>
                        <Link
                          target="blank"
                          to="https://t.me/whisper_trading_bot/"
                        >
                          Start trading
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="gd-color"
                          target="blank"
                          to="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xFbA5aa703939238c4d03CAcbbD126Fd7107B2082
"
                        >
                          Buy $WSP
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="blank"
                          to="https://docs.whispertrading.io"
                        >
                          Docs
                        </Link>
                      </li>
                      <li>
                        <Link to="/">Rewards (Coming Soon)</Link>
                      </li>
                    </ul>
                  </nav>
                </Offcanvas.Body>
              </Offcanvas>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
