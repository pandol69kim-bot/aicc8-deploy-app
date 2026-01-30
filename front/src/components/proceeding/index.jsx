import React from 'react';
import NaviBar from '../Common/NaviBar';
import ItemPanel from '../Common/ItemPanel';

const index = () => {
  return (
    <div>
      <NaviBar />
      <ItemPanel pageTitle="Incompleted Items" />
    </div>
  );
};

export default index;
