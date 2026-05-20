import React, { useState, useEffect } from 'react';

const interiorImages = [
  "975A0213.jpg", "975A0214.jpg", "975A0216.jpg", "975A0223.jpg", 
  "975A0232.jpg", "975A0236.jpg", "975A0241.jpg", "975A0244.jpg", 
  "975A0268.jpg", "975A0271.jpg", "975A0276.jpg", "975A0277.jpg", 
  "975A0283.jpg", "975A0287.jpg", "975A0288.jpg", "975A0291.jpg", 
  "975A0300.jpg"
];

const HospitalTour = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % interiorImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % interiorImages.length;
      visible.push(interiorImages[index]);
    }
    return visible;
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {getVisibleImages().map((img, idx) => (
          <div key={currentIndex + '-' + idx} className="img-box fade-in" style={{ borderRadius: '15px', overflow: 'hidden', height: '240px', animation: 'fadeIn 0.5s ease-in-out' }}>
            <img src={`/interior/${img}`} alt={`병원 내부 ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0.5; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default HospitalTour;
