import React, { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Lowercaseticketwidget.css';

const FatsomaWidget = () => {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    // Copy the ref's current value to a local variable
    const container = widgetContainerRef.current;
  
    if (container) {
      const script = document.createElement('script');
      script.src = 'https://widgets.fatsoma.com/widgets/scripts/events.js';
      script.async = true;
      script.dataset.reference = 'b604fd9d-8c9d-456c-8e09-ebccb95cb010';
  
      container.appendChild(script);
    }
  
    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = ''; // Clear content
      }
    };
  }, []);
  

  // Define handleDone and handleType functions
  const handleDone = () => {
    console.log('Typewriter effect completed!');
  };

  const handleType = (word) => {
    console.log('Currently typing:', word);
  };

  return (
    <div className='fatsoma_tkt_widget'>
      <div className="tkt_events_wdgts_top">
        <div className="tkt_events_wdgts_top_left">
          <p className="tkt_event_wdgt_btn">EVENTS THIS WEEK</p>
        </div>

        <div className="tkt_events_wdgts_top_right">
  
          <Typewriter
            words={[ 'see our full event schedule here!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}

          />
        </div>
      </div>

      {/* Fatsoma widget container */}
      <div className='fatsoma_tkt_wgt_main' ref={widgetContainerRef}></div>
    </div>
  );
};

export default FatsomaWidget;
