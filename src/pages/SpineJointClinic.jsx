import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { diseaseData } from '../data/diseaseData';
import { FaChevronRight } from 'react-icons/fa';

const SpineJointClinic = () => {
  const { category } = useParams();
  const location = useLocation();
  const categoryInfo = diseaseData[category];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, location]);

  if (!categoryInfo) {
    return (
      <div className="page-container">
        <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h2>존재하지 않는 카테고리입니다.</h2>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>홈으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container clinic-category-page">
      <div className="page-header" style={{ padding: '80px 0', background: 'var(--primary-color)' }}>
        <div className="container">
          <h1 className="page-title" style={{ color: '#fff', marginBottom: '15px' }}>{categoryInfo.title}</h1>
          <p className="page-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
            정확한 진단으로 {categoryInfo.title}의 뿌리를 찾습니다.
          </p>
        </div>
      </div>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {categoryInfo.diseases.map((disease) => (
              <Link 
                to={`/spine-joint/${category}/${disease.id}`} 
                key={disease.id}
                style={{ textDecoration: 'none' }}
              >
                <div 
                  className="disease-card"
                  style={{
                    background: '#fff',
                    border: '1px solid #eee',
                    borderRadius: '20px',
                    padding: '40px 30px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.02)';
                    e.currentTarget.style.borderColor = '#eee';
                  }}
                >
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    color: '#333', 
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    {disease.name}
                    <FaChevronRight style={{ fontSize: '1rem', color: 'var(--primary-color)' }} />
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    lineHeight: '1.6', 
                    fontSize: '1rem',
                    marginBottom: '0',
                    flexGrow: 1
                  }}>
                    {disease.definition.length > 80 
                      ? `${disease.definition.substring(0, 80)}...` 
                      : disease.definition}
                  </p>
                  <div style={{ 
                    marginTop: '25px', 
                    color: 'var(--primary-color)', 
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>
                    자세히 보기
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f8f9fa', padding: '100px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>아직 어떤 치료가 필요한지 모르시겠나요?</h2>
          <p style={{ color: '#666', marginBottom: '40px', fontSize: '1.1rem' }}>
            걱정하지 마세요. 율하재활의학과의 전문 의료진이 환자분의 상태를 면밀히 분석하여 가장 적합한 치료 방향을 제시해 드립니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SpineJointClinic;
