import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <div className="page-title text-2xl font-semibold py-2 w-fit mb-4 relative">
      {title}
      <span className="under-bar absolute w-1/3 h-[2px] "></span>
    </div>
  );
};

export default PageTitle;
