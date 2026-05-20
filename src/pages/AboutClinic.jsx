import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaHospitalSymbol, FaStethoscope, FaSyringe, FaBed, FaXRay } from 'react-icons/fa';
import HospitalTour from '../components/HospitalTour';

const AboutClinic = () => {
  const [isMapZoomed, setIsMapZoomed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="page-container about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">병원 소개</h1>
          <p className="page-subtitle">환자의 바른 움직임을 위해 정성을 다하는 율하재활의학과입니다.</p>
        </div>
      </div>

      {/* 1.1 인사말 */}
      <section id="greeting" className="section section-bg-gray">
        <div className="container">
          <h2 className="section-title">대표원장 인사말</h2>
          <div className="intro-text" style={{ textAlign: 'center', lineHeight: '1.8', fontSize: '1.1rem', backgroundColor: '#ffffff', padding: '40px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <p>
              "어제까지 당연했던 일상이 오늘은 큰 숙제처럼 느껴질 때가 있습니다.<br/>
              계단을 오르는 일, 좋아하는 운동을 즐기는 일, 가족과 함께 걷는 평범한 시간들.<br/>
              통증 하나로 그 모든 것이 멈춰버렸을 때의 답답함을 저는 누구보다 잘 알고 있습니다."
            </p>
            <br/>
            <p>
              "율하재활의학과는 단순히 통증 수치를 낮추는 데 그치지 않습니다.<br/>
              정확한 진단으로 통증의 근본 원인을 찾고, 환자 한 분 한 분의 생활 습관과 신체 균형에 맞춘 1:1 맞춤형 비수술 치료를 지향합니다.<br/>
              <strong>내 가족에게 권하지 못할 치료라면 환자분께도 권하지 않겠습니다.</strong>"
            </p>
            <br/>
            <p>
              "우리의 목표는 단순하고 명확합니다.<br/>
              통증에서 벗어나 다시 활기찬 일상을 되찾으시는 것입니다.<br/>
              바른 움직임이 다시 시작되는 곳, 율하재활의학과의원이 든든한 동행자가 되겠습니다."
            </p>
          </div>
        </div>
      </section>

      {/* 1.2 의료진 소개 */}
      <section id="doctors" className="section">
        <div className="container">
          <h2 className="section-title">의료진 소개</h2>
          <div className="staff-card" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div className="staff-image" style={{ width: '300px', flexShrink: 0 }}>
              <img 
                src="/profile/doctor profile.jpg" 
                alt="김건구 대표원장" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} 
              />
            </div>
            <div className="staff-info" style={{ flex: '1', minWidth: '300px' }}>
              <h3 className="staff-name" style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--primary-color)' }}>
                김건구 <span style={{fontSize: '1rem', color: '#666', fontWeight: 'normal'}}>대표원장 / 재활의학과 전문의</span>
              </h3>
              
              <div className="staff-details" style={{ lineHeight: '1.6' }}>
                <h4 style={{ borderBottom: '2px solid var(--primary-color)', display: 'inline-block', marginBottom: '10px' }}>약력</h4>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                  <li>한양대학교병원 외래교수</li>
                  <li>한림대학교병원 재활의학과 전공의 수료</li>
                  <li>연세대학교 세브란스병원 재활의학교실 연수</li>
                  <li>인제대학교 상계백병원 재활의학교실 연수</li>
                  <li>희연재활병원 진료과장</li>
                  <li>서울공릉재활의학과의원 부원장</li>
                  <li>활기찬정형외과의원 원장</li>
                </ul>

                <h4 style={{ borderBottom: '2px solid var(--primary-color)', display: 'inline-block', marginBottom: '10px' }}>학회 및 연수</h4>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                  <li>대한 재활의학과 정회원</li>
                  <li>대한 임상통증의학회 정회원</li>
                  <li>대한 척추통증학회 정회원</li>
                  <li>대한 스포츠의학회 정회원</li>
                  <li>대한 신경근골격초음파학회 정회원</li>
                  <li>통증재활분야 전문교육과정(TPI) 이수</li>
                  <li>근골격계 초음파 전문과정 이수</li>
                </ul>

                <h4 style={{ borderBottom: '2px solid var(--primary-color)', display: 'inline-block', marginBottom: '10px' }}>논문</h4>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                  <li>Effects of the Off-Loading Brace on the Activation of Femoral Muscles -A Preliminary Study- Ann Rehabil Med. 2011</li>
                  <li>Validity of Two Kinds of Physical Activity Tracker for Measuring Total Calorie Expenditures and Activities above Moderate Intensity. Ann Rehabil Med. 2010</li>
                  <li>회전근개 전층파열 환자의 등속성 외전 운동 시 각속도에 따른 견관절 주위근 활성도 변화 (대한스포츠의학회지)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.3 진료시간 및 오시는 길 */}
      <section id="location" className="section section-bg-gray">
        <div className="container">
          <h2 className="section-title">진료 안내 및 오시는 길</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="info-box" style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: 'var(--primary-color)' }}>🕒 진료 시간</h3>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                <li><strong>평일:</strong> 오전 09:00 – 오후 07:00</li>
                <li><strong>토요일:</strong> 오전 09:00 – 오후 01:30 <br/><span style={{ color: '#e74c3c', fontSize: '0.9rem' }}>(점심시간 없이 진료)</span></li>
                <li><strong>점심시간:</strong> 오후 01:00 – 오후 02:00</li>
                <li><strong>휴진일:</strong> 일요일</li>
              </ul>
              
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', marginTop: '30px', color: 'var(--primary-color)' }}>📞 문의 및 예약</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>053-710-9975</p>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', marginTop: '30px', color: 'var(--primary-color)' }}>🚗 주차 안내</h3>
              <p>"건물 앞, 뒤면의 공영주차장(노란색 라인)을 이용해 주시면, 치료 받으신 시간에 따라 주차권을 제공해 드립니다."</p>
              <img src="/parking/parking-zoom.png" alt="주차장 상세 안내" style={{ width: '100%', marginTop: '15px', borderRadius: '8px' }} />
            </div>

            <div className="map-box" style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: 'var(--primary-color)' }}>🏥 찾아오시는 길</h3>
              <p style={{ marginBottom: '15px' }}><strong>대구광역시 동구 안심로22길 40-1, 5층 (율하동)</strong><br/>율하광장 메가커피 건물 5층</p>
              
              <div 
                className="map-container" 
                style={{ marginBottom: '20px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #ddd', cursor: 'zoom-in' }}
                onClick={() => setIsMapZoomed(true)}
              >
                <img src="/minimap/minimap.png" alt="오시는 길 미니맵" style={{ width: '100%', display: 'block', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="https://map.naver.com/p/entry/place/1373876312?lng=128.6953634&lat=35.8633916&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202605191846&locale=ko&svcName=map_pcv5&searchType=place&c=15.00,0,0,0,dh" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, textAlign: 'center', border: '1px solid #ddd' }}>
                  네이버 지도로 보기
                </a>
                <a href="https://blog.naver.com/yulharehab" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1, textAlign: 'center' }}>
                  공식 블로그 방문
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.4 보유장비 */}
      <section id="equipments" className="section">
        <div className="container">
          <h2 className="section-title">보유 장비</h2>
          
          <div className="equipment-group" style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary-color)', textAlign: 'center' }}>그룹 A: 정밀 진단 장비</h3>
            <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>환자분의 상태를 오차 없이 파악하는 첨단 진단 시스템입니다.</p>
            
            <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div className="card" style={{ padding: '0', border: '1px solid #eee', borderRadius: '15px', overflow: 'hidden' }}>
                <div style={{ height: '200px', background: '#f8f9fa' }}>
                  <img src="/equipment/엑스레이.jpg" alt="디지털 엑스레이" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ marginBottom: '10px', fontSize: '1.2rem' }}>X-RAY (디지털 엑스레이)</h4>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>척추 및 관절 질환 검사의 가장 기본적인 단계로, 골격계의 이상 유무를 빠르고 정확하게 판별합니다.</p>
                </div>
              </div>
              <div className="card" style={{ padding: '0', border: '1px solid #eee', borderRadius: '15px', overflow: 'hidden' }}>
                <div style={{ height: '200px', background: '#f8f9fa' }}>
                  <img src="/equipment/초음파기계.jpg" alt="초음파 진단기" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ marginBottom: '10px', fontSize: '1.2rem' }}>초음파 진단기</h4>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>인체의 근육, 인대, 연부 조직을 실시간으로 확인하며 정밀 진단합니다. 스포츠 손상 파악에 필수적입니다.</p>
                </div>
              </div>
              <div className="card" style={{ padding: '0', border: '1px solid #eee', borderRadius: '15px', overflow: 'hidden' }}>
                <div style={{ height: '200px', background: '#f8f9fa' }}>
                  <img src="/equipment/C-arm기계.jpg" alt="C-ARM" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ marginBottom: '10px', fontSize: '1.2rem' }}>C-ARM (투시 촬영 장치)</h4>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>뼈와 관절 부위를 실시간 투시 영상으로 확인합니다. 주사 치료 시 가이드 역할을 수행하여 정밀한 치료가 가능합니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="equipment-group">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary-color)', textAlign: 'center' }}>그룹 B: 맞춤형 회복·치료 장비</h3>
            <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>빠른 일상 복귀를 돕는 대학병원급 치료 장비입니다.</p>
            
            <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div className="card" style={{ padding: '0', border: '1px solid #eee', borderRadius: '15px', overflow: 'hidden' }}>
                <div style={{ height: '200px', background: '#f8f9fa' }}>
                  <img src="/equipment/eswt.jpg" alt="체외충격파" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ marginBottom: '10px', fontSize: '1.2rem' }}>체외충격파 (ESWT)</h4>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>충격파로 혈류를 개선하고 조직 재생을 촉진합니다. 만성 힘줄·인대 손상 회복에 탁월한 효과를 보입니다.</p>
                </div>
              </div>
              <div className="card" style={{ padding: '0', border: '1px solid #eee', borderRadius: '15px', overflow: 'hidden' }}>
                <div style={{ height: '200px', background: '#f8f9fa' }}>
                  <img src="/equipment/lazer.jpg" alt="의료용 레이저 치료기" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ marginBottom: '10px', fontSize: '1.2rem' }}>의료용 레이저 치료기</h4>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>손상 부위의 세포 재생을 촉진하고 염증을 완화합니다. 근골격계 통증의 빠른 회복을 돕습니다.</p>
                </div>
              </div>
              <div className="card" style={{ padding: '0', border: '1px solid #eee', borderRadius: '15px', overflow: 'hidden' }}>
                <div style={{ height: '200px', background: '#f8f9fa' }}>
                  <img src="/equipment/traction.jpeg" alt="척추 견인 치료기" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ marginBottom: '10px', fontSize: '1.2rem' }}>척추 견인 치료기</h4>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>척추 관절 사이를 부드럽게 넓혀 디스크 압박을 줄여줍니다. 목·허리 통증 완화에 효과적입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 병원 둘러보기 */}
      <section id="tour" className="section section-bg-gray">
        <div className="container">
          <h2 className="section-title">병원 둘러보기</h2>
          
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--primary-color)' }}>쾌적한 대기 공간 및 치료 센터</h3>
            <p style={{ marginBottom: '20px', color: '#555' }}>"내원하시는 순간부터 편안함을 느낄 수 있도록 따뜻하고 청결한 환경을 유지합니다."</p>
            <HospitalTour />
          </div>
        </div>
      </section>

      {/* 1.6 공지사항 */}
      <section id="notice" className="section">
        <div className="container">
          <h2 className="section-title">공지사항</h2>
          <div className="notice-board" style={{ maxWidth: '800px', margin: '0 auto', borderTop: '2px solid var(--primary-color)' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: '500' }}>[안내] 공휴일 진료 시간 안내</span>
                <span style={{ color: '#888' }}>2026.05.10</span>
              </li>
              <li style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: '500' }}>[공지] 율하재활의학과의원 공식 블로그 오픈</span>
                <span style={{ color: '#888' }}>2026.05.01</span>
              </li>
              <li style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: '500' }}>[안내] 주차장 이용 및 주차권 발급 안내</span>
                <span style={{ color: '#888' }}>2026.04.15</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map Zoom Modal */}
      {isMapZoomed && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'zoom-out'
          }}
          onClick={() => setIsMapZoomed(false)}
        >
          <img 
            src="/minimap/minimap.png" 
            alt="오시는 길 미니맵 확대" 
            style={{ 
              maxWidth: '90%', 
              maxHeight: '90%', 
              objectFit: 'contain', 
              borderRadius: '10px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }} 
          />
        </div>
      )}

    </div>
  );
};

export default AboutClinic;
