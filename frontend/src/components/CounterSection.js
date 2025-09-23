import React, { useEffect, useState } from 'react';
import './CounterSection.css';

function Counter({ icon, target, text }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const speed = 200; // higher = slower
    const increment = Math.ceil(target / speed);

    const updateCounter = () => {
      start += increment;
      if (start < target) {
        setCount(start);
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    updateCounter();
  }, [target]);

  return (
    <div className="counter-box">
      <i className={`fa ${icon} counter-icon`}></i>
      <h3 className="counter-number">{count}</h3>
      <p>{text}</p>
    </div>
  );
}

function CounterSection() {
  return (
    <section className="counter-section">
      <div className="counter-container">
        <Counter icon="fa-solar-panel" target={720} text="Number of installations" />
        <Counter icon="fa-leaf" target={12} text="Number of sites" />
        <Counter icon="fa-globe" target={12} text="Mega Watts" />
      </div>
    </section>
  );
}

export default CounterSection;
