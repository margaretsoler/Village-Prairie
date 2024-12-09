import React, { useEffect, useState } from 'react';

const TimeDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Use 24-hour military time
    timeZone: 'Europe/Paris', // Set the time zone to French time zone
  };

  return (
    <div className="time-display">
      {currentTime.toLocaleTimeString('fr-FR', options)}
    </div>
  );
};

export default TimeDisplay;
