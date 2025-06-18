import React from 'react';
import '../styles/Works.css';

const Works: React.FC = () => {
  return (
    <main className="works-container">
      <img src="/logo-distort.png" alt="Graces Gallery Logo" style={{ maxWidth: '220px', width: '100%', display: 'block', margin: '0 auto', marginBottom: '10vh', marginTop: '10vh'}} />
      <div className="works-grid">
        <div className="works-item"> <img src="/works/work1.png" alt="Work 1" /> </div>
        <div className="works-item"> <img src="/works/work2.png" alt="Work 2" /> </div>
        <div className="works-item"> <img src="/works/work3.png" alt="Work 3" /> </div>
        <div className="works-item"> <img src="/works/work4.png" alt="Work 4" /> </div>
        <div className="works-item"> <img src="/works/work5.png" alt="Work 5" /> </div>
        <div className="works-item"> <img src="/works/work6.png" alt="Work 6" /> </div>
        <div className="works-item"> <img src="/works/work7.png" alt="Work 7" /> </div>
        <div className="works-item"> <img src="/works/work8.png" alt="Work 8" /> </div>
        <div className="works-item"> <img src="/works/work9.png" alt="Work 9" /> </div>
      </div>
    </main>
  );
};

export default Works;