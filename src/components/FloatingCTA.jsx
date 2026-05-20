import { FaBloggerB, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  return (
    <div className="floating-cta">
      <div className="floating-item">
        <span className="tooltip">오시는 길</span>
        <a 
          href="https://map.naver.com/p/entry/place/1373876312?lng=128.6953634&lat=35.8633916&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202605191846&locale=ko&svcName=map_pcv5&searchType=place&c=15.00,0,0,0,dh" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-btn" 
          style={{ background: '#fff' }}
        >
          <img src="/floating icon/map.png" alt="오시는 길" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
        </a>
      </div>
      <div className="floating-item">
        <span className="tooltip">네이버 블로그</span>
        <a 
          href="https://blog.naver.com/yulharehab" 
          target="_blank" 
          rel="noopener noreferrer"
          className="floating-btn"
          style={{ background: '#fff' }}
        >
          <img src="/floating icon/blog.png" alt="네이버 블로그" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
