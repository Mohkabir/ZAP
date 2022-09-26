import React, { useState, useRef, useEffect } from "react";
import case1 from "../assets/images/case1.png";
import case2 from "../assets/images/case2.png";
import case3 from "../assets/images/case3.png";
import case4 from "../assets/images/case4.png";
import case5 from "../assets/images/case5.png";
import {  useIsInViewport,  } from "../helpers/index";
import Section2Card from "./Section2Card";

const Section2 = ({
  issDarkMode,
  offsetY,
  check,
  beforeStickyRef,
  containerRef,
}) => {
  const isInViewport1 = useIsInViewport(check);
  const scrollRef = useRef();

  const viewRef1 = useRef();
  const viewRef2 = useRef();
  const viewRef3 = useRef();
  const viewRef4 = useRef();
  const viewRef5 = useRef();

  const [activeBg, setActiveBg] = useState();

  const isInViewport01 = useIsInViewport(viewRef1);
  const isInViewport02 = useIsInViewport(viewRef2);
  const isInViewport03 = useIsInViewport(viewRef3);
  const isInViewport04 = useIsInViewport(viewRef4);
  const isInViewport05 = useIsInViewport(viewRef5);

  useEffect(() => {
    if (isInViewport01 === true) {
      setActiveBg(1);
    }
    if (isInViewport02 === true) {
      setActiveBg(2);
    }
    if (isInViewport03 === true) {
      setActiveBg(3);
    }
    if (isInViewport04 === true) {
      setActiveBg(4);
    }
    if (isInViewport05 === true) {
      setActiveBg(5);
    }
  }, [offsetY]);


  useEffect(() => {
    if (isInViewport1 === true) {
      let xAxisToScroll = offsetY - containerRef.current.offsetTop;
      scrollRef.current.scrollLeft = xAxisToScroll;
    }
  }, [offsetY]);

  return (
    <div className="section2 sticky" ref={scrollRef}>
      <div ref={beforeStickyRef} className="card_wrapper">
        <Section2Card
          idx={1}
          issDarkMode={issDarkMode}
          title="Forric"
          text="High quality ICT solutions you can trust"
          url="/forric"
          bg={case1}
          viewRef={viewRef1}
          activeBg={activeBg}
        />
        <Section2Card
          idx={2}
          issDarkMode={issDarkMode}
          title="Nox"
          text="Exclusive indoor and outdoor lounge"
          url="/nox"
          bg={case2}
          viewRef={viewRef2}
          activeBg={activeBg}
        />
        <Section2Card
          issDarkMode={issDarkMode}
          title="Compoundcapital"
          text="Deals financing platform for Africans powered by Syndicates."
          url="/compound-capital"
          bg={case3}
          viewRef={viewRef3}
          activeBg={activeBg}
          idx={3}
        />
        <Section2Card
          issDarkMode={issDarkMode}
          title="Cubana group"
          text="Palatial ecstatic hospitality brand"
          url="/cubana-group"
          bg={case4}
          viewRef={viewRef4}
          activeBg={activeBg}
          idx={4}
        />
        <Section2Card
          issDarkMode={issDarkMode}
          title="Luxistt"
          text="Serenity away from home in apartments"
          url="/luxistt"
          bg={case5}
          viewRef={viewRef5}
          activeBg={activeBg}
          idx={5}
        />
      </div>
    </div>
  );
};

export default Section2;
