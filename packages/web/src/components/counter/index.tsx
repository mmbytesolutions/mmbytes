'use client';

import React, { useState, FunctionComponent } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}

export const Counter: FunctionComponent<CounterProps> = ({
  end,
  suffix,
  delay,
  duration,
}) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp
      suffix={suffix}
      end={end}
      delay={delay}
      duration={duration}
      start={viewPortEntered ? undefined : 0}
    >
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={(isVisible: boolean) => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <span ref={countUpRef} />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};
