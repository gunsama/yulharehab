import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { diseaseData } from '../data/diseaseData';
import { FaChevronLeft, FaCheckCircle, FaExclamationTriangle, FaStethoscope } from 'react-icons/fa';

const DiseaseDetail = () => {
  const { category, diseaseId } = useParams();
  const navigate = useNavigate();
  const categoryData = diseaseData[category];
  const disease = categoryData?.diseases.find(d => d.id === diseaseId);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!disease) {
      // If disease not found, redirect to category page
      navigate(`/spine-joint/${category}`);
    }
  }, [disease, category, navigate]);

  if (!disease) return null;

  return (
    <div className="page-container disease-detail">
      {/* Hero Section */}
      <div className="page-header" style={{ padding: '60px 0', background: 'linear-gradient(135deg, #00796B 0%, #004D40 100%)' }}>
        <div className="container">
          <Link to={`/spine-joint/${category}`} style={{ color: 'rgba(255,255,255,0.8)', display: 'inline-flex', alignItems: 'center', marginBottom: '20px', textDecoration: 'none' }}>
            <FaChevronLeft style={{ marginRight: '8px' }} /> {categoryData.title} 목록으로
          </Link>
          <h1 className="page-title" style={{ color: '#fff', marginBottom: '15px' }}>{disease.name}</h1>
          <p className="page-subtitle" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
            {disease.definition}
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '60px', paddingBottom: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          
          {/* Symptoms Section */}
          <div style={{ background: '#f8f9fa', padding: '40px', borderRadius: '20px', border: '1px solid #eee' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
              <FaExclamationTriangle style={{ fontSize: '1.8rem', color: '#FF8F00', marginRight: '15px' }} />
              <h2 style={{ fontSize: '1.6rem', color: '#333', margin: 0 }}>주요 증상</h2>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {disease.symptoms.map((symptom, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '15px', 
                  fontSize: '1.1rem', 
                  lineHeight: '1.6',
                  color: '#444' 
                }}>
                  <FaCheckCircle style={{ color: '#00796B', marginTop: '5px', marginRight: '12px', flexShrink: 0 }} />
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          {/* Causes Section */}
          <div style={{ background: '#f8f9fa', padding: '40px', borderRadius: '20px', border: '1px solid #eee' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
              <FaStethoscope style={{ fontSize: '1.8rem', color: '#0288D1', marginRight: '15px' }} />
              <h2 style={{ fontSize: '1.6rem', color: '#333', margin: 0 }}>발생 원인</h2>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {disease.causes.map((cause, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '15px', 
                  fontSize: '1.1rem', 
                  lineHeight: '1.6',
                  color: '#444' 
                }}>
                  <div style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: '#0288D1', 
                    marginTop: '10px', 
                    marginRight: '15px', 
                    flexShrink: 0 
                  }} />
                  {cause}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stages Section (Conditional) */}
        {disease.stages && (
          <div style={{ marginTop: '40px', background: '#fff', padding: '40px', borderRadius: '20px', border: '1px solid #eee', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '1.6rem', color: '#333', marginBottom: '30px', textAlign: 'center' }}>질환 진행 단계</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {disease.stages.map((stage, index) => (
                <div key={index} style={{ textAlign: 'center', padding: '20px', background: '#f0f4f4', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.9rem', color: '#00796B', fontWeight: 'bold', marginBottom: '10px' }}>STEP 0{index + 1}</div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#333' }}>{stage.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5' }}>{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Treatment Suggestion */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '40px 60px', background: '#E0F2F1', borderRadius: '30px', maxWidth: '900px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#004D40', marginBottom: '15px' }}>율하재활의학과의 맞춤 치료 솔루션</h3>
            <p style={{ color: '#00695C', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px' }}>
              개개인의 증상과 신체 밸런스에 맞춘 1:1 비수술 치료를 통해<br />
              통증의 근본 원인을 해결하고 일상으로의 빠른 회복을 돕습니다.
            </p>
            <Link to="/pain-clinic" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem', borderRadius: '50px' }}>
              비수술 치료법 자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetail;
