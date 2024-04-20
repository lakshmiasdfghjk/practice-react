import React, { useState } from 'react';
import './LeftNav.css';

const LeftNav = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="left-nav">
      <button onClick={toggleAccordion}>
        {accordionOpen ? 'Close Accordion' : 'Buttons'}
      </button>
      <button onClick={toggleAccordion}>
        {accordionOpen ? 'Close Accordion' : 'Cards'}
      </button>
      <button onClick={toggleAccordion}>
        {accordionOpen ? 'Close Accordion' : 'Spinenrs'}
      </button>
      {accordionOpen && (
        <div className="accordion-content">
          <p>Accordion Content Goes Here</p>
        </div>
      )}
    </div>
  );
};

export default LeftNav;
