import React, { useState, useRef, useEffect } from "react";
import { useIsInViewport } from "../helpers/index";

const Section6 = ({
  offsetY,
  issDarkMode,
  check2,
  beforeStickyRef2,
  containerRef2,
}) => {
  const isInViewport1 = useIsInViewport(check2);
  const scrollRef = useRef();

  useEffect(() => {
    if (isInViewport1 === true) {
      let xAxisToScroll = offsetY - containerRef2.current.offsetTop;
      scrollRef.current.scrollLeft = xAxisToScroll;
    }
  }, [offsetY]);

  const datas = [
    {
      title: "Branding ",
      text: "Brand Strategy, Brand Identity & Positioning, Visual Language, Brand Messaging, Brand Implementation & Guidelines.",
    },
    {
      title: "Digital ",
      title2: "Strategy ",
      text: "Consumer Insights & Trends, Go-To-Market Planning, Data Science & Analvtics, Product Strategy & Roadmapping.",
    },
    {
      title: "Product ",
      title2: "Design ",

      text: "We work closley with our clients to truly understand who they are, who they are speaking to, and what they want to say.",
    },
    {
      title: "Web + App ",
      title2: "Development ",

      text: "Technical Discovery & Architecture. Website Development, eCommerce, Mobile & Web App Development, CRM / ERM Platforms.",
    },
  ];

  return (
    <div className="section6">
      <div className="box_wrapper">
        <div className={`box1 ${!issDarkMode && "box1_Light"}`}>
          <h2>
            We shape the products and services that improve the lives of
            thousands every single day.
          </h2>
        </div>
        <div className="box2" ref={scrollRef}>
          <div className="card_wrapper" ref={beforeStickyRef2}>
            {datas.map((data, idx) => (
              <div className="card">
                <div>
                  <h2>
                    {data.title} {!data?.title2 && <sup> 0{idx + 1}</sup>}
                    <br />
                    {data?.title2}
                    {data?.title2 && <sup> 0{idx + 1}</sup>}
                  </h2>
                  <p>{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
