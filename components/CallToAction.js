import Link from "next/link";

export const CallToAction1 = () => {
  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-visible mil-image mil-illustration-fix mil-p-160-0">
          <div className="row align-items-end">
            <div className="mil-text-center">
              <h2 className="mil-mb-20 mil-light mil-up">
                Discover the Difference When You Switch <br></br>
                To Process Payments Now
              </h2>
              <p className="mil-text-m mil-light mil-mb-80 mil-up">
                At Process Payments Now, we empower our clients with better
                payment solutions.<br></br>
                Learn more about the power of Procss Payments Now today!
              </p>
              <div className="mil-up mil-mb-20">
                <Link
                  href="/register"
                  className="mil-btn mil-button-transform mil-md mil-add-arrow"
                >
                  Schedule A Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="mil-illustration-absolute mil-type-2 mil-up">
            <img src="/img/cta/1.webp" alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CallToAction2 = () => {
  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-visible mil-image mil-illustration-fix mil-p-160-0">
          <div className="row align-items-center justify-content-center">
            <div className="mil-text-center">
              {/* New white container for form and text */}
              <div className="mil-form-container">
                <h2 className="mil-mb-10 mil-light mil-up mil-header-text">
                  Get Started Today
                </h2>
                <p className="mil-text-m mil-light mil-mb-30 mil-up mil-header-text">
                  At Process Payments Now, we empower our clients with better
                  payment solutions.
                  <br />
                  Learn more about the power of Process Payments Now today!
                </p>
                <form
                  id="callbackForm"
                  className="mil-subscribe-form mil-text-center"
                >
                  <input
                    className="mil-input mil-mb-15"
                    name="NAME"
                    type="text"
                    placeholder="Full Name"
                    autoComplete="off"
                    required
                  />
                  <input
                    className="mil-input mil-mb-15"
                    name="BUSINESS_NAME"
                    type="text"
                    placeholder="Business Name"
                    autoComplete="off"
                    required
                  />
                  <div
                    className="mil-input-group mil-mb-15"
                    style={{ display: "flex", gap: "15px" }}
                  >
                    <input
                      className="mil-input"
                      name="PHONE"
                      type="tel"
                      placeholder="Phone Number"
                      autoComplete="off"
                      required
                      style={{ flex: "1" }}
                    />
                    <input
                      className="mil-input"
                      name="EMAIL"
                      type="email"
                      placeholder="Email"
                      autoComplete="off"
                      required
                      style={{ flex: "1" }}
                    />
                  </div>
                  <button type="submit" className="mil-btn mil-sm">
                    Learn More
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="mil-illustration-absolute mil-type-2 mil-up">
            <img src="/img/cta/1.webp" alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};
