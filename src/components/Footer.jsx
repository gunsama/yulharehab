import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content grid-3" style={{ gap: '40px' }}>
            <div className="footer-left">
              <div className="footer-logo">율하재활의학과의원</div>
              <p>바른 움직임이 다시 시작되는 곳, 율하재활의학과가 든든한 동행자가 되어드리겠습니다.</p>
            </div>
            <div className="footer-info">
              <p><FaMapMarkerAlt style={{ color: 'var(--color-teal)', marginRight: '5px' }} /> <span>주소</span> 대구 동구 안심로22길 40-1, 5층 (율하광장 메가커피 건물)</p>
              <p><FaClock style={{ color: 'var(--color-teal)', marginRight: '5px' }} /> <span>진료시간</span> 평일 09:00-19:00 / 토요일 09:00-13:30 (점심없음)</p>
              <p><span>점심시간</span> 13:00-14:00 (일요일 휴진)</p>
              <p><span>안내</span> 건물 앞, 뒷면 공영주차장 노란색 라인 이용 시 주차권 제공</p>
            </div>
            <div className="footer-parking" style={{ textAlign: 'center' }}>
              <img 
                src="/parking/parking.png" 
                alt="주차장 안내" 
                style={{ width: '100%', maxWidth: '300px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', cursor: 'pointer' }} 
                onClick={() => setIsModalOpen(true)}
              />
              <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '5px' }}>클릭하여 확대보기</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 율하재활의학과의원. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer'
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <img 
            src="/parking/parking.png" 
            alt="주차장 확대" 
            style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '10px' }} 
          />
        </div>
      )}
    </>
  );
};

export default Footer;
