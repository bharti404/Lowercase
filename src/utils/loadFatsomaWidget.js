// src/utils/loadFatsomaWidget.js

export const loadFatsomaWidget = () => {
  const existingScript = document.querySelector(`script[src="https://widgets.fatsoma.com/widgets/scripts/events.js"]`);

  // Only add the script if it's not already in the document
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = "https://widgets.fatsoma.com/widgets/scripts/events.js";
    script.async = true;
    script.dataset.reference = "b604fd9d-8c9d-456c-8e09-ebccb95cb010";

    document.body.appendChild(script);
  }
};
