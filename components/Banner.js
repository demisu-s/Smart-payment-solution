"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = ({
  title = "Process Payments Now",
  subTitle = "Trusted by Small Businesses Nationwide",
  img = "img/home-2/1.png",
  style = { maxWidth: "135%", transform: "translateX(5%)" },
  dark = false,
}) => {
  // Animation variants for the blue background
  const blueVariants = {
    initial: { width: "2em", left: 0 },
    hover: {
      width: "calc(100% + 2em)",
      left: 0,
      transition: { type: "spring", stiffness: 120, damping: 10 },
    },
  };

  return (
    <div className={`mil-banner mil-dissolve ${dark ? "mil-dark-2" : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="mil-banner-text">
              <h6 className="mil-text-gradient-2 mil-mb-20">{subTitle}</h6>
              <h1 className="mil-display mil-text-gradient-3 mil-mb-30">{title}</h1>
              <div className="mil-buttons-frame">
                <motion.a
                  href="register"
                  className="mil-btn btn-shadow mil-add-arrow"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    padding: "10px 20px",
                    fontSize: "1rem",
                    color: "#000",
                    backgroundColor: "#f2f2f2",
                    textDecoration: "none",
                    borderRadius: "10px",
                  }}
                  initial="initial"
                  whileHover="hover"
                  animate="initial" // Ensures it reverses to the initial state
                >
                  <motion.div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      backgroundColor: "#1a66ff",
                      borderRadius: "20px",
                      zIndex: 0,
                    }}
                    variants={blueVariants}
                  />
                  <span style={{ position: "relative", zIndex: 1 }}>
                    Start An Application
                  </span>
                </motion.a>

                <motion.a
                  href="https://www.youtube.com/watch?v=gRhoYxy9Oss"
                  className="mil-btn mil-md mil-light mil-add-play has-popup-video shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 20px",
                    fontSize: "1rem",
                    color: "#000",
                    backgroundColor: "#f0f0f0",
                    textDecoration: "none",
                    borderRadius: "5px",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Schedule A Demo
                </motion.a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mil-banner-img">
              <img src={img} alt="banner" style={style} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;






export const PageBanner = ({
  title = "More than a Platform, a Financial Revolution",
  pageName = "About us",
}) => {
  return (
    <div className="mil-banner mil-banner-inner mil-dissolve">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-8">
            <div className="mil-banner-text mil-text-center">
              <div className="mil-text-m mil-mb-20">{pageName}</div>
              <h1 className="mil-mb-60">{title}</h1>
              <ul className="mil-breadcrumbs mil-center">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <a href="#">{pageName}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
