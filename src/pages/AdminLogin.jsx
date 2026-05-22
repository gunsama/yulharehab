import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginAdmin } from '../utils/noticeStore';
import '../styles/Notice.css';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginAdmin(password)) {
      // 로그인 성공 시 공지사항 목록 또는 원래 가려던 곳으로 리다이렉트
      const from = location.state?.from?.pathname || '/notice';
      navigate(from);
    } else {
      setError('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div className="notice-container">
      <div className="admin-form-container">
        <h2>관리자 로그인</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="관리자 비밀번호를 입력하세요"
              required
            />
            {error && <div className="error-message">{error}</div>}
          </div>
          <div className="form-actions">
            <button type="submit" className="notice-btn" style={{ width: '100%' }}>
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
