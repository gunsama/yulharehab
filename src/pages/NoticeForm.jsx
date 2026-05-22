import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { isAdminLoggedIn, saveNotice, getNotice } from '../utils/noticeStore';
import '../styles/Notice.css';

const NoticeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // 관리자 접근 제어
    if (!isAdminLoggedIn()) {
      alert('관리자만 접근할 수 있습니다.');
      navigate('/admin/login');
      return;
    }

    if (id) {
      setIsEditMode(true);
      const notice = getNotice(id);
      if (notice) {
        setFormData({ title: notice.title, content: notice.content });
      } else {
        alert('존재하지 않는 공지사항입니다.');
        navigate('/notice');
      }
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    saveNotice({
      id: id ? parseInt(id) : null,
      title: formData.title,
      content: formData.content,
    });

    alert(isEditMode ? '수정되었습니다.' : '저장되었습니다.');
    navigate('/notice');
  };

  return (
    <div className="notice-container">
      <div className="admin-form-container" style={{ maxWidth: '800px', margin: '40px auto' }}>
        <h2>{isEditMode ? '공지사항 수정' : '공지사항 쓰기'}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              placeholder="공지사항 제목을 입력하세요"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              name="content"
              className="form-control"
              value={formData.content}
              onChange={handleChange}
              placeholder="공지사항 내용을 입력하세요"
              required
            />
          </div>
          
          <div className="form-actions">
            <Link to={id ? `/notice/${id}` : '/notice'} className="notice-btn outline">
              취소
            </Link>
            <button type="submit" className="notice-btn">
              {isEditMode ? '수정 완료' : '등록 완료'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoticeForm;
