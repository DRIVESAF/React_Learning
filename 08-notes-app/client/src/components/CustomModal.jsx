import { Modal, message } from "antd";

const CustomModal = ({
  visible,
  title,
  content,
  onConfirm,
  onCancel,
  confirmText = "确认",
  cancelText = "取消",
  confirmButtonProps = {},
  cancelButtonProps = {},
  showSuccessMessage = true,
  successMessage = "操作成功",
  errorMessage = "操作失败",
}) => {
  return (
    <Modal
      title={title}
      open={visible}
      onOk={async () => {
        try {
          await onConfirm();
          if (showSuccessMessage) {
            message.success(successMessage);
          }
        } catch (error) {
          console.error("Operation failed:", error);
          message.error(errorMessage);
        }
      }}
      onCancel={onCancel}
      okText={confirmText}
      cancelText={cancelText}
      okButtonProps={confirmButtonProps}
      cancelButtonProps={cancelButtonProps}
    >
      {content}
    </Modal>
  );
};

export default CustomModal;
