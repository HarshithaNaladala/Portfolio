import React from 'react';
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html center>
      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Loading...
      </div>
    </Html>
  );
};

export default Loader;
