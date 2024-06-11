import { useState } from 'react';
import Children_Comp from './Children_Comp';

const Parent_Comp = () => {
  // Khởi tạo state
  const [selfName, setSelfName] = useState('Nguyễn Đắc Sơn');

  return (
    <div>
      <h3>Họ và tên bên component cha: {selfName}</h3>
      <Children_Comp selfName={selfName} />
    </div>
  );
};

export default Parent_Comp;
