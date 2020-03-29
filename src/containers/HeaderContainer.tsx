import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'components/Header';
import { logout } from 'actions/auth';
import authUtil from 'utils/storage';
import { IRootState } from 'reducers/index';

const HeaderContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: IRootState) => state.auth.user);

  const [visible, setVisible] = useState(false);

  const handleLogout = useCallback((): void => {
    dispatch(logout());
    authUtil.remove('USER-KEY');
    window.location.href = '/';
  }, [dispatch]);

  const handleVisible = (): void => {
    setVisible(true);
  };

  const handleCancel = (): boolean => {
    setVisible(false);
    return visible;
  };

  return (
    <Header
      visible={visible}
      handleVisible={handleVisible}
      handleCancel={handleCancel}
      isLoggedIn={isLoggedIn}
      handleLogout={handleLogout}
    />
  );
};

export default HeaderContainer;
