import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useLayoutEffect,
  useCallback,
} from "react";
export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
};

export function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
export const GetElementWidthAndHeight = (elementRef) => {
  const [offsetY, setOffsetY] = useState(0);

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    window.addEventListener("resize", getListSize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", getListSize);
    return () => window.removeEventListener("scroll", getListSize);
  }, [offsetY]);
  const getListSize = () => {
    const newWidth = elementRef.current?.clientWidth;
    setWidth(newWidth);
    const newHeight = elementRef.current?.clientHeight;
    setHeight(newHeight);
    setOffsetY(window.pageYOffset);
  };
  return { width, height };
};
export const CheckDeviceScreen = () => {
 
  const [screen, setscreen] = useState(window.innerWidth);
  let res;
  useEffect(() => {
    window.addEventListener("resize", checkScreen);
  }, [screen]);

  const checkScreen = () => {
    setscreen(window.innerWidth);
  };

  if (screen <= 768) {
    res = "mobile";
  } else if (screen > 768 && screen <= 1280) {
    res = "tablet";
  } else if (screen > 1280) {
    res = "desktop";
  }

  return res;
};
export const calculateHeight = (ref, number) => {
  const containerHeight = GetElementWidthAndHeight(ref);
  let calc;
  let windHeight = window.innerHeight;
  let windWidth = window.innerWidth;
  const arr = [
    1280, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850,
    1900, 1950, 2100, 2300, 2500, 2700, 2900, 3100, 3300,
  ];
  for (let i = 0; i < arr.length; i++) {
    if (windWidth >= arr[i] && windWidth <= arr[i + 1]) {
      if (windHeight >= 500 && windHeight <= 600) {
        calc = containerHeight.width - 900;
      } else if (windHeight >= 600 && windHeight <= 700) {
        calc = containerHeight.width - 700;
      } else if (windHeight >= 700 && windHeight <= 800) {
        calc = containerHeight.width - 500;
      } else if (windHeight >= 800 && windHeight <= 900) {
        calc = containerHeight.width - 300;
      } else if (windHeight >= 900 && windHeight <= 1000) {
        calc = containerHeight.width - 100;
      } else if (windHeight >= 1000 && windHeight <= 1100) {
        calc = containerHeight.width - 50;
      } else if (windHeight >= 1100 && windHeight <= 1300) {
        calc = containerHeight.width - 50;
      } else if (windHeight >= 1300 && windHeight <= 1400) {
        calc = containerHeight.width + 50;
      } else if (windHeight >= 1400 && windHeight <= 1500) {
        calc = containerHeight.width + 400;
      } else if (windHeight >= 1500 && windHeight <= 1600) {
        calc = containerHeight.width + 600;
      } else if (windHeight >= 1600 && windHeight <= 1700) {
        calc = containerHeight.width + 800;
      } else if (windHeight >= 1800 && windHeight <= 1900) {
        calc = containerHeight.width + 1000;
      } else if (windHeight >= 2000 && windHeight <= 2100) {
        calc = containerHeight.width + 1200;
      } else if (windHeight >= 2100 && windHeight <= 2200) {
        calc = containerHeight.width + 1400;
      } else if (windHeight >= 2200 && windHeight <= 2300) {
        calc = containerHeight.width + 1600;
      } else if (windHeight >= 2300 && windHeight <= 2400) {
        calc = containerHeight.width + 1800;
      } else if (windHeight >= 2400 && windHeight <= 2500) {
        calc = containerHeight.width + 2000;
      } else if (windHeight >= 2500 && windHeight <= 2600) {
        calc = containerHeight.width + 2200;
      } else if (windHeight >= 2600 && windHeight <= 2700) {
        calc = containerHeight.width + 2400;
      } else if (windHeight >= 2700 && windHeight <= 2800) {
        calc = containerHeight.width + 2600;
      } else if (windHeight >= 2800 && windHeight <= 2900) {
        calc = containerHeight.width + 2800;
      } else if (windHeight >= 2900 && windHeight <= 3000) {
        calc = containerHeight.width + 3000;
      } else if (windHeight >= 3000 && windHeight <= 3100) {
        calc = containerHeight.width + 3200;
      } else if (windHeight >= 3100 && windHeight <= 3200) {
        calc = containerHeight.width + 3400;
      } else if (windHeight >= 3200 && windHeight <= 3300) {
        calc = containerHeight.width + 3600;
      } else if (windHeight >= 3300 && windHeight <= 3400) {
        calc = containerHeight.width + 3800;
      } else if (windHeight >= 3400 && windHeight <= 3500) {
        calc = containerHeight.width + 4000;
      } else if (windHeight >= 3500 && windHeight <= 3600) {
        calc = containerHeight.width + 4200;
      } else if (windHeight >= 3600 && windHeight <= 3700) {
        calc = containerHeight.width + 4400;
      } else if (windHeight >= 3700 && windHeight <= 3800) {
        calc = containerHeight.width + 4600;
      } else if (windHeight >= 3800 && windHeight <= 3900) {
        calc = containerHeight.width + 4800;
      } else if (windHeight >= 3900 && windHeight <= 4000) {
        calc = containerHeight.width + 5000;
      } else if (windHeight >= 4000 && windHeight <= 4100) {
        calc = containerHeight.width + 5200;
      } else if (windHeight >= 4100 && windHeight <= 4200) {
        calc = containerHeight.width + 5400;
      } else if (windHeight >= 4200 && windHeight <= 4300) {
        calc = containerHeight.width + 5600;
      } else if (windHeight >= 4300 && windHeight <= 4400) {
        calc = containerHeight.width + 5800;
      } else if (windHeight >= 4400 && windHeight <= 4500) {
        calc = containerHeight.width + 6000;
      }
    }
  }

  if (number) {
    return calc + number + "px";
  } else {
    return calc + "px";
  }
};

const THRESHOLD = 0;
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = React.useState("up");

  const blocking = React.useRef(false);
  const prevScrollY = React.useRef(0);

  React.useEffect(() => {
    prevScrollY.current = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection =
          scrollY > prevScrollY.current ? "down" : "up";

        setScrollDirection(newScrollDirection);

        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDirection]);

  return scrollDirection;
};
