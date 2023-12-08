// src/utils/initialize.js
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/actions/userActions';

export const initializeApp = () => {
  const dispatch = useDispatch();

  // 1. 로컬 스토리지에 토큰이 있는지 확인합니다.
  const token = localStorage.getItem('token');

  if (token) {
    // 2. 토큰이 있는 경우 Redux 스토어의 상태를 업데이트하기 위해 로그인 액션을 디스패치합니다.
    dispatch(login({ username: '', isAuthenticated: true }));
  } else {
    // 3. 토큰이 없는 경우 초기 상태가 올바르게 설정되도록 로그아웃 액션을 디스패치합니다.
    dispatch(logout());
  }
};