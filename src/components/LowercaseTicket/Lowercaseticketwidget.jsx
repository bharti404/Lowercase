import React, { useEffect } from 'react';
import { loadFatsomaWidget } from '../../utils/loadFatsomaWidget';
import './Lowercaseticketwidget.css'

const FatsomaWidget = () => {

  
  useEffect(() => {
    loadFatsomaWidget();
  
    // Once the script loads, adjust the iframe styles
    const adjustIframeStyles = () => {


      const widgetContainer = document.querySelector('body .js-widget-wrapper');


      const testsd = document.querySelector('body js-widget-wrapper .events-list');

      console.log("fvbj kev jkv ce", testsd)


      const iframe = document.querySelector('.fatsoma-widget-iframe');

      if (widgetContainer) {
        widgetContainer.style.backgroundColor = 'black';
      }
      if (iframe) {
        console.log(" jnkgfgkkgfl ", iframe)
        iframe.style.width = '50%';
        iframe.style.maxHeight = '40vh'; // Adjust as necessary
         iframe.style.backgroundColor = 'black'; // Set background to black
      }
    };
  
    // Call adjustIframeStyles after a delay to ensure iframe loads
    setTimeout(adjustIframeStyles, 500);
  }, []);

  return (
    <div className='lowercase_events_tkt'>

      <div id="fatsoma-widget"></div>
    </div>
  );
};

export default FatsomaWidget;
