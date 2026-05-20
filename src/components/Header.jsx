import { Link } from 'react-router-dom';
import { FaHospitalSymbol } from 'react-icons/fa';

const Header = () => {
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
        <nav>
          <ul className="gnb">
            <li className="gnb-item">
              <Link to="/about" className="gnb-link">병원소개</Link>
              <ul className="dropdown">
                <li className="dropdown-item"><Link to="/about#greeting">대표원장 인사말</Link></li>
                <li className="dropdown-item"><Link to="/about#doctors">의료진 소개</Link></li>
                <li className="dropdown-item"><Link to="/about#location">진료시간 | 오시는길</Link></li>
                <li className="dropdown-item"><Link to="/about#equipments">보유장비</Link></li>
                <li className="dropdown-item"><Link to="/about#tour">병원 둘러보기</Link></li>
                <li className="dropdown-item"><Link to="/about#notice">공지사항</Link></li>
              </ul>
            </li>
            <li className="gnb-item">
              <Link to="/spine-joint/neck" className="gnb-link">척추·관절 클리닉</Link>
              <ul className="dropdown">
                <li className="dropdown-item"><Link to="/spine-joint/neck">목 통증</Link></li>
                <li className="dropdown-item"><Link to="/spine-joint/back">허리·골반 통증</Link></li>
                <li className="dropdown-item"><Link to="/spine-joint/shoulder">어깨 통증</Link></li>
                <li className="dropdown-item"><Link to="/spine-joint/knee">무릎 통증</Link></li>
                <li className="dropdown-item"><Link to="/spine-joint/upper-limb">상지 통증</Link></li>
                <li className="dropdown-item"><Link to="/spine-joint/foot-ankle">발·발목 통증</Link></li>
              </ul>
            </li>
            <li className="gnb-item">
              <Link to="/pain-clinic" className="gnb-link">비수술 통증 클리닉</Link>
              <ul className="dropdown">
                <li className="dropdown-item"><Link to="/pain-clinic#c-arm">C-ARM 정밀통증주사</Link></li>
                <li className="dropdown-item"><Link to="/pain-clinic#dna">조직 재생 주사치료</Link></li>
                <li className="dropdown-item"><Link to="/pain-clinic#eswt">체외충격파치료</Link></li>
                <li className="dropdown-item"><Link to="/pain-clinic#manual">맞춤형 도수치료</Link></li>
              </ul>
            </li>
            <li className="gnb-item">
              <Link to="/rehab-iv" className="gnb-link">재활·수액 클리닉</Link>
              <ul className="dropdown">
                <li className="dropdown-item"><Link to="/rehab-iv#rehab">재활치료</Link></li>
                <li className="dropdown-item"><Link to="/rehab-iv#iv">맞춤형 영양수액 클리닉</Link></li>
              </ul>
            </li>
            <li className="gnb-item">
              <Link to="/reviews" className="gnb-link">치료후기</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
