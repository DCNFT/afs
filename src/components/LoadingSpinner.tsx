import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div>
      <HashLoader color="#ff20e9" loading={true} size={20} />
      {/* size: 로딩 스피너의 크기, color: 색상, loading: 로딩 여부 */}
    </div>
  );
};

export default LoadingSpinner;
