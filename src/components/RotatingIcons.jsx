import React from 'react';
import './RotatingIcons.css';
import { 
  FaBone, FaHandSparkles, FaWalking, 
  FaWheelchair, FaPersonBooth
} from 'react-icons/fa';

const iconData = [
  { id: 1, name: '척추', icon: <FaBone /> },
  { id: 2, name: '어깨', icon: <FaPersonBooth /> },
  { id: 3, name: '팔꿈치', icon: <FaHandSparkles /> },
  { id: 4, name: '손목', icon: <FaHandSparkles /> },
  { id: 5, name: '고관절', icon: <FaWheelchair /> },
  { id: 6, name: '무릎', icon: <FaWalking /> },
  { id: 7, name: '발목', icon: <FaWalking /> },
  { id: 8, name: '발바닥', icon: <FaWalking /> },
  { id: 9, name: '턱관절', icon: <FaPersonBooth /> }
];

const RotatingIcons = () => {
  // To create an infinite scroll effect, we duplicate the content
  const scrollingItems = [...iconData, ...iconData];

  return (
    <div className="rotating-icons-wrapper">
      <div className="rotating-icons-container">
        <div className="rotating-track">
          {scrollingItems.map((item, index) => (
            <div className="rotating-item" key={`${item.id}-${index}`}>
              <div className="rotating-icon-circle">
                {item.icon}
              </div>
              <span className="rotating-label">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RotatingIcons;
