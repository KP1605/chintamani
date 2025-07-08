import React, { useEffect } from 'react';
import './CounterSection.css';

function CounterSection() {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <section className="counter-section">
      <div className="counter-container">
        <div className="counter-box">
          <i className="fa fa-solar-panel counter-icon"></i>
          <h3 className="counter-number" data-count="720">0</h3>
          <p>Number of installations</p>
        </div>
        <div className="counter-box">
          <i className="fa fa-leaf counter-icon"></i>
          <h3 className="counter-number" data-count="12">0</h3>
          <p>Number of sites</p>
        </div>
        <div className="counter-box">
          <i className="fa fa-globe counter-icon"></i>
          <h3 className="counter-number" data-count="12">0</h3>
          <p>Mega Watts</p>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
