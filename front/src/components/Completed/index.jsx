import React from 'react';
import '../../App.css';
import NaviBar from '../Common/NaviBar';
import ItemPanel from '../Common/ItemPanel';

const index = () => {
  return (
    <div>
      {/* <NaviBar /> */}
      <ItemPanel pageTitle="Completed Items" />
    </div>
  );
};

export default index;
