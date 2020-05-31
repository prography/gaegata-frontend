import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'components/Header';

const HeaderContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: StoreState) => state.auth.me);

  const [visible, setVisible] = useState(false);

  const handleLogout = useCallback((): void => {}, [dispatch]);

  const handleVisible = (): void => {
    setVisible(true);
  };

  const handleCancel = useCallback((): boolean => {
    setVisible(false);
    return visible;
  }, [visible]);

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
