import React, { useEffect, useState } from 'react';
import './App.css'

const App: React.FC = () => {
  const [isNighttime, setIsNighttime] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const date = new Date();
      const hours = date.getHours();

      // Define the range of hours that represent nighttime
      const startNightHour = 20; // 8 PM
      const endNightHour = 6; // 6 AM

      if (hours >= startNightHour || hours < endNightHour) {
        setIsNighttime(true);
      } else {
        setIsNighttime(false);
      }
    };

    checkTime();

    // Check the time every minute
    const intervalId = setInterval(checkTime, 60000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={isNighttime ? 'nighttime' : 'daytime'}>
      {/* Your website content */}
    </div>
  );
};

export default App;

