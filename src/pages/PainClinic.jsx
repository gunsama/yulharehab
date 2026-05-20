import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSyringe, FaMedkit, FaBolt, FaHands } from 'react-icons/fa';

const PainClinic = () => {
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
    <div className="page-container clinic-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">비수술 통증 클리닉</h1>
          <p className="page-subtitle">수술 없이 통증의 근본 원인을 치료합니다.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            
            {/* 3.1 C-ARM */}
            <div id="c-arm" className="clinic-item" style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div className="clinic-image-box" style={{ width: '400px', height: '300px', borderRadius: '20px', overflow: 'hidden', flexShrink: 0 }}>
                <img src="/painclinic/975A9931.jpg" alt="C-ARM 정밀통증주사" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="clinic-content" style={{ flex: '1', minWidth: '300px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#333' }}>C-ARM 정밀통증주사</h2>
                <p style={{ fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '15px', fontSize: '1.1rem' }}>특징: 대학병원급 정밀 투시 장비 활용</p>
                <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                  <strong>치료 원리:</strong> 통증을 일으키는 척추 신경 및 각종 관절 부위를 영상 투시 장치(C-ARM)로 실시간 확인합니다.<br/> 병변을 1mm의 오차 없이 찾아내어 신경과 주변 조직의 염증 및 부종을 가라앉히는 약물을 정확하게 투여합니다.
                </p>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                  <p style={{ margin: 0, color: '#333', lineHeight: '1.6' }}>
                    💡 <strong>율하의 약속:</strong> 주사 치료의 효과는 '정확한 위치'가 결정합니다.<br/> 율하재활의학과에서는 풍부한 임상 경험을 갖춘 재활의학과 전문의 대표원장이 모든 과정을 직접 시행하여 안전하고 확실한 결과를 만듭니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 3.2 조직재생 */}
            <div id="dna" className="clinic-item" style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
              <div className="clinic-image-box" style={{ width: '400px', height: '300px', borderRadius: '20px', overflow: 'hidden', flexShrink: 0 }}>
                <img src="/painclinic/975A9959-블러처리.jpg" alt="조직 재생 주사치료" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="clinic-content" style={{ flex: '1', minWidth: '300px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#333' }}>조직 재생 주사치료 (DNA 주사치료)</h2>
                <p style={{ fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '15px', fontSize: '1.1rem' }}>특징: 인체와 가장 유사한 안전한 재생 물질</p>
                <p style={{ lineHeight: '1.8', color: '#555' }}>
                  <strong>치료 원리:</strong> DNA 유래 물질인 PDRN 성분을 손상된 연골, 인대, 힘줄에 직접 주입합니다.<br/> 단순한 통증 완화가 아닌 관절강 내 윤활 작용을 돕고, 손상된 조직의 근본적인 재생과 회복을 촉진하는 안전한 치료법입니다.
                </p>
              </div>
            </div>

            {/* 3.3 체외충격파 */}
            <div id="eswt" className="clinic-item" style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div className="clinic-image-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: '400px', flexShrink: 0 }}>
                <img src="/painclinic/975A9861.jpg" alt="체외충격파 1" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                <img src="/painclinic/975A9854.jpg" alt="체외충격파 2" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <div className="clinic-content" style={{ flex: '1', minWidth: '300px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#333' }}>체외충격파치료 (ESWT)</h2>
                <p style={{ fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '15px', fontSize: '1.1rem' }}>특징: 강력한 에너지를 통한 조직 자극 및 재생</p>
                <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px' }}>
                  <strong>치료 원리:</strong> 몸 외부에서 강력한 충격파 에너지를 손상된 근골격계에 전달합니다.<br/> 조직을 자극하여 혈류량을 급격히 증가시키고, 염증을 호전시켜 힘줄과 인대의 자가 재생을 돕습니다.
                </p>
                <p style={{ color: '#555' }}><strong>적용 질환:</strong> 테니스 엘보, 골프 엘보, 아킬레스건염, 족저근막염 등 각종 건초염 및 인대 손상</p>
              </div>
            </div>

            {/* 3.4 도수치료 */}
            <div id="manual" className="clinic-item" style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
              <div className="clinic-image-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: '400px', flexShrink: 0 }}>
                <img src="/manualtherapy/975A9819.jpg" alt="도수치료 1" style={{ width: '100%', height: '145px', objectFit: 'cover', borderRadius: '10px' }} />
                <img src="/manualtherapy/975A9847.jpg" alt="도수치료 2" style={{ width: '100%', height: '145px', objectFit: 'cover', borderRadius: '10px' }} />
                <img src="/manualtherapy/975A9886.jpg" alt="도수치료 3" style={{ width: '100%', height: '145px', objectFit: 'cover', borderRadius: '10px' }} />
                <img src="/manualtherapy/975A9835.jpg" alt="도수치료 4" style={{ width: '100%', height: '145px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <div className="clinic-content" style={{ flex: '1', minWidth: '300px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#333' }}>맞춤형 도수치료</h2>
                <p style={{ fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '15px', fontSize: '1.1rem' }}>특징: 해부학적 지식에 기반한 전문 수기 치료</p>
                <p style={{ lineHeight: '1.8', color: '#555' }}>
                  <strong>치료 원리:</strong> 숙련된 전담 도수치료사가 굳어있는 관절의 가동 범위를 정상화하고, 통증 부위의 근막과 근육을 섬세하게 이완시켜 기능을 회복하는 효과적인 비수술 치료입니다.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PainClinic;
