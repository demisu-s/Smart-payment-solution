import Link from "next/link";
import { FaPiggyBank, FaHandshake, FaRocketchat } from "react-icons/fa";

const TriFold = () => {
  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-visible mil-image mil-p-160-130">
          <div className="row align-items-end">
            <div className="col-xl-8 mil-mb-40-adaptive-30">
              <h2 className="mil-up mil-light">
                We empower businesses with payment technology
              </h2>
            </div>
            <div className="col-xl-4 mil-mb-40 mil-up">
              <Link
                href="/services"
                className="mil-btn mil-m mil-add-arrow mil-adaptive-right"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="row">
            {[
              {
                href: "/about",
                icon: <FaPiggyBank size={68} className="mil-icon" />,
                title: "Powering Local Business Growth",
                description:
                  "We are more than just a payment processor; it's a driving force behind local business success. Understanding the unique dynamics and challenges of community enterprises, we offer tailored solutions, mentorship, and resources that empower our clients to thrive.",
              },
              {
                href: "/career",
                icon: <FaHandshake size={68} className="mil-icon" />,
                title: "Building Stronger Relationships",
                description:
                  "We deeply value our clients, recognizing that every business is unique with distinct challenges and aspirations. Rather than simply closing a deal, we invest time in understanding and aligning with the individual needs of each client.",
              },
              {
                href: "/pricing",
                icon: <FaRocketchat size={68} className="mil-icon" />,
                title: "Creating Opportunities For Communities",
                description:
                  "We are a catalyst for community transformation. Beyond facilitating seamless financial transactions, we are passionately committed to revitalizing America by forging partnerships with local community organizations and initiatives.",
              },
            ].map((item, index) => (
              <div key={index} className="col-xl-4 mil-mb-30">
                <Link
                  href={item.href}
                  className="mil-icon-box mil-center mil-hover"
                >
                  <div className="mil-content-container">
                    <div className="mil-icon">{item.icon}</div>
                    <h5 className="mil-mb-10 mil-light mil-up">{item.title}</h5>
                    <p className="mil-text-m mil-light mil-mb-10 mil-up">
                      {item.description}
                    </p>
                    <div className="mil-info-link mil-up">More Information</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriFold;
