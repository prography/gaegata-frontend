import React from 'react';
import { Modal } from 'antd';
import 'styles/common';

interface Props {
  children: React.ReactNode;
  visible: boolean;
  width: number;
  handleCancel: () => void;
}

const ModalComponent: React.FunctionComponent<Props> = ({
  children,
  handleCancel,
  visible,
  width,
}) => {
  return (
    <>
      <Modal
        visible={visible}
        footer={null}
        onCancel={handleCancel}
        style={{
          textAlign: 'center',
          borderRadius: '10px',
        }}
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
