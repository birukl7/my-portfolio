import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Progress(props) {
  const [width, setWidth] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const handleScrollEnter = () => {
    setIsCounting(true);
  };

  useEffect(() => {
    if (isCounting) {
      setWidth(Number(props.percent));
    }
  }, [isCounting, props.percent]);

  return (
    <ScrollTrigger onEnter={handleScrollEnter}>
      <div className={props.class}>
        <div className="flex justify-between mb-4">
          <span className="text-base font-semibold">{props.name}</span>
          <span className="text-sm font-medium">
            <CountUp start={0} end={Number(props.percent)} duration={2} />%
          </span>
        </div>
        <div className={`w-full dark:bg-gray-200 rounded-full h-2.5 ${props.bgColor}`}>
          <div
            className={`${props.barColor} h-2.5 rounded-full`}
            style={{
              width: `${width}%`,
              transition: 'width 2s ease-in-out'
            }}
          ></div>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default Progress;
