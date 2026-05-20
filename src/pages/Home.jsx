import React from 'react';
import { Link } from 'react-router-dom';
import { FaHospitalSymbol, FaBone, FaHandHoldingMedical, FaRunning, FaSyringe, FaComments } from 'react-icons/fa';
import SpineJointGrid from '../components/SpineJointGrid';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero">
        {/* Placeholder for future video background */}
        <div className="hero-video-bg"></div>
        <div className="hero-content container">
          <h1 className="hero-title">바른 움직임이<br/><span>다시 시작되는 곳</span></h1>
          <p className="hero-subtitle" style={{ fontSize: '1.2rem', marginTop: '20px', lineHeight: '1.6' }}>
            통증 수치를 낮추는 것에 그치지 않습니다.<br/>
            정확한 진단으로 통증의 원인을 찾고, 당신에게 맞는 비수술 치료로 일상을 되돌려 드립니다.
          </p>
          <Link to="/about" className="btn btn-primary" style={{ marginTop: '30px' }}>
            율하재활의학과 소개
          </Link>
        </div>
      </section>

      {/* Quick Links / Main Clinics */}
      <section className="section section-bg-gray" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <Link to="/spine-joint/neck" className="quick-link-card">
              <img src="/icon/chiropractic.png" alt="척추·관절클리닉" className="icon-img" />
              <h3>척추·관절 클리닉</h3>
              <p>목·허리·무릎까지, 통증의 원인을 정확히 찾아 치료합니다.</p>
            </Link>
            <Link to="/pain-clinic" className="quick-link-card">
              <img src="/icon/fluoroscopy.png" alt="비수술 통증 클리닉" className="icon-img" />
              <h3>비수술 통증 클리닉</h3>
              <p>수술없이, 통증의 근본 원인부터 해결합니다.</p>
            </Link>
            <Link to="/rehab-iv" className="quick-link-card">
              <img src="/icon/blood-bag.png" alt="재활·수액 클리닉" className="icon-img" />
              <h3>재활·수액 클리닉</h3>
              <p>치료 후 완전한 회복을 위한 맞춤 재활·영양 수액 프로그램입니다.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Spine Joint Grid Section */}
      <section className="section section-bg-gray">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title">척추·관절 질환, 방치할수록 일상이 무너집니다</h2>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>통증뿐 아니라 보행·운동 제한, 자세 이상까지 — 조기 치료가 삶의 질을 지키는 가장 빠른 방법입니다.</p>
          </div>
          <SpineJointGrid />
        </div>
      </section>

      {/* Special Treatments */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="section-title">비수술 치료 특화</h2>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>율하재활의학과만의 특별한 맞춤 치료 시스템</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="treatment-card" style={{ background: '#f8f9fa', padding: '40px', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '80px', height: '80px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
                <img src="/icon/injection.png" alt="C-ARM 정밀통증주사" style={{ width: '40px' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>C-ARM 정밀통증주사</h3>
                <p style={{ color: '#666' }}>대학병원급 정밀 투시 장비를 활용하여 1mm 오차 없는 정확한 신경 치료를 시행합니다.</p>
              </div>
            </div>
            <div className="treatment-card" style={{ background: '#f8f9fa', padding: '40px', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '80px', height: '80px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
                <img src="/icon/manual.png" alt="맞춤형 도수치료" style={{ width: '40px' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>맞춤형 도수치료</h3>
                <p style={{ color: '#666' }}>전문의의 정확한 진단과 숙련된 물리치료사의 1:1 전담 수기 치료로 기능을 회복합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice & Review Summary */}
      <section className="section section-bg-gray">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.4rem' }}>공지사항</h3>
                <Link to="/about#notice" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>+ 더보기</Link>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '15px 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                  <Link to="/about#notice" style={{ color: '#333', textDecoration: 'none' }}>[안내] 공휴일 진료 시간 안내</Link>
                  <span style={{ color: '#888' }}>05.10</span>
                </li>
                <li style={{ padding: '15px 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                  <Link to="/about#notice" style={{ color: '#333', textDecoration: 'none' }}>[공지] 율하재활의학과의원 공식 블로그 오픈</Link>
                  <span style={{ color: '#888' }}>05.01</span>
                </li>
                <li style={{ padding: '15px 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                  <Link to="/about#notice" style={{ color: '#333', textDecoration: 'none' }}>[안내] 주차장 이용 및 주차권 발급 안내</Link>
                  <span style={{ color: '#888' }}>04.15</span>
                </li>
              </ul>
            </div>

            <div style={{ background: 'var(--primary-color)', padding: '30px', borderRadius: '15px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <FaComments style={{ fontSize: '3rem', marginBottom: '20px', opacity: 0.8 }} />
              <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>치료후기</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '20px', opacity: 0.9 }}>
                "모르는 부분에 의문이 생길 틈 없게 설명을 잘 해주셨어요!"<br/>
                "도수치료 받고 몸이 너무 좋아졌어요. 여기 정착했습니다♡"
              </p>
              <Link to="/reviews" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', alignSelf: 'flex-start' }}>
                치료후기 전체보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
