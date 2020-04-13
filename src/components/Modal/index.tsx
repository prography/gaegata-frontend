import React from 'react';
import { Modal } from 'antd';
import 'styles/common';

interface Props {
  children: React.ReactNode;
  visible: boolean;
  width: number;
  title: String;
  handleCancel: () => void;
}

const ModalComponent: React.FunctionComponent<Props> = ({
  children,
  handleCancel,
  visible,
  width,
  title,
}) => {
  return (
    <>
      <Modal
        title={title}
        visible={visible}
        footer={null}
        onCancel={handleCancel}
        style={{ textAlign: 'center', borderRadius: '10px' }}
        width={width}
        className="modal-border"
        maskClosable={false}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalComponent;
