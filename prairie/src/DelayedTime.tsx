import React, { useState, useEffect } from 'react';

const DelayedTime: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const delay = 10 * 60 * 1000; // 10 minutes in milliseconds

    const updateDelayedTime = () => {
      const delayedTime = new Date(Date.now() + delay);
      const formattedTime = delayedTime.toLocaleTimeString();
      setTime(formattedTime);
    };

    const intervalId = setInterval(updateDelayedTime, 1000); // Update every second

    return () => {
      clearInterval(intervalId); // Clean up interval on component unmount
    };
  }, []);

  return <div  className="time-font">{time}</div>;
};

export default DelayedTime;

