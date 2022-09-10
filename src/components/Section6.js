import React, { useRef, useEffect } from "react";

const Section6 = ({ offsetY }) => {
    
  const scrollRef = useRef();
  const sectionPosition = 4652;
  useEffect(() => {
    if (offsetY > sectionPosition) {
      let xAxisToScroll = offsetY - sectionPosition;
      scrollRef.current.scrollLeft = xAxisToScroll;
    }
  }, [offsetY]);

  const datas = [
    {
      title: "Digital Strategy",
      text: "Consumer Insights & Trends, Go-To-Market Planning, Data Science & Analvtics, Product Strategy & Roadmapping.",
    },
    {
      title: "Branding",
      text: "Brand Strategy, Brand Identity & Positioning, Visual Language, Brand Messaging, Brand Implementation & Guidelines.",
    },

    {
      title: "Web + App Development",
      text: "Technical Discovery & Architecture. Website Development, eCommerce, Mobile & Web App Development, CRM / ERM Platforms.",
    },
    {
      title: "User Experience",
      text: "We work closley with our clients to truly understand who they are, who they are speaking to, and what they want to say.",
    },
  ];

  return (
    <div className="section6" ref={scrollRef}>
      <div>
        {datas.map((data, idx) => (
          <div className="card">
            <div>
              <h2>
                {data.title} <sup>0{idx + 1}</sup>
              </h2>
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section6;
