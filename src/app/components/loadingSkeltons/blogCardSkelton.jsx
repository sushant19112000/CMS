import React from 'react';

export const BlogCardSkeleton = () => {
  return (
    <div className="col-11 col-md-6 col-lg-4 mb-3">
      <div className="card rounded ms-2 ms-md-0" style={{ margin: 0, border: "0", padding: 0, backgroundColor: 'transparent' }}>
        <div className="blogimg rounded skeleton" style={{ width: '100%', height: '250px', backgroundColor: '#e0e0e0' }}></div>
        <div className="mt-2 mb-1">
          <div className="skeleton" style={{ width: '80%', height: '12px', backgroundColor: '#e0e0e0' }}></div>
        </div>
        <div className="">
          <div className="skeleton" style={{ width: '100%', height: '16px', backgroundColor: '#e0e0e0' }}></div>
        </div>
      </div>
    </div>
  );
};


