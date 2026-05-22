import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getNotice, isAdminLoggedIn, deleteNotice } from '../utils/noticeStore';
import '../styles/Notice.css';

const NoticeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 공지사항 데이터 불러오기 (조회수 증가 포함)
    const data = getNotice(id);
    if (!data) {
      alert('존재하지 않는 공지사항입니다.');
      navigate('/notice');
      return;
    }
    
    setNotice(data);
    setIsAdmin(isAdminLoggedIn());
    setLoading(false);
  }, [id, navigate]);

  const handleDelete = () => {
    if (window.confirm('정말로 이 공지사항을 삭제하시겠습니까?')) {
      deleteNotice(id);
      alert('삭제되었습니다.');
      navigate('/notice');
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  if (loading) return <div className="notice-container">불러오는 중...</div>;

  return (
    <div className="notice-container">
      <div className="notice-detail-header">
        <h2 className="notice-detail-title">{notice.title}</h2>
        <div className="notice-meta">
          <span>작성일: {formatDate(notice.date)}</span>
          <span>조회수: {notice.views}</span>
        </div>
      </div>
      
      <div className="notice-content">
        {notice.content}
      </div>
      
      <div className="notice-actions">
        <Link to="/notice" className="notice-btn outline">목록으로</Link>
        
        {isAdmin && (
          <div className="admin-actions">
            <Link to={`/admin/notice/edit/${notice.id}`} className="notice-btn outline">수정</Link>
            <button onClick={handleDelete} className="notice-btn danger">삭제</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeDetail;
