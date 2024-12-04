import React from "react";

const Facts = () => {
  const facts = [
    {
      value: 83,
      description: "Average Monthly Savings",
    },
    {
      value: 100,
      description: "Of Users Recommend Process Payments Now",
    },
  ];

  return (
    <div className="mil-facts mil-p-160-80">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6">
            <div className="row">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className={`col-xl-6 ${
                    index === 1
                      ? "mil-sm-text-center mil-mb-80"
                      : "mil-sm-text-center mil-mb-30"
                  } mil-up`}
                >
                  <p className="h1 mil-display mil-mb-15">
                    <span
                      className="mil-accent mil-counter"
                      data-number={fact.value}
                    >
                      {fact.value}
                    </span>
                    <span className="mil-pale">%</span>
                  </p>
                  <h5>{fact.description}</h5>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-5 mil-mb-80">
            <p className="mil-text-m mil-soft mil-up">
              Process Payments Now powers businesses from all industries with
              the tools and resources they need to efficiently run their
              business. Stop focusing on time consuming processes and let our
              technology make payments easier for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
