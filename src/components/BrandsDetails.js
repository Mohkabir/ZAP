import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Betway,
  Konga,
  RelianceHmo,
  Peak,
} from "../components/Icons";

const BrandsDetails = () => {
  return (
    <div className="brands_details">
      <div className="brands">
        <div>
          <Betway color="#B5B5B5" />
        </div>
        <div>
          <Konga color="#B5B5B5" />
        </div>
        <div>
          <RelianceHmo color="#B5B5B5" />
        </div>
        <div>
          <Peak color="#B5B5B5" />
        </div>
      </div>

      <div className="details">
        <div className="">
          <div>
            <Konga color="#B5B5B5" />
          </div>
          <div>
            <p>
              "We partnered with ZAP to transform our branding from what it was
              during our first few months as a company, to what it is today
              (Seed to Series A). They were able to articulate our brand
              requirements into a perfect vision."
            </p>
            <h4>Chris Papi Chulo, Product Marketing Manager</h4>
          </div>
        </div>
        <div className="control">
          <p>01/06</p>
          <div>
            <ArrowRight color="#989898" />
            <ArrowLeft color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsDetails;
