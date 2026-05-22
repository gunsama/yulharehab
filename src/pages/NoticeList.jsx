import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getNotices, isAdminLoggedIn } from '../utils/noticeStore';
import '../styles/Notice.css';

const NoticeList = () => {
  const [notices, setNotices] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 마운트될 때 공지사항 목록과 관리자 로그인 상태 확인
    setNotices(getNotices());
    setIsAdmin(isAdminLoggedIn());
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  return (
    <div className="notice-container">
      <div className="notice-header">
        <h1 className="notice-title">공지사항</h1>
        {isAdmin && (
          <Link to="/admin/notice/write" className="notice-btn">
            글쓰기
          </Link>
        )}
      </div>

      <table className="notice-table">
        <thead>
          <tr>
            <th width="10%">번호</th>
            <th width="60%">제목</th>
            <th width="15%">작성일</th>
            <th width="15%">조회수</th>
          </tr>
        </thead>
        <tbody>
          {notices.length > 0 ? (
            notices.map((notice, index) => (
              <tr key={notice.id}>
                <td className="id-cell">{notices.length - index}</td>
                <td className="title-cell">
                  <Link to={`/notice/${notice.id}`}>{notice.title}</Link>
                </td>
                <td className="date-cell">{formatDate(notice.date)}</td>
                <td className="views-cell">{notice.views}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="empty-notice">
                등록된 공지사항이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeList;
