import React from 'react';
import { Spin } from 'antd';
import { PageLoadingOverlay } from 'styles/common';

const PageLoading = () => {
  return (
    <PageLoadingOverlay>
      <Spin tip="loading..." />
    </PageLoadingOverlay>
  );
};
export default PageLoading;
