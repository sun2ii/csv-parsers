import React from 'react';

const HomePage = () => {
  const startProductTour = () => {
      window.CommandBar.trackEvent('start-product-tour', { step: 'clicked-button' });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <button onClick={startProductTour}>Click me to see a quick tour</button>
    </div>
  );
};

export default HomePage;