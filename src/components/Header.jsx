import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHospitalSymbol, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveAccordion(null);
  };

  const handleMenuClick = (e, index, hasDropdown) => {
    if (window.innerWidth <= 1024 && hasDropdown) {
      e.preventDefault();
      e.stopPropagation();
      setActiveAccordion(activeAccordion === index ? null : index);
    } else if (!hasDropdown) {
      closeMenu();
    }
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          textDecoration: 'none',
          color: 'inherit'
        }}>
          {/* 가지고 계신 통합 로고(로고+텍스트) png 파일을 public/logo 폴더에 main-logo.png 로 저장해주세요. */}
          <img
            src="/logo/main-logo.png"
            alt="율하재활의학과의원 통합 로고"
            style={{
              height: '65px', // 필요에 따라 높이를 조정하세요
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </Link>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isMobileMenuOpen && (
          <div 
            className="mobile-overlay" 
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}

        <nav>
          <ul className={`gnb ${isMobileMenuOpen ? 'open' : ''}`}>
            <li className="gnb-item">
              <Link to="/about" className="gnb-link" onClick={(e) => handleMenuClick(e, 0, true)}>
                병원소개 <span className="mobile-chevron">{activeAccordion === 0 ? '▲' : '▼'}</span>
              </Link>
              <ul className={`dropdown ${activeAccordion === 0 ? 'active' : ''}`}>
                <li className="dropdown-item"><Link to="/about#greeting" onClick={closeMenu}>대표원장 인사말</Link></li>
                <li className="dropdown-item"><Link to="/about#doctors" onClick={closeMenu}>의료진 소개</Link></li>
                <li className="dropdown-item"><Link to="/about#location" onClick={closeMenu}>진료시간 | 오시는길</Link></li>
                <li className="dropdown-item"><Link to="/about#equipments" onClick={closeMenu}>보유장비</Link></li>
                <li className="dropdown-item"><Link to="/about#tour" onClick={closeMenu}>병원 둘러보기</Link></li>
                <li className="dropdown-item"><Link to="/notice" onClick={closeMenu}>공지사항</Link></li>
              </ul>
            </li>
            <li className="gnb-item">
              <Link to="/spine-joint/neck" className="gnb-link" onClick={(e) => handleMenuClick(e, 1, true)}>
                척추·관절 클리닉 <span className="mobile-chevron">{activeAccordion === 1 ? '▲' : '▼'}</span>
              </Link>
              <ul className={`dropdown ${activeAccordion === 1 ? 'active' : ''}`}>
                <li className="dropdown-item"><Link to="/spine-joint/neck" onClick={closeMenu}>목 통증</Link></li>
                <li className="dropdown-item"><Link to="/spine-joint/back" onClick={closeMenu}>허리·골반 통증</Link></li>
                <li className="dropdown-item"><Link to="/spine-joint/shoulder" onClick={closeMenu}>어깨 통증</Link></li>
                <li className="dropdown-item"><Link to="/spine-joint/knee" onClick={closeMenu}>무릎 통증</Link></li>
                <li className="dropdown-item"><Link to="/spine-joint/upper-limb" onClick={closeMenu}>상지 통증</Link></li>
                <li className="dropdown-item"><Link to="/spine-joint/foot-ankle" onClick={closeMenu}>발·발목 통증</Link></li>
              </ul>
            </li>
            <li className="gnb-item">
              <Link to="/pain-clinic" className="gnb-link" onClick={(e) => handleMenuClick(e, 2, true)}>
                비수술 통증 클리닉 <span className="mobile-chevron">{activeAccordion === 2 ? '▲' : '▼'}</span>
              </Link>
              <ul className={`dropdown ${activeAccordion === 2 ? 'active' : ''}`}>
                <li className="dropdown-item"><Link to="/pain-clinic#c-arm" onClick={closeMenu}>C-ARM 정밀통증주사</Link></li>
                <li className="dropdown-item"><Link to="/pain-clinic#dna" onClick={closeMenu}>조직 재생 주사치료</Link></li>
                <li className="dropdown-item"><Link to="/pain-clinic#eswt" onClick={closeMenu}>체외충격파치료</Link></li>
                <li className="dropdown-item"><Link to="/pain-clinic#manual" onClick={closeMenu}>맞춤형 도수치료</Link></li>
              </ul>
            </li>
            <li className="gnb-item">
              <Link to="/rehab-iv" className="gnb-link" onClick={(e) => handleMenuClick(e, 3, true)}>
                재활·수액 클리닉 <span className="mobile-chevron">{activeAccordion === 3 ? '▲' : '▼'}</span>
              </Link>
              <ul className={`dropdown ${activeAccordion === 3 ? 'active' : ''}`}>
                <li className="dropdown-item"><Link to="/rehab-iv#rehab" onClick={closeMenu}>재활치료</Link></li>
                <li className="dropdown-item"><Link to="/rehab-iv#iv" onClick={closeMenu}>맞춤형 영양수액 클리닉</Link></li>
              </ul>
            </li>
            <li className="gnb-item">
              <Link to="/reviews" className="gnb-link" onClick={(e) => handleMenuClick(e, 4, false)}>치료후기</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
