import React, { useEffect } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Reviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reviews = [
    {
      id: 1,
      author: "hp2 님",
      title: "진료의 꼼꼼함 & 친절함",
      highlight: "모르는 부분에 의문이 생길 틈 없게 설명을 잘 해주셨어요!",
      content: "남편이 꾸준히 다니던 병원인데 시댁 가는 날 다친 발목 때문에 따라갔어요. 남자 의사 선생님, 데스크 선생님, 물리치료/운동치료 선생님 어느 한 분 안 친절하신 분이 없으셨고 진료도 꼼꼼하게 잘 봐주십니다."
    },
    {
      id: 2,
      author: "yeu 님 / 달마닥 님",
      title: "뛰어난 주사 & 초음파 치료",
      highlight: "MRI 꼼꼼히 판독하시고, 초음파 보며 주사 놔주셔서 안심했습니다.",
      content: "정형외과 여러 군데 다녔는데 차도가 없어 찾았습니다. 주사 놓을 때 초음파 검사를 하며 원인을 잘 설명해 주셨고, 진단 자료를 꼼꼼히 검토하는 좋은 진료의 모습을 보여주셨습니다. 항상 느끼는 거지만 이곳 주사가 최고입니다."
    },
    {
      id: 3,
      author: "꾸고 님 / 연수짱야 님",
      title: "도수치료 & 만족도",
      highlight: "도수치료 받고 몸이 너무 좋아졌어요. 여기 정착했습니다♡",
      content: "선생님 너무 친절하시고 시설도 깨끗하고 너무 좋아요. 몇 군데 가봤는데 진료도 치료도 여기가 제일 만족스러워서 정착했어요. 서비스 수기 치료도 너무 좋았고, 원장님 덕분에 잘 걸을 수 있어서 감사합니다."
    },
    {
      id: 4,
      author: "리치 마스터 님 / sss777kkk 님",
      title: "청결함 & 배려",
      highlight: "젊으신 원장님, 환자 한 분 한 분 에너지를 다 쏟으시네요.",
      content: "여기 계시는 분들 모두 친절하시고 환자를 배려하는 마음이 보입니다. 병원이 청결하고 굉장히 깨끗해서 기분 좋게 진료받았습니다. 비용도 저렴한 것 같고 시설도 깔끔해서 좋습니다."
    }
  ];

  return (
    <div className="page-container reviews-page">
      <div className="page-header" style={{ background: 'var(--primary-color)', color: '#fff' }}>
        <div className="container">
          <h1 className="page-title" style={{ color: '#fff' }}>치료후기</h1>
          <p className="page-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>환자분들의 생생한 목소리가 율하재활의학과의 자부심입니다.</p>
        </div>
      </div>

      <section className="section section-bg-gray" style={{ minHeight: '60vh' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {reviews.map((review) => (
              <div key={review.id} style={{ 
                background: '#fff', 
                padding: '40px 30px', 
                borderRadius: '15px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                position: 'relative',
                transition: 'transform 0.3s'
              }}>
                <FaQuoteLeft style={{ position: 'absolute', top: '30px', right: '30px', fontSize: '3rem', color: '#f1f3f5', zIndex: 0 }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', color: '#f1c40f', marginBottom: '15px', fontSize: '1.2rem' }}>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  
                  <div style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '5px' }}>{review.title}</div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', lineHeight: '1.4' }}>"{review.highlight}"</h3>
                  
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '30px', fontStyle: 'italic' }}>
                    {review.content}
                  </p>
                  
                  <div style={{ borderTop: '1px solid #eee', paddingTop: '15px', textAlign: 'right', color: '#888', fontSize: '0.9rem' }}>
                    - {review.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
