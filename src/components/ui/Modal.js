import { Modal } from "antd";

export default function MainModal(props) {
  return (
    <Modal
      title={props.title}
      visible={props.isVisible}
      onOk={props.onOkay}
      onCancel={props.onCancel}
    >
      {props.children}
    </Modal>
  );
}
