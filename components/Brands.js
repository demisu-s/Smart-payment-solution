import React, { useEffect } from "react";
import gsap from "gsap";

const Brands = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".d-flex");
    const container = document.querySelector(".d-flex");
    const containerWidth = container.offsetWidth;
    const paddingLeft = parseFloat(window.getComputedStyle(container).paddingLeft +10);
    const paddingRight = parseFloat(window.getComputedStyle(container).paddingRight +10);
    const visibleWidth = containerWidth - paddingLeft - paddingRight;

    if (items.length) {
      items.forEach((item, index) => {
        gsap.set(item, { x: containerWidth + index * 100, opacity: 1 });

        gsap.to(item, {
          x: -item.offsetWidth, 
          duration: 10 + index * 0.5, 
          ease: "linear",
          repeat: -1, 
          onUpdate: function() {
            if (this.targets()[0].getBoundingClientRect().right < paddingLeft) {
              gsap.set(this.targets()[0], {
                x: containerWidth + this.targets()[0].offsetWidth,
              });
            }
          },
        });
      });
    }
  }, []);

  return (
    <div className="mil-brands mil-p-160-80 overflow-hidden">
      <div className="container">
        <h5 className="mil-text-center mil-soft mil-mb-50 mil-up">
          Powered by industry-leading partners and technology!
        </h5>
        <div className="row d-flex">
          {["1", "2", "3", "4", "5", "6"].map((num) => (
            <div className="col-4 col-md-2 mil-text-center mil-brand" key={num}>
              <img
                src={`/img/brands/${num}.svg`}
                alt={`brand ${num}`}
                className="mil-up"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
