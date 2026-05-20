import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaRunning, FaDumbbell, FaHeart, FaHeartbeat, FaCheckCircle, FaUserMd, FaShieldAlt, FaUserTie, FaSyringe, FaLightbulb, FaAppleAlt } from 'react-icons/fa';

const RehabIvClinic = () => {
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
          <h1 className="page-title">재활·수액 클리닉</h1>
          <p className="page-subtitle">수술 후 진짜 회복은 재활치료부터 시작됩니다.</p>
        </div>
      </div>

      {/* 4.1 재활치료 */}
      <section id="rehab" className="section">
        <div className="container">
          
          <div className="rehab-intro" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}>통증의 근본 원인을 바로잡는 비수술 맞춤 치료</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', maxWidth: '800px', margin: '0 auto' }}>
              도수치료는 전문의의 정확한 진단에 의거하여, 숙련된 물리치료사가 척추·관절 및 전신 근육·근막의 긴장을 이완시키고 교정하는 치료입니다.<br/>
              단순히 통증을 줄이는 데 그치지 않고, 환자분의 기능 개선을 위해 다각도로 접근합니다.<br/>
              <span style={{ fontSize: '1rem', color: '#888', marginTop: '10px', display: 'inline-block' }}>※ 치료 과정에서 굳어 있던 근육이 풀리며 일시적인 근육통이 나타날 수 있습니다.</span>
            </p>
          </div>

          <div className="rehab-effects" style={{ marginBottom: '60px' }}>
            <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px', borderBottom: '2px solid var(--primary-color)', display: 'inline-block', paddingBottom: '10px', left: '50%', position: 'relative', transform: 'translateX(-50%)' }}>도수치료를 통해 얻을 수 있는 효과</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
              <div className="effect-item" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--primary-color)' }}>I. 신체 균형 회복</h4>
                <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1.1rem', margin: 0 }}>틀어진 골격의 균형을 바로잡아 통증의 근본적인 원인을 해결합니다.</p>
              </div>
              <div className="effect-item" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--primary-color)' }}>II. 긴장된 근막 이완</h4>
                <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1.1rem', margin: 0 }}>짧아지고 긴장된 근막을 이완시켜 근육 본연의 기능을 회복합니다.<br/><span style={{fontSize: '1rem', color: '#888'}}>(근막은 전신으로 연결되어 신체 움직임 전반에 영향을 줍니다.)</span></p>
              </div>
              <div className="effect-item" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--primary-color)' }}>III. 관절 가동 범위 회복</h4>
                <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1.1rem', margin: 0 }}>수술 후 또는 스포츠 손상으로 제한된 관절의 가동 범위를 정상 수준으로 회복시킵니다.</p>
              </div>
              <div className="effect-item" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--primary-color)' }}>IV. 혈액순환 개선</h4>
                <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1.1rem', margin: 0 }}>국소 부위의 혈액순환을 원활하게 하여 전반적인 신체 컨디션 유지에 도움을 줍니다.</p>
              </div>
            </div>
          </div>

          <div className="rehab-special" style={{ background: 'var(--primary-color)', color: '#fff', padding: '50px', borderRadius: '20px', marginBottom: '60px' }}>
            <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px' }}>왜 율하재활의학과의 도수치료인가요?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <FaUserMd style={{ fontSize: '2rem', marginTop: '5px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>전문의의 정확한 진단</h4>
                  <p style={{ opacity: 0.9 }}>재활의학과 전문의가 직접 진료 및 처방합니다.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <FaShieldAlt style={{ fontSize: '2rem', marginTop: '5px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>합법적이고 안전한 치료</h4>
                  <p style={{ opacity: 0.9 }}>의료법에 명시된 기준을 철저히 준수합니다.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <FaUserTie style={{ fontSize: '2rem', marginTop: '5px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>숙련된 전담 치료사</h4>
                  <p style={{ opacity: 0.9 }}>해부학과 인체기능학에 대한 깊은 지식과 풍부한 임상 경험을 갖춘 물리치료사가 1:1로 전담합니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rehab-process">
            <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px', borderBottom: '2px solid var(--primary-color)', display: 'inline-block', paddingBottom: '10px', left: '50%', position: 'relative', transform: 'translateX(-50%)' }}>체계적인 도수치료 과정</h3>
            <div className="process-steps" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              {[
                { step: "01", title: "진단 및 평가", desc: "재활의학과 전문의의 정밀 진찰로 환자의 상태 및 통증 부위를 객관적으로 파악합니다." },
                { step: "02", title: "근육 및 근막 이완", desc: "진단 결과를 토대로, 통증을 유발하는 뭉친 근육과 근막을 부드럽게 이완시킵니다." },
                { step: "03", title: "관절 및 운동 치료", desc: "제한된 관절의 움직임을 넓히고, 약화된 근육을 강화하여 정상적인 움직임 패턴을 되찾습니다." },
                { step: "04", title: "척추 및 골반 교정", desc: "변형된 척추와 골반이 올바른 위치에서 정상적인 기능을 할 수 있도록 밸런스를 맞춥니다." }
              ].map((item, index) => (
                <div key={index} style={{ width: '250px', background: '#fff', padding: '30px 20px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center', position: 'relative', borderTop: '4px solid var(--primary-color)' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '10px' }}>STEP {item.step}</div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>{item.title}</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4.2 맞춤형 영양수액 클리닉 */}
      <section id="iv" className="section section-bg-gray">
        <div className="container">
          <div className="iv-intro" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="section-title" style={{ marginBottom: '10px' }}>맞춤형 영양수액 클리닉</h2>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '15px' }}>지친 몸과 마음에 채우는 맞춤형 에너지</h3>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>환자분의 당일 컨디션과 증상에 맞춘 1:1 영양 수액 처방으로 잃어버린 활력을 되찾아 드립니다.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <div className="iv-card" style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }}>
              <div style={{ background: '#FF9A9E', padding: '30px', textAlign: 'center', color: '#fff' }}>
                <FaAppleAlt style={{ fontSize: '3rem', marginBottom: '10px' }} />
                <h4 style={{ fontSize: '1.4rem' }}>피부 미용 & 안티에이징 수액</h4>
              </div>
              <div style={{ padding: '30px' }}>
                <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '15px', textAlign: 'center' }}>"맑고 투명한 피부, 몸속부터 시작되는 변화"</p>
                <p style={{ color: '#555', lineHeight: '1.6' }}><strong>효과:</strong> 체내에 쌓인 독성 물질을 효과적으로 배출하고, 멜라닌 색소의 활성을 억제하여 칙칙해진 피부톤을 환하게 개선해 줍니다.</p>
              </div>
            </div>

            <div className="iv-card" style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }}>
              <div style={{ background: '#A18CD1', padding: '30px', textAlign: 'center', color: '#fff' }}>
                <FaLightbulb style={{ fontSize: '3rem', marginBottom: '10px' }} />
                <h4 style={{ fontSize: '1.4rem' }}>뇌기능 향상 & 기억력 수액</h4>
              </div>
              <div style={{ padding: '30px' }}>
                <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '15px', textAlign: 'center' }}>"핸드폰 어딨지? 깜빡하는 일상에 명석함을 충전하세요"</p>
                <p style={{ color: '#555', lineHeight: '1.6' }}><strong>효과:</strong> 뇌 신경 세포를 보호하고 혈액 순환을 개선하여, 저하된 기억력을 향상시키고 집중력을 높여 치매 예방에 도움을 줍니다.</p>
              </div>
            </div>

            <div className="iv-card" style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }}>
              <div style={{ background: '#FAD0C4', padding: '30px', textAlign: 'center', color: '#333' }}>
                <FaSyringe style={{ fontSize: '3rem', marginBottom: '10px', color: '#E67E22' }} />
                <h4 style={{ fontSize: '1.4rem' }}>프리미엄 종합 아미노산 수액</h4>
              </div>
              <div style={{ padding: '30px' }}>
                <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '15px', textAlign: 'center' }}>"바쁜 일상 속, 식사만으로는 부족한 영양을 한 번에"</p>
                <p style={{ color: '#555', lineHeight: '1.6' }}><strong>효과:</strong> 우리 몸에 꼭 필요한 필수 아미노산과 고농축 영양분이 통째로 들어있어, 극심한 피로나 병후 회복기 환자의 빠른 컨디션 정상화를 돕습니다.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default RehabIvClinic;
