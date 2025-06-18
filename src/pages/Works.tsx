import React from 'react';

const Works: React.FC = () => {
  return (
    <main className="works-container">
      <img src="/logo-distort.png" alt="Graces Gallery Logo" style={{ maxWidth: '220px', width: '100%', display: 'block', margin: '0 auto', marginBottom: '10vh', marginTop: '10vh'}} />
      <div className="works-grid">
        {/* <div className="works-item">
          <img src="/works/work1.jpg" alt="Work 1" />
        </div>
        <div className="works-item">
          <img src="/works/work2.jpg" alt="Work 2" />
        </div>
        <div className="works-item">
          <img src="/works/work3.jpg" alt="Work 3" />
        </div> */}
      </div>
    </main>
  );
};

export default Works; 