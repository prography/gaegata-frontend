import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myPage } from 'store/mypage/action';

const MyPage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: StoreState) => state.auth);

  const { username, email } = useSelector(
    (state: StoreState) => state.myPage.profile,
  );

  const getData = useCallback(() => {
    dispatch(myPage());
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {console.log(username)}
      {console.log(auth)}
    </>
  );
};

export default MyPage;
