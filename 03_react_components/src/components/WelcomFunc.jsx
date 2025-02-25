import React from 'react';

const WelcomFunc = ({ avatar, name, age }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const nameStyle = {
    fontSize: '24px',
    color: '#333',
  };

  const ageStyle = {
    fontSize: '18px',
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <img src={avatar} style={avatarStyle} />
      <h1 style={nameStyle}>{name}</h1>
      <h1 style={ageStyle}>{age}</h1>
    </div>
  );
};

export default WelcomFunc;