import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const { name, age } = location.state || {};

  return (
    <div>
      <h2>Home Page</h2>
      {name && age ? (
        <p>
          Name: {name}, Age: {age}
        </p>
      ) : (
        <p>No data passed</p>
      )}
    </div>
  );
};

export default Home;
