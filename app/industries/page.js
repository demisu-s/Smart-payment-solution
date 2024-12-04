import Banner from "@/components/Banner";
import { CallToAction1 } from "@/components/CallToAction";
import Testimonials1 from "@/components/Testimonials";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import TriFold from "@/components/TriFold";
import Brands from "@/components/Brands";
import Quote2 from "@/components/Quote";
import FeatureBtmLft from "@/components/FeatureBtmLft";
import Facts from "@/components/Facts";

const page = () => {
  return (
    <PlaxLayout bg={false} margin={0}>
      <Banner
        title="Tailored To Meet Your Business Needs"
        subTitle="Discover The Ideal Solutions"
        img="img/home-3/1.png"
        style={{ maxWidth: "100%" }}
      />
      <Facts />
      <TriFold />
      <Quote2 />
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-bg-1 mil-p-160-160">
            <div className="row justify-content-center">
              <div className="col-xl-7 mil-relative">
                <Testimonials1 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeatureBtmLft />
      <Brands />
      <CallToAction1 />
    </PlaxLayout>
  );
};
export default page;
