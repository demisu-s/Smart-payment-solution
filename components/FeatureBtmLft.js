import React from "react";

const FeatureBtmLft = () => {
  const features = [
    {
      title: "Lending and Working Capital",
      description:
        "We don’t just process payments—we help your business grow. With flexible lending options and working capital solutions, we provide the funds you need to seize opportunities and keep things moving forward.",
    },
    {
      title: "Banking Services",
      description:
        "We make banking easy with same-day deposits for eligible merchants who use our payment processing. Get fast access to your funds and streamline your operations—all with one simple solution.",
    },
    {
      title: "Business Insurance",
      description:
        "We’ve got you covered with business and personal insurance through our trusted partner, Harborstone Independent Insurance. Get peace of mind knowing your business and personal assets are protected.",
    },
  ];

  return (
    <div className="mil-features mil-p-160-80">
      <div className="container">
        <div className="row flex-sm-row-reverse justify-content-between align-items-center">
          <div className="col-xl-6 mil-mb-40">
            <h2 className="mil-mb-20 mil-up">More Than Merchant Services</h2>
            <p className="mil-text-m mil-soft mil-mb-30 mil-up">
              We’re not your average merchant services provider. Along with
              smooth payment processing, we’ve got your back with lending,
              banking, and insurance—everything you need to level up your
              business, all in one place!
            </p>
            <ul className="mil-list-2">
              {features.map((feature, index) => (
                <li key={index}>
                  <div className="mil-up">
                    <h5 className="mil-mb-10">{feature.title}</h5>
                    <p className="mil-text-m mil-soft">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-xl-5 mil-mb-40">
            <div className="mil-image-wrapper mil-up">
              <div className="mil-image-frame mil-visible-overflow">
                <img
                  src="img/featuresbtmlft/1.webp"
                  alt="image"
                  className="mil-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBtmLft;
