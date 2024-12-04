import Link from "next/link";
const Footer = ({ bg = true, margin = 160, footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 bg={bg} margin={margin} />;
    case 2:
      return <Footer2 bg={bg} margin={margin} />;
    case 3:
      return <Footer3 bg={bg} margin={margin} />;

    default:
      return <Footer1 bg={bg} margin={margin} />;
  }
};
export default Footer;

const Footer1 = ({ bg = true, margin = 160 }) => {
  return (
    <footer className={`${bg ? "mil-footer-with-bg" : ""} mil-p-${margin}-0 `}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <a href="#." className="mil-footer-logo mil-mb-60">
              <img
                src="img/logo.png"
                alt="Process Payments Now"
                width={174}
                height={68}
              />
            </a>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60">Learn More</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="privacy-policy">Privacy Policy</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="terms">Terms & Conditions</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="partners">Become A Partner</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="retail">Retail</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="online-payments">Online Payments</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60">Contact Us</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
                11357 Nuckols Rd Unit 2125 <br />
                Glen Allen, VA 23059
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                support@ppnhq.com
              </li>
              <li className="mil-text-m mil-soft mil-mb-10">(540) 386-0004</li>
              <li className="mil-text-m mil-soft mil-mb-10">(844) 327-6247</li>
              <li className="mil-text-m mil-soft mil-mb-5">Partner Support</li>
              <li className="mil-text-m mil-soft mil-mb-5">(866) 821-0452</li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-80">
            <h6 className="mil-mb-60">Newsletter</h6>
            <p className="mil-text-xs mil-soft mil-mb-15">
              Subscribe to get the latest news form us
            </p>
            <form id="subscribeForm" className="mil-subscripe-form-footer">
              <input
                className="mil-input"
                name="EMAIL"
                type="email"
                placeholder="Email"
                autocomplete="off"
              />
              <button type="submit">
                <i className="far fa-envelope-open mil-dark" />
              </button>
              <div className="mil-checkbox-frame mil-mt-15">
                <div className="mil-checkbox">
                  <input type="checkbox" id="checkbox" defaultChecked="" />
                  <label htmlFor="checkbox" />
                </div>
                <p className="mil-text-xs mil-soft">
                  Subscribe to get the latest news
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-soft">
                Process Payments Now is a registered ISO/MSP of Commercial Bank
                of California (Irvine, CA), Synovus Bank (Columbus, GA), PNC
                Bank (Pittsburgh, PA), FFB Bank (Fresno, CA), Westamerica Bank
                (San Rafael, CA), BMO Bank (Chicago, IL), and Citizens Bank
                (Providence, RI).
                <br />
                Process Payments Now is not a bank. Banking services are
                provided by Sutton Bank, Member FDIC.
              </p>
            </div>
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-soft">
                © 2024 Process Payments Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
const Footer3 = ({ bg = true, margin = 160 }) => {
  return (
    <footer className={`${bg ? "mil-footer-with-bg" : ""} mil-p-${margin}-0 `}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <a href="#." className="mil-footer-logo mil-mb-60">
              <img
                src="img/logo.png"
                alt="Process Payments Now"
                width={174}
                height={68}
              />
            </a>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60">Learn More</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="privacy-policy">Privacy Policy</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="terms">Terms & Conditions</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="partners">Become A Partner</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="retail">Retail</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="online-payments">Online Payments</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60">Contact Us</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
                11357 Nuckols Rd Unit 2125 <br />
                Glen Allen, VA 23059
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                support@ppnhq.com
              </li>
              <li className="mil-text-m mil-soft mil-mb-10">(540) 386-0004</li>
              <li className="mil-text-m mil-soft mil-mb-10">(844) 327-6247</li>
              <li className="mil-text-m mil-soft mil-mb-5">Partner Support</li>
              <li className="mil-text-m mil-soft mil-mb-5">(866) 821-0452</li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-80">
            <h6 className="mil-mb-60">Newsletter</h6>
            <p className="mil-text-xs mil-soft mil-mb-15">
              Subscribe to get the latest news form us
            </p>
            <form id="subscribeForm" className="mil-subscripe-form-footer">
              <input
                className="mil-input"
                name="EMAIL"
                type="email"
                placeholder="Email"
                autocomplete="off"
              />
              <button type="submit">
                <i className="far fa-envelope-open mil-dark" />
              </button>
              <div className="mil-checkbox-frame mil-mt-15">
                <div className="mil-checkbox">
                  <input type="checkbox" id="checkbox" defaultChecked="" />
                  <label htmlFor="checkbox" />
                </div>
                <p className="mil-text-xs mil-soft">
                  Subscribe to get the latest news
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-soft">
                Process Payments Now is a registered ISO/MSP of Commercial Bank
                of California (Irvine, CA), Synovus Bank (Columbus, GA), PNC
                Bank (Pittsburgh, PA), FFB Bank (Fresno, CA), Westamerica Bank
                (San Rafael, CA), BMO Bank (Chicago, IL), and Citizens Bank
                (Providence, RI).
                <br />
                Process Payments Now is not a bank. Banking services are
                provided by Sutton Bank, Member FDIC.
              </p>
            </div>
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-soft">
                © 2024 Process Payments Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className={`${bg ? "mil-footer-with-bg" : ""} mil-p-${margin}-0 `}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <a href="#." className="mil-footer-logo mil-mb-60">
              <img
                src="img/logo.png"
                alt="Process Payments Now"
                width={174}
                height={68}
              />
            </a>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60">Learn More</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="privacy-policy">Privacy Policy</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="terms">Terms & Conditions</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="partners">Become A Partner</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="retail">Retail</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="online-payments">Online Payments</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60">Contact Us</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
                11357 Nuckols Rd Unit 2125 <br />
                Glen Allen, VA 23059
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                support@ppnhq.com
              </li>
              <li className="mil-text-m mil-soft mil-mb-10">(540) 386-0004</li>
              <li className="mil-text-m mil-soft mil-mb-10">(844) 327-6247</li>
              <li className="mil-text-m mil-soft mil-mb-5">Partner Support</li>
              <li className="mil-text-m mil-soft mil-mb-5">(866) 821-0452</li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-80">
            <h6 className="mil-mb-60">Newsletter</h6>
            <p className="mil-text-xs mil-soft mil-mb-15">
              Subscribe to get the latest news form us
            </p>
            <form id="subscribeForm" className="mil-subscripe-form-footer">
              <input
                className="mil-input"
                name="EMAIL"
                type="email"
                placeholder="Email"
                autocomplete="off"
              />
              <button type="submit">
                <i className="far fa-envelope-open mil-dark" />
              </button>
              <div className="mil-checkbox-frame mil-mt-15">
                <div className="mil-checkbox">
                  <input type="checkbox" id="checkbox" defaultChecked="" />
                  <label htmlFor="checkbox" />
                </div>
                <p className="mil-text-xs mil-soft">
                  Subscribe to get the latest news
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-soft">
                Process Payments Now is a registered ISO/MSP of Commercial Bank
                of California (Irvine, CA), Synovus Bank (Columbus, GA), PNC
                Bank (Pittsburgh, PA), FFB Bank (Fresno, CA), Westamerica Bank
                (San Rafael, CA), BMO Bank (Chicago, IL), and Citizens Bank
                (Providence, RI).
                <br />
                Process Payments Now is not a bank. Banking services are
                provided by Sutton Bank, Member FDIC.
              </p>
            </div>
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-soft">
                © 2024 Process Payments Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
