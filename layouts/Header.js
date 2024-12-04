"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaCreditCard, FaCashRegister, FaTools } from "react-icons/fa"; // Using react-icons for icons

const Header = ({ dark }) => {
  const currentPath = usePathname();
  const activeMenuFunction = (value) =>
    value.some((el) => currentPath.includes(el)) ? "mil-active" : "";
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`mil-top-panel ${dark ? "mil-dark-2" : ""}`}>
      <div className="mil-mega-menu-container">
        <Link href="/" className="mil-logo">
          <img
            src={dark ? "img/logo.png" : "img/logo.png"}
            alt="Process Payments Now"
            width={145}
            height={56}
          />
        </Link>
        <nav className={`mil-top-menu ${toggle ? "mil-active" : ""}`}>
          <ul>
            <li className={`${currentPath == "/" ? "mil-active" : ""}`}>
              <Link href="/">Home</Link>
            </li>
            <li
              className={`mil-mega-menu ${activeMenuFunction(["industries"])}`}
            >
              <Link href="/industries" className="mil-menu-item">
                Industries
              </Link>
              <div className="mega-menu-content">
                <div className="mega-menu-column">
                  <h4>Retail</h4>
                  <Link href="/industries/retail" className="mil-mega-link">
                    <div className="menu-icon-container">
                      <FaCashRegister className="menu-icon" />
                    </div>
                    Overview
                  </Link>
                  <Link
                    href="/industries/retail-solutions"
                    className="mil-mega-link"
                  >
                    <div className="menu-icon-container">
                      <FaTools className="menu-icon" />
                    </div>
                    Solutions
                  </Link>
                </div>
                <div className="mega-menu-column">
                  <h4>Hospitality</h4>
                  <Link
                    href="/industries/hospitality"
                    className="mil-mega-link"
                  >
                    <div className="menu-icon-container">
                      <FaCreditCard className="menu-icon" />
                    </div>
                    Overview
                  </Link>
                  <Link
                    href="/industries/hospitality-tools"
                    className="mil-mega-link"
                  >
                    <div className="menu-icon-container">
                      <FaTools className="menu-icon" />
                    </div>
                    Tools
                  </Link>
                </div>
                <div className="mega-menu-column">
                  <h4>E-commerce</h4>
                  <Link href="/industries/ecommerce" className="mil-mega-link">
                    <div className="menu-icon-container">
                      <FaCashRegister className="menu-icon" />
                    </div>
                    Overview
                  </Link>
                  <Link
                    href="/industries/ecommerce-platforms"
                    className="mil-mega-link"
                  >
                    <div className="menu-icon-container">
                      <FaTools className="menu-icon" />
                    </div>
                    Platforms
                  </Link>
                </div>
              </div>
            </li>
            <li
              className={`mil-mega-menu ${activeMenuFunction([
                "payment-solutions",
              ])}`}
            >
              <Link href="/solutions" className="mil-menu-item">
                Solutions
              </Link>
              <div className="mega-menu-content">
                <div className="mega-menu-column">
                  <h4>Credit Card Processing</h4>
                  <Link
                    href="/solutions/credit-card-processing"
                    className="mil-mega-link"
                  >
                    <div className="menu-icon-container">
                      <FaCreditCard className="menu-icon" />
                    </div>
                    Overview
                  </Link>
                  <Link
                    href="/solutions/credit-card-fees"
                    className="mil-mega-link"
                  >
                    <div className="menu-icon-container">
                      <FaCashRegister className="menu-icon" />
                    </div>
                    Fees
                  </Link>
                </div>
                <div className="mega-menu-column">
                  <h4>ACH Payments</h4>
                  <Link
                    href="/solutions/ach-payments"
                    className="mil-mega-link"
                  >
                    <div className="menu-icon-container">
                      <FaCreditCard className="menu-icon" />
                    </div>
                    Overview
                  </Link>
                  <Link href="/solutions/ach-tools" className="mil-mega-link">
                    <div className="menu-icon-container">
                      <FaTools className="menu-icon" />
                    </div>
                    Tools
                  </Link>
                </div>
                <div className="mega-menu-column">
                  <h4>POS Systems</h4>
                  <Link href="/solutions/pos-systems" className="mil-mega-link">
                    <div className="menu-icon-container">
                      <FaCashRegister className="menu-icon" />
                    </div>
                    Overview
                  </Link>
                  <Link
                    href="/solutions/pos-hardware"
                    className="mil-mega-link"
                  >
                    <div className="menu-icon-container">
                      <FaTools className="menu-icon" />
                    </div>
                    Hardware
                  </Link>
                </div>
              </div>
            </li>
            <li className={`${activeMenuFunction(["blog"])}`}>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="mil-menu-buttons">
          <Link href="/register" className="mil-btn mil-clear">
            Log in
          </Link>
          <Link href="/apply-now" className="mil-btn mil-sm">
            Apply Now
          </Link>
          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
