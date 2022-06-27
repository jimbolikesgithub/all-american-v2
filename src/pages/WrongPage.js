import React from 'react';
import pic from '../assets/images/404-page.png';

const WrongPage = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={pic}
          alt="404"
          style={{
            padding: '30px',
            borderRadius: '50%',
            height: '500px',
            width: '500px;',
          }}
        ></img>
      </div>
      <h1 style={{ textAlign: 'center', padding: '30px' }}>
        404 Page Not Found
      </h1>
    </div>
  );
};

export default WrongPage;
