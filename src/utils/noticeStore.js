const NOTICES_KEY = 'yulha_notices';
const ADMIN_AUTH_KEY = 'yulha_admin_auth';
const ADMIN_PASSWORD = '8133'; // 하드코딩된 비밀번호

// 초기 더미 데이터 설정 (데이터가 없을 때만)
const initializeNotices = () => {
  const existing = localStorage.getItem(NOTICES_KEY);
  if (!existing) {
    const dummyNotices = [
      {
        id: 1,
        title: '율하재활의학과의원 진료 시간 안내',
        content: '안녕하세요. 율하재활의학과의원입니다.\n\n저희 병원의 진료 시간은 다음과 같습니다.\n- 평일: 오전 9시 ~ 오후 6시\n- 토요일: 오전 9시 ~ 오후 1시\n- 점심시간: 오후 1시 ~ 오후 2시\n- 일요일 및 공휴일: 휴진\n\n내원 시 참고 부탁드립니다. 감사합니다.',
        date: new Date('2023-10-01T09:00:00').toISOString(),
        views: 125,
      },
      {
        id: 2,
        title: '독감 예방접종 안내',
        content: '본원에서는 독감 예방접종을 실시하고 있습니다.\n자세한 사항은 데스크로 문의해 주시기 바랍니다.',
        date: new Date('2023-10-15T10:30:00').toISOString(),
        views: 89,
      }
    ];
    localStorage.setItem(NOTICES_KEY, JSON.stringify(dummyNotices));
  }
};

// 모든 공지사항 가져오기 (최신순 정렬)
export const getNotices = () => {
  initializeNotices();
  const notices = JSON.parse(localStorage.getItem(NOTICES_KEY)) || [];
  return notices.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// 특정 공지사항 가져오기 및 조회수 증가
export const getNotice = (id) => {
  const notices = getNotices();
  const noticeIndex = notices.findIndex(n => n.id === parseInt(id));
  
  if (noticeIndex === -1) return null;
  
  const notice = notices[noticeIndex];
  
  // 조회수 증가 후 저장
  notices[noticeIndex] = { ...notice, views: notice.views + 1 };
  localStorage.setItem(NOTICES_KEY, JSON.stringify(notices));
  
  return notices[noticeIndex];
};

// 공지사항 저장 (생성/수정)
export const saveNotice = (noticeData) => {
  const notices = getNotices();
  
  if (noticeData.id) {
    // 수정
    const index = notices.findIndex(n => n.id === parseInt(noticeData.id));
    if (index !== -1) {
      notices[index] = { ...notices[index], ...noticeData, id: parseInt(noticeData.id) };
    }
  } else {
    // 생성
    const newId = notices.length > 0 ? Math.max(...notices.map(n => n.id)) + 1 : 1;
    notices.push({
      ...noticeData,
      id: newId,
      date: new Date().toISOString(),
      views: 0
    });
  }
  
  localStorage.setItem(NOTICES_KEY, JSON.stringify(notices));
};

// 공지사항 삭제
export const deleteNotice = (id) => {
  const notices = getNotices();
  const filtered = notices.filter(n => n.id !== parseInt(id));
  localStorage.setItem(NOTICES_KEY, JSON.stringify(filtered));
};

// --- 관리자 인증 관련 ---

export const loginAdmin = (password) => {
  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem(ADMIN_AUTH_KEY, 'true'); // 보안을 위해 session storage 사용 권장되나 임시로 사용
    return true;
  }
  return false;
};

export const logoutAdmin = () => {
  sessionStorage.removeItem(ADMIN_AUTH_KEY);
};

export const isAdminLoggedIn = () => {
  return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true';
};
