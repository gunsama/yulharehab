import React from 'react';

const SpineJointGrid = () => {
  const categories = [
    { name: '척추 (목·등·허리)', icon: '/icon/back pain.png', text: '척추 협착증, 허리/목 디스크, 급성 통증, 후관절 증후군, 거북목, 척추 측만증' },
    { name: '어깨 관절', icon: '/icon/shoulder pain.png', text: '회전근개 손상, 어깨 충돌증후군, 석회성 힘줄염, 어깨 수술 후 재활' },
    { name: '팔꿈치 관절', icon: '/icon/elbow pain.png', text: '테니스/골프 엘보, 주관 증후군, 후골간 신경 증후군, 관절염, 수술 후 재활' },
    { name: '손목 관절', icon: '/icon/wrist pain.png', text: '손목 터널 증후군, 삼각섬유연골(TFCC) 손상, 건초염, 관절염, 수술 후 재활' },
    { name: '고관절', icon: '/icon/hip pain.png', text: '대전자/좌골 점액낭염, 고관절 퇴행성 관절염, 대퇴비구 충돌증후군' },
    { name: '무릎 관절', icon: '/icon/knee pain.png', text: '무릎 퇴행성 관절염, 활액막염, 연골 연화증, 대퇴슬개동통증후군, 슬개건염, 수술 후 재활' },
    { name: '발목 관절', icon: '/icon/ankle pain.png', text: '발목 인대 손상, 아킬레스건염, 퇴행성 관절염, 족근동 증후군, 수술 후 재활' },
    { name: '발바닥 통증', icon: '/icon/foot pain.png', text: '족저근막염, 지간신경종, 중족골통, 종자골염' },
    { name: '턱관절', icon: '/icon/jaw pain.png', text: '턱관절 통증' }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', padding: '20px 0' }}>
      {categories.map((cat, index) => (
        <div key={index} style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '15px',
          background: '#f8f9fa',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #eee'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            flexShrink: 0,
            background: '#fff',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ddd',
            padding: '10px'
          }}>
            <img src={cat.icon} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#333', marginBottom: '8px', fontWeight: 'bold' }}>{cat.name}</h4>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.4', margin: 0 }}>{cat.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpineJointGrid;
